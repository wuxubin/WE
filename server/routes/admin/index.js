module.exports = app => {
  const express = require('express')
  const jwt = require('jsonwebtoken')
  const AdminUser = require('../../models/AdminUser')
  const assert = require('http-assert')
  const router = express.Router({
    // 合并url参数
    mergeParams: true
  })
  router.post('/', async (req, res) => {
    const model = await req.Model.create(req.body)
    res.send(model)
  })
  router.put('/:id', async (req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })
  router.delete('/:id', async (req, res) => {
    await req.Model.findByIdAndDelete(req.params.id)
    res.send({
      success: true
    })
  })
  router.get('/', async (req, res) => {
    const queryOptions = {}
    if (req.Model.modelName === 'Category') {
      queryOptions.populate = 'parent'
    } else if (req.Model.modelName === 'Article') {
      queryOptions.populate = 'categories'
    }
    const items = await req.Model.find({}, { body: 0 }).setOptions(queryOptions).sort({_id: -1}).limit(20)
    // const items = await req.Model.find({}, { body: 0 }).setOptions(queryOptions)
    res.send(items)
  })
  router.get('/:id', async (req, res) => {
    let model = await req.Model.findById(req.params.id)
    if (req.Model.modelName === 'Document') {
      const Category = require(`../../models/Category`)
      const categories = await Category.aggregate([
        { $match: { parent: model._id } },
        {
          $lookup: {
            from: 'articles',
            localField: '_id',
            foreignField: 'categories',
            as: 'articleList',
          }
        }, {
          $project: {
            name: 1,
            articleList: {
              _id: 1,
              title: 1,
            }
          }
        }
      ])
      model = {
        _id: model._id,
        name: model.name,
        desc: model.desc,
        data: categories,
      }
    }
    res.send(model)
  })
  // 登录校验中间件
  const authMiddleware = require('../../middleware/auth')
  const resourceMiddleware = require('../../middleware/resource')
  app.use('/admin/api/rest/:resource', authMiddleware(), resourceMiddleware(), router)

  app.post('/admin/api/login', async (req, res) => {
    const { username, password } = req.body
    // 1.根据用户名找用户
    const user = await AdminUser.findOne({ username }).select('+password')
    assert(user, 422, '用户不存在')
    // 2.校验密码
    const isValid = require('bcrypt').compareSync(password, user.password)
    assert(isValid, 422, '密码错误')
    // 3.返回token
    const token = jwt.sign({ id: user._id }, app.get('secret'))
    res.send({ token })
  })

  // 错误处理函数
  app.use(async (err, req, res, next) => {
    // console.log(err)
    res.status(err.statusCode || 500).send({
      message: err.message
    })
  })
}