const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }],
  title: {
    type: String,
    required: true
  },
  desc: { type: String },
  body: {
    type: String,
  },
}, {
  timestamps: true
})

// schema.virtual('children', {
//   localField: '_id',
//   foreignField: 'parent',
//   justOne: false,
//   ref: 'Category'
// })

module.exports = mongoose.model('Article', schema)