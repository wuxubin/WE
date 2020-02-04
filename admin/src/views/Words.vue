<template>
  <el-container style="height:calc( 100vh - 64px )">
    <!-- <el-aside
      width="400px"
      style="background-color: #e8e7e6 height: 100vh; overflow-y:auto;height:100vh"
    >
      <el-menu router :default-openeds="['1']" unique-opened :default-active="$route.path">
        <el-submenu v-for="(item , index) in helps" :key="index" :index="index.toString()">
          <template slot="title">{{item.Key}}</template>
          <el-menu-item-group>
            <el-menu-item v-for="(d,i) in item.Data" :key="'s'+i">{{d.Name}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>-->
    <el-aside width="400px">
      <el-menu router :default-openeds="['1']" unique-opened :default-active="$route.path">
        <el-submenu v-for="(item , index) in helps" :key="index" :index="index.toString()">
          <template slot="title">{{item.Key}}</template>
          <el-menu-item-group>
            <el-menu-item v-for="(d,i) in item.Data" :key="'s'+i">{{d.Name}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-main>Main</el-main>
  </el-container>
</template>


<style>
</style>

<script>
export default {
  data() {
    return {
      helps: [
        {
          Key: "Job（订单信息）",
          show: false,
          Data: [
            { Name: "Accuray", Desc: "Writehere..." },
            { Name: "ActualTotalPrice", Desc: "订单应收价格" },
            { Name: "AdditionalFee", Desc: "订单中的附加费用（已弃用）" },
            { Name: "AdditionalFeeDesc", Desc: "订单附加费说明（已弃用）" },
            {
              Name: "AllInProductionBatch",
              Desc: "物料是否全部安排进入生产批次"
            },
            { Name: "AllPartTotalArea", Desc: "全部板件平方数汇总" },
            { Name: "AppendUniqueName", Desc: "临时变量（报表用不到）" },
            { Name: "ArrangedPartsCount", Desc: "已经排产的板件数量" },
            {
              Name: "ArrangeInProductionBatchStatus",
              Desc: "订单的排产状态0=未安排，1=部分安排，2=全部安排"
            },
            { Name: "ArrangeProductTime", Desc: "排产时间" },
            { Name: "ArrangeShipTime", Desc: "安排出货时间" },
            {
              Name: "ArrangeShipUserChineseName",
              Desc: "安排出货人员中文姓名"
            },
            { Name: "ArrangeShipUserId", Desc: "安排出货人员编号" },
            { Name: "AssignTime", Desc: "审核派单时间" },
            { Name: "AssignToVerifyUserId", Desc: "临时变量（报表用不到）" },
            { Name: "AssignToVerifyUserName", Desc: "临时变量（报表用不到）" },
            { Name: "AssignUserId", Desc: "审核派单人员编号" },
            { Name: "AssignUserName", Desc: "审核派单人员姓名" },
            { Name: "BillDue", Desc: "欠款" },
            { Name: "CancelByFactoryUser", Desc: "是否被工厂用户撤销" },
            { Name: "CancelUserName", Desc: "取消用户姓名" },
            { Name: "CanDelivery", Desc: "能否出库" },
            { Name: "ComleteStorged", Desc: "是否全部入库" },
            { Name: "Contractor", Desc: "联系人" },
            { Name: "ContractTel", Desc: "联系电话" },
            { Name: "ConverUnits", Desc: "转换单位（WM预留字段）" },
            { Name: "CreatTime", Desc: "创建时间" },
            { Name: "CreatUser", Desc: "创建者用户名" },
            { Name: "CustomerCode", Desc: "客户编码" },
            {
              Name: "CustomizeProductionNodeIndex",
              Desc: "自定义节点序号，标识订单状态用"
            },
            { Name: "CustomizeProductionNodeName", Desc: "自定义节点名称" },
            { Name: "CutPartsCount", Desc: "已开料板件数量" },
            { Name: "CutTime", Desc: "开料时间" },
            { Name: "DeadLine", Desc: "截止时间" },
            { Name: "DealerCity", Desc: "经销商所在城市" },
            { Name: "DealerCompany", Desc: "经销商公司" },
            { Name: "DealerId", Desc: "经销商编号" },
            { Name: "DealerLevelId", Desc: "经销商等级" },
            { Name: "DealerLevelName", Desc: "经销商等级名称" },
            { Name: "DealerName", Desc: "经销商姓名" },
            { Name: "DealerProvince", Desc: "经销商所在省份" },
            { Name: "DealerTag", Desc: "经销商标签" },
            {
              Name: "DealayStatus",
              Desc:
                "延期状态-1=正常，1=提醒，延误=0，生产完成=2，这个字段是通过延误规则即时计算得来的，报表不要用。"
            },
            { Name: "DesiginerChineseName", Desc: "设计师中文姓名" },
            { Name: "DrilledPartsCount", Desc: "已打孔板件数量" },
            { Name: "DrillTime", Desc: "打孔时间" },
            { Name: "DueDate", Desc: "到期日期（WM的数据）" },
            { Name: "EdgebandingTotalLength", Desc: "封边条总长" },
            { Name: "EdgeSealedPartsCount", Desc: "已封边板件总数" },
            { Name: "EdgeSealTime", Desc: "封边时间" },
            { Name: "ExpectDelivery", Desc: "期望交付日期" },
            {
              Name: "FiltedPartTotalArea",
              Desc: "过滤的板件面积（过时的字段）"
            },
            { Name: "FinishShipTime", Desc: "完成出货时间" },
            { Name: "FormByCustomer", Desc: "是否客户自输单" },
            { Name: "FormDiscount", Desc: "客户自输单折扣" },
            {
              Name: "FormDiscountStr",
              Desc: "临时变量，自输单折扣字符（报表不用）"
            },
            { Name: "HasAttachments", Desc: "是否有附件" },
            {
              Name: "HasManufacturingProcessCategory",
              Desc: "是否包含生产工艺分类"
            },
            { Name: "Id", Desc: "编号" },
            { Name: "ImportedMVJobName", Desc: "WM工作任务名称" },
            { Name: "ImportedMVJobsInfo", Desc: "WM工作任务信息" },
            {
              Name: "IndexInProductionBatch",
              Desc: "该订单在生产批次内的序号"
            },
            {
              Name: "InProductionBatchPartsCount",
              Desc: "进入生产批次的板件数量"
            },
            { Name: "IsAppend", Desc: "是否补单" },
            { Name: "IsArangeShip", Desc: "是否安排出货" },
            { Name: "IsDelay", Desc: "是否延期（已弃用）" },
            {
              Name: "IsRevertMachineCodeError",
              Desc: "导入数据时是否出现机加工代码转换错误"
            },
            { Name: "IsUrgent", Desc: "是否加急" },
            { Name: "IsWM", Desc: "数据源是否为WM" },
            { Name: "JobAddress", Desc: "工作任务地址" },
            { Name: "JobName", Desc: "订单名称" },
            { Name: "JobNumber", Desc: "订单编号" },
            { Name: "KujialeDesignId", Desc: "酷家乐设计编号" },
            { Name: "KujialePlanId", Desc: "酷家乐计划编号" },
            { Name: "LastImportUserName", Desc: "最后一次导入者姓名" },
            { Name: "MainMaterial", Desc: "主要材料" },
            {
              Name: "ManuCates",
              Desc: "订单特殊工艺名称，多个的话就用“|”隔开"
            },
            { Name: "Misc1", Desc: "参数一" },
            { Name: "Misc2", Desc: "参数二" },
            { Name: "Misc3", Desc: "参数三" },
            { Name: "Misc4", Desc: "参数四" },
            { Name: "Misc5", Desc: "参数五" },
            { Name: "Misc6", Desc: "参数六" },
            { Name: "Misc7", Desc: "参数七" },
            { Name: "Misc8", Desc: "参数八" },
            { Name: "Misc9", Desc: "参数九" },
            { Name: "NeedArrangeProductQty", Desc: "需要安排生产的产品数量" },
            { Name: "NeedDrillPartsCount", Desc: "需要打孔板件总量" },
            { Name: "NeedDrillPartsArea", Desc: "需要打孔板件面积" },
            { Name: "NeedEdgebandingPartsArea", Desc: "需要封边板件面积" },
            { Name: "NeedEdgebandingPartsCount", Desc: "需要封边板件总量" },
            { Name: "NeedImport", Desc: "是否需要导入" },
            { Name: "NeedPackagePartsArea", Desc: "需要包装板件面积" },
            { Name: "NeedPackagePartsCount", Desc: "需要包装板件总量" },
            { Name: "NeedPrintReports", Desc: "需要打印的报表" },
            { Name: "NeedSyncStatus", Desc: "是否需要同步前后端状态" },
            { Name: "NeedSyncStatusUserName", Desc: "同步状态者姓名" },
            {
              Name: "NotAllInProductionBatch",
              Desc: "是否只有部分板件进入生产批次"
            },
            { Name: "NotCompletelyArranged", Desc: "是否部分排产" },
            { Name: "NumberFormat", Desc: "编码格式" },
            { Name: "OptimizeTotalArea", Desc: "优化总面积" },
            { Name: "OrderGroupIndex", Desc: "订单组序号" },
            { Name: "OrderGroupNumber", Desc: "订单组编号" },
            { Name: "OrderType", Desc: "订单类型" },
            { Name: "OriginalOrderNumber", Desc: "原订单编号（补单才有）" },
            { Name: "OriginalTotalPrice", Desc: "初始价格总计" },
            { Name: "PackageCategoryName", Desc: "包装分类名称" },
            { Name: "PackageCompleteTime", Desc: "包装完成时间" },
            { Name: "PackagePartsCount", Desc: "包装板件总量" },
            { Name: "PackagePartTotalArea", Desc: "包装板件总面积" },
            { Name: "PackageTime", Desc: "包装时间" },
            { Name: "PartsArea", Desc: "板件面积" },
            { Name: "PartsCount", Desc: "板件总量" },
            { Name: "ProductDays", Desc: "预估生产时间" },
            { Name: "ProductionBatchId", Desc: "产品批次编号" },
            { Name: "ProductQty", Desc: "产品数量" },
            { Name: "QuoteFileName", Desc: "报价单的文件名称" },
            { Name: "QuoteTempPdf", Desc: "报价单pdf" },
            { Name: "QuoteTempXls", Desc: "报价单xls" },
            { Name: "Remark", Desc: "备注" },
            {
              Name: "RevertMachineCodeErrorMsg",
              Desc: "导入数据时机加工代码还原错误信息"
            },
            { Name: "SameGroupOrdersQty", Desc: "同组订单数量" },
            { Name: "ShipedPartsCount", Desc: "出货板件数量" },
            { Name: "Shipment_CountractAdd", Desc: "出货地址" },
            { Name: "Shipment_CountractAdd", Desc: "收货地址" },
            { Name: "Shipment_CountractPerson", Desc: "收货人" },
            { Name: "Shipment_CountractTel", Desc: "收货人联系电话" },
            { Name: "Shipment_FreightStation", Desc: "货运站" },
            { Name: "ShipTime", Desc: "出货时间" },
            { Name: "SmallPartTotalArea", Desc: "小板总面积" },
            { Name: "Status", Desc: "节点状态" },
            { Name: "StorageComleteTime", Desc: "入库完成时间" },
            { Name: "StoragePartsCount", Desc: "入库板件总量" },
            { Name: "StorageTime", Desc: "入库时间" },
            { Name: "SubmitTime", Desc: "提交时间" },
            { Name: "SubmitUser", Desc: "提交人" },
            { Name: "SubOrderName", Desc: "批量创建订单组的组名称" },
            { Name: "TestedPartCount", Desc: "已过检的板件数量" },
            { Name: "TimeStamp", Desc: "时间戳" },
            { Name: "TotalArea", Desc: "总面积" },
            { Name: "TotalArragedArea", Desc: "总排产面积" },
            { Name: "TotalInProductionBatchArea", Desc: "进入生产批次总面积" },
            { Name: "TotalPrice", Desc: "总价" },
            { Name: "UnitOfMeasure", Desc: "度量单位" },
            { Name: "UnOptimizeTotalArea", Desc: "未优化总面积" },
            { Name: "UnPackagePartsTotalArea", Desc: "未包装板件总面积" },
            { Name: "UploadDate", Desc: "上传日期" },
            { Name: "VerifyOrderTime", Desc: "审核时间" },
            { Name: "VerifyPayTime", Desc: "付款确认时间" },
            { Name: "VerifyRejected", Desc: "是否被审核驳回" },
            { Name: "VerifyRemark", Desc: "审核驳回备注" },
            { Name: "VerifyUserId", Desc: "审核人员编号" },
            { Name: "VerifyUserName", Desc: "审核人员姓名" },
            { Name: "WMReleasePath", Desc: "Writehere..." }
          ]
        },
        {
          Key: "Products（产品信息）",
          show: false,
          Data: [
            { Name: "AllPartTotalArea", Desc: "全部板件总面积" },
            { Name: "ArrangedPartArea", Desc: "已排产板件面积" },
            { Name: "ArrangedPartCount", Desc: "已排产板件数量" },
            {
              Name: "ArrangeInProductionBatchStatus",
              Desc: "安排生产状态0=未排产，1=部分排产，2=全部安排"
            },
            { Name: "Comments", Desc: "注解1" },
            { Name: "Comments2", Desc: "注解2" },
            { Name: "Comments3", Desc: "注解3" },
            { Name: "CompletePackaged", Desc: "是否完成包装" },
            {
              Name: "CustomizeProductionNodeIndex",
              Desc: "自定义节点的索引号"
            },
            { Name: "CustomizeProductionNodeName", Desc: "自定义节点的名称" },
            { Name: "Depth", Desc: "深度" },
            { Name: "Description", Desc: "产品名称" },
            { Name: "DoorProductId", Desc: "门产品编号" },
            {
              Name: "DoorProductJsonStr",
              Desc: "门板产品的json序列化字符串（报表用不到）"
            },
            { Name: "EdgebandingTotalLength", Desc: "封边总长度" },
            { Name: "FaceFramePicture", Desc: "WM预留" },
            { Name: "FieldLabor1", Desc: "WM预留" },
            { Name: "FieldLabor2", Desc: "WM预留" },
            { Name: "FieldLabor3", Desc: "WM预留" },
            { Name: "FieldLabor4", Desc: "WM预留" },
            { Name: "FieldLabor5", Desc: "WM预留" },
            { Name: "FiltedPartTotalArea", Desc: "过滤的板件面积（已过时）" },
            { Name: "Handle", Desc: "WM预留" },
            {
              Name: "HardwareAreaComputed",
              Desc: "是否计算五金面积（统计费用时候用到的数据）"
            },
            {
              Name: "HasManufacturingProcessCategory",
              Desc: "是否有特殊工艺分类"
            },
            { Name: "Height", Desc: "高度" },
            { Name: "Id", Desc: "编号" },
            {
              Name: "InproductionBatchPartsCount",
              Desc: "进入生产批次板件数量"
            },
            { Name: "IsAssemblyShip", Desc: "是否整装发货" },
            { Name: "ItemNumber", Desc: "产品序号（WM）" },
            { Name: "JobId", Desc: "订单编号" },
            {
              Name: "LastProductionLineId",
              Desc: "最近一次放行的生产批次的产线ID"
            },
            {
              Name: "LastProductionLineName",
              Desc: "最近一次放行的生产批次的产线名称"
            },
            { Name: "MatFile", Desc: "规格组文件" },
            { Name: "MvReleasePath", Desc: "WM放行批次路径" },
            { Name: "NeedDrillPartsArea", Desc: "需要打孔的板件面积" },
            { Name: "NeedDrillPartsCount", Desc: "需要打孔的板件总量" },
            { Name: "NeedEdgebandingPartsArea", Desc: "需要封边的板件面积" },
            { Name: "NeedEdgebandinPartsCount", Desc: "需要封边的板件总量" },
            { Name: "NeedImport", Desc: "是否导入" },
            { Name: "NeedPackagePartsArea", Desc: "需要包装的板件面积" },
            { Name: "NeedPackagePartsCount", Desc: "需要包装的板件数量" },
            {
              Name: "NotCombinedPartToPackage",
              Desc: "是否没有任何板件需要包装"
            },
            { Name: "NotCompletelyArranged", Desc: "是否部分排产" },
            {
              Name: "NothingToPackage",
              Desc: "是否没有物料需要包装（包含五金和板件）"
            },
            { Name: "OptimizeTotalArea", Desc: "优化总面积" },
            { Name: "PackagePartTotalArea", Desc: "已包装的板件总面积" },
            { Name: "PartsArea", Desc: "板件面积" },
            { Name: "PartsCount", Desc: "板件数量" },
            { Name: "Picture", Desc: "ͼƬ" },
            { Name: "Price1", Desc: "价格1" },
            { Name: "Price2", Desc: "价格2" },
            { Name: "Price3", Desc: "价格3" },
            { Name: "Price4", Desc: "价格4" },
            { Name: "Price5", Desc: "价格5" },
            { Name: "ProductsIndex", Desc: "产品索引号" },
            { Name: "ReleaseNumber", Desc: "版本号" },
            {
              Name: "RevertMachineCodeErrorMsg",
              Desc: "还原机加工代码错误信息"
            },
            { Name: "SameProductIndex", Desc: "同产品索引号" },
            { Name: "SameProductQty", Desc: "同产品数量" },
            { Name: "ShopLabor1", Desc: "WM预留" },
            { Name: "ShopLabor2", Desc: "WM预留" },
            { Name: "ShopLabor3", Desc: "WM预留" },
            { Name: "ShopLabor4", Desc: "WM预留" },
            { Name: "ShopLabor5", Desc: "WM预留" },
            { Name: "ShopLabor6", Desc: "WM预留" },
            { Name: "ShopLabor7", Desc: "WM预留" },
            { Name: "ShopLabor8", Desc: "WM预留" },
            { Name: "ShopLabor9", Desc: "WM预留" },
            { Name: "SmallPartTotalArea", Desc: "小板件总面积" },
            { Name: "Status", Desc: "节点状态" },
            { Name: "TheFirstInSameProducts", Desc: "同产品中的第一个" },
            { Name: "TotalArea", Desc: "总面积" },
            {
              Name: "TotalInProductionBatchArea",
              Desc: "已进入生产批次的板件面积"
            },
            { Name: "UniqueNumber", Desc: "唯一码" },
            { Name: "UnOptimizeTotalArea", Desc: "未优化板件面积" },
            { Name: "UnPackagePartsTotalArea", Desc: "未包装板件面积" },
            { Name: "UserAppend", Desc: "是否用户手动添加的产品" },
            { Name: "Volume", Desc: "体积" },
            { Name: "Weight", Desc: "重量" },
            { Name: "Width", Desc: "宽度" },
            { Name: "WMProductsIndex", Desc: "WM产品索引号" }
          ]
        },
        {
          Key: "Prompts",
          show: false,
          Data: [
            { Name: "ControlType", Desc: "控制类型" },
            { Name: "Hidden", Desc: "是否隐藏" },
            { Name: "Id", Desc: "编号" },
            { Name: "JobId", Desc: "订单编号" },
            { Name: "ProductId", Desc: "产品编号" },
            { Name: "ProductsIndex", Desc: "产品索引号" },
            { Name: "PromptsName", Desc: "变量名称" },
            { Name: "PromptsValue", Desc: "变量值" },
            { Name: "QtyField", Desc: "数量字段" }
          ]
        },
        {
          Key: "Subassemblys（组件信息）",
          show: false,
          Data: [
            { Name: "Comments", Desc: "注解1" },
            { Name: "Comments2", Desc: "注解2" },
            { Name: "Comments3", Desc: "注解3" },
            { Name: "Depth", Desc: "深度" },
            { Name: "FaceFramePicture", Desc: "WM预留" },
            { Name: "FileName", Desc: "组件名称" },
            { Name: "Height", Desc: "高度" },
            { Name: "Id", Desc: "编号" },
            { Name: "JobId", Desc: "订单编号" },
            { Name: "ParentSubassemblyCounter", Desc: "父级组件数量" },
            { Name: "ProductId", Desc: "产品编号" },
            { Name: "ProductIndex", Desc: "产品索引号" },
            { Name: "SameProductIndex", Desc: "同产品索引号" },
            { Name: "SubassemblyCounter", Desc: "组件数量" },
            { Name: "SubassemblyName", Desc: "组件名称" },
            { Name: "UniqueNumber", Desc: "唯一码" },
            { Name: "Width", Desc: "宽度" },
            { Name: "Xorigin", Desc: "X坐标" },
            { Name: "Yorigin", Desc: "Y坐标" },
            { Name: "Zorigin", Desc: "Z坐标" }
          ]
        },
        {
          Key: "CombinedParts（板件信息）",
          show: false,
          Data: [
            { Name: "ActualArea", Desc: "真实面积" },
            { Name: "ActualCutLength", Desc: "真实开料长度" },
            { Name: "ActualCutWidth", Desc: "真实开料宽度" },
            { Name: "ActualMaterial", Desc: "真实材料" },
            {
              Name: "AlreadyConvertToCommonSequence",
              Desc: "机加工代码是否转化为通用格式"
            },
            { Name: "Area", Desc: "面积" },
            { Name: "Barcode", Desc: "WM唯一码" },
            { Name: "BasePoint", Desc: "基准点" },
            { Name: "BrdFtCost", Desc: "Writehere..." },
            { Name: "Comments", Desc: "注解1" },
            { Name: "Comments2", Desc: "注解2" },
            { Name: "Comments3", Desc: "注解3" },
            { Name: "Contractor", Desc: "收货人" },
            {
              Name: "CurrentDealerCabinetHorzontalGrainPrice",
              Desc: "柜体材料横纹价格"
            },
            {
              Name: "CurrentDealerCabinetVerticalGrainPrice",
              Desc: "柜体材料竖纹价格"
            },
            {
              Name: "CurrentDealerCabinetWithOutGrainPrice",
              Desc: "柜体材料无纹理价格"
            },
            {
              Name: "CurrentDealerDoorHorzontalGrainPrice",
              Desc: "门板材料横纹价格"
            },
            {
              Name: "CurrentDealerDoorVerticalGrainPrice",
              Desc: "门板材料竖纹价格"
            },
            {
              Name: "CurrentDealerDoorWithOutGrainPrice",
              Desc: "门板材料无纹理价格"
            },
            {
              Name: "CurrentMachineType",
              Desc: "当前机加工类型0=没有加工，1=单面加工，2=双面加工"
            },
            { Name: "CustomizeProductionNodeIndex", Desc: "自定义节点索引" },
            { Name: "CustomizeProductionNodeName", Desc: "自定义节点名称" },
            { Name: "Cut", Desc: "是否开料" },
            { Name: "CutLength", Desc: "开料长度" },
            { Name: "CutWidth", Desc: "开料宽度" },
            { Name: "DealerCompany", Desc: "经销商公司" },
            { Name: "DealerLevelName", Desc: "经销商等级名称" },
            { Name: "DealerTag", Desc: "经销商标签" },
            { Name: "Drilled", Desc: "是否打孔" },
            { Name: "DueDate", Desc: "WM预留" },
            { Name: "EachCost", Desc: "WM预留" },
            { Name: "EBLength1", Desc: "封边长1" },
            { Name: "EBlength1PreMilling", Desc: "封边长1预铣量" },
            { Name: "EBLength1Thickness", Desc: "封边长1厚度" },
            { Name: "EBLength2", Desc: "封边长2" },
            { Name: "EbLength2PreMilling", Desc: "封边长2预铣量" },
            { Name: "EBLength2Thickness", Desc: "封边长2厚度" },
            { Name: "EBWidth1", Desc: "封边宽1" },
            { Name: "EBWidth1PreMilling", Desc: "封边宽1预铣量" },
            { Name: "EBWidth1Thickness", Desc: "封边宽1厚度" },
            { Name: "EBWidth2", Desc: "封边宽2" },
            { Name: "EBWidth2PreMilling", Desc: "封边宽2预铣量" },
            { Name: "EBWidth2Thickness", Desc: "封边宽2厚度" },
            { Name: "eCutLength", Desc: "开料长度" },
            { Name: "eCutWidth", Desc: "开料宽度" },
            { Name: "Edge1BarCode", Desc: "封边1唯一码" },
            { Name: "Edge1FileName", Desc: "封边1文件名" },
            { Name: "Edge2BarCode", Desc: "封边2唯一码" },
            { Name: "Edge2FileName", Desc: "封边2文件名" },
            { Name: "Edge3BarCode", Desc: "封边3唯一码" },
            { Name: "Edge3FileName", Desc: "封边3文件名" },
            { Name: "Edge4BarCode", Desc: "封边4唯一码" },
            { Name: "Edge4FileName", Desc: "封边4文件名" },
            { Name: "EdgebandingTotalLength", Desc: "封边总长度" },
            { Name: "EdgeSealed", Desc: "是否封边" },
            { Name: "Face5Color", Desc: "面5颜色" },
            { Name: "Face5UniquenumberFileName", Desc: "面5唯一码文件名" },
            { Name: "Face6Barcode", Desc: "面6唯一码" },
            { Name: "Face6Color", Desc: "面6颜色" },
            { Name: "Face6FileName", Desc: "面6文件名" },
            { Name: "Face6MachiningPicture", Desc: "面6机加工图片" },
            { Name: "Face6SequencesHasRoute", Desc: "面6是否有铣型" },
            {
              Name: "Face6SequencesHasXStraight",
              Desc: "面六是否有平行于X轴的铣型"
            },
            {
              Name: "Face6SequencesHasYStraight",
              Desc: "面六是否有平行于Y轴的铣型"
            },
            {
              Name: "Face6SequencesHasOnlyStraight",
              Desc: "面六是否只有直线铣型"
            },
            { Name: "Face6Uniquenumber", Desc: "面6唯一码" },
            { Name: "Face6UniquenumberFileName", Desc: "面6唯一码文件名" },
            { Name: "FigID", Desc: "WM预留" },
            { Name: "FigPartId", Desc: "WM预留" },
            { Name: "Figuredef", Desc: "WM预留" },
            { Name: "FileName", Desc: "文件名" },
            { Name: "FiltedName", Desc: "匹配到的过滤关键字名称" },
            {
              Name: "FixedSideLengthByMerge",
              Desc: "合并板件时合并方向的边长"
            },
            { Name: "FoundFace6Program", Desc: "面6是否有机加工" },
            { Name: "FoundHdrillFace1", Desc: "面1是否有水平孔" },
            { Name: "FoundHdrillFace2", Desc: "面2是否有水平孔" },
            { Name: "FoundHdrillFace3", Desc: "面3是否有水平孔" },
            { Name: "FoundHdrillFace4", Desc: "面4是否有水平孔" },
            { Name: "FoundRouting", Desc: "面五是否有铣型" },
            { Name: "FoundRoutingFace6", Desc: "面6是否有铣型" },
            { Name: "FoundSawing", Desc: "面五是否有锯切" },
            { Name: "FoundSawingFace6", Desc: "面6是否有锯切" },
            { Name: "FoundVdrill", Desc: "面五是否有垂直孔" },
            { Name: "FoundVdrillFace6", Desc: "面6是否有垂直孔" },
            { Name: "GrainFlag", Desc: "纹理类型0=无纹理，1=竖纹，2=横纹" },
            {
              Name: "GrainFlagInt",
              Desc:
                "纹理类型，排产时使用的字段，会考虑是否忽略纹理，导出优化时候用。"
            },
            { Name: "HasFigure", Desc: "WM预留" },
            { Name: "Id", Desc: "编号" },
            {
              Name: "IgnoreComputeHardwareByMachines",
              Desc: "是否忽略计算五金机加工"
            },
            {
              Name: "IgnoreToolNotifyInfo",
              Desc: "节点加工时被过滤掉的刀具信息"
            },
            { Name: "IsAddMargin", Desc: "是否尺寸修正" },
            { Name: "IsAssemblyShipProduct", Desc: "产品是否整装发货" },
            { Name: "IsFilted", Desc: "是否被过滤" },
            {
              Name: "IsFiltedOrMergedOrPrecut",
              Desc: "是否过滤板件、合并板件或二次铣型板件。"
            },
            { Name: "IsManualProduct", Desc: "是否手工板件（已弃用）" },
            { Name: "IsMerged", Desc: "是否合并" },
            { Name: "IsMirror", Desc: "是否镜像" },
            { Name: "IsPackaged", Desc: "是否包装" },
            { Name: "IsPassGrain", Desc: "是否忽略纹理" },
            { Name: "IsPerfectGrain", Desc: "是否完美纹理" },
            { Name: "IsReplaceMaterial", Desc: "是否替换材料" },
            {
              Name: "IsRevertMachineCodeError",
              Desc: "导入数据还原机加工代码时是否有错误"
            },
            { Name: "IsSemipart", Desc: "是否为半成品板件" },
            { Name: "IsSmallPart", Desc: "是否为小板件" },
            { Name: "IsTested", Desc: "是否已过检" },
            { Name: "IsWMOverturn", Desc: "是否WM翻转的板件" },
            { Name: "JobAddress", Desc: "地址" },
            { Name: "JobCounter", Desc: "生产批次内的订单序号" },
            { Name: "JobId", Desc: "订单编号" },
            { Name: "JobName", Desc: "订单名称" },
            { Name: "JobNumber", Desc: "订单编号" },
            { Name: "LaborCost", Desc: "工作成本" },
            { Name: "LaborIndex", Desc: "工作标准" },
            { Name: "LaborTime", Desc: "工作时间" },
            { Name: "LastProductLineId", Desc: "最近排产的产线ID" },
            { Name: "LeftEdge", Desc: "左封边" },
            { Name: "Length", Desc: "长度" },
            { Name: "LengthMargin", Desc: "加长长度" },
            { Name: "LinFtCost", Desc: "Writehere..." },
            { Name: "LowerEdge", Desc: "下封边" },
            { Name: "MachinePoint", Desc: "机加工原点" },
            {
              Name: "MachineType",
              Desc: "机加工类型0=无加工，1=单面加工，2=双面加工"
            },
            { Name: "MachiningPicture", Desc: "机加工图片" },
            { Name: "ManufacturingProcessCategoryId", Desc: "工艺分类编号" },
            { Name: "ManufacturingProcessCategoryName", Desc: "工艺分类名称" },
            { Name: "Material", Desc: "材料名称" },
            { Name: "MaterialCode", Desc: "材料代码" },
            { Name: "MaterialCost", Desc: "材料价格（WM预留）" },
            { Name: "MaterialFlag", Desc: "材料标识(WM预留)" },
            { Name: "MaterialId", Desc: "材料编号" },
            { Name: "MaterialType", Desc: "材料类型" },
            { Name: "MatFile", Desc: "材料文件" },
            { Name: "MergedByLength", Desc: "是否长度方向合并" },
            { Name: "MergedByWidth", Desc: "是否宽度方向合并" },
            { Name: "Misc1", Desc: "参数1" },
            { Name: "Misc2", Desc: "参数2" },
            { Name: "Misc3", Desc: "参数3" },
            { Name: "Misc4", Desc: "参数4" },
            { Name: "Misc5", Desc: "参数5" },
            { Name: "Misc6", Desc: "参数6" },
            { Name: "Misc7", Desc: "参数7" },
            { Name: "Misc8", Desc: "参数8" },
            { Name: "Misc9", Desc: "参数9" },
            { Name: "Misc10", Desc: "参数10" },
            { Name: "ModifyByReImport", Desc: "是否修改模式导入" },
            { Name: "ModifyByReImportTime", Desc: "修改模式导入时间" },
            { Name: "MvReleasePath", Desc: "WM文件路径" },
            {
              Name: "NotExport20ptimize",
              Desc:
                "是否不导出优化（包含不导出优化的板件，合并板件，半成品板件，二次铣型板件）"
            },
            { Name: "NotOutPut", Desc: "不导出优化" },
            { Name: "OnlyHasFace6Sequences", Desc: "是否只有面6加工" },
            { Name: "OrderRemark", Desc: "订单备注" },
            { Name: "OriginalUniqueNumber", Desc: "补单的原板件唯一码" },
            { Name: "PackageCategoryId", Desc: "包装分类编号" },
            { Name: "PackageCategoryIgnoreTest", Desc: "是否免检" },
            { Name: "PackageCategoryIsMinor", Desc: "包装分类是否为次要" },
            { Name: "PackageCategoryName", Desc: "包装分类名称" },
            {
              Name: "PackageCategorySinglePointHandle",
              Desc: "包装分类是否限制单点操作"
            },
            { Name: "PackageId", Desc: "包装Id" },
            { Name: "PackageKeyboardInput", Desc: "包装是否为键盘输入" },
            { Name: "PackagePartType", Desc: "包装板件类型" },
            { Name: "ParentSubassemblyCounter", Desc: "父级组件计数" },
            { Name: "PartName", Desc: "板件名称" },
            { Name: "PartNameHasFigure", Desc: "Writehere..." },
            { Name: "PartsCounter", Desc: "板件计数" },
            { Name: "PartsIndex", Desc: "板件索引号" },
            { Name: "PartType", Desc: "板件类型" },
            { Name: "PrecutFilted", Desc: "是否二次铣型板件" },
            { Name: "ProductComments", Desc: "产品备注1" },
            { Name: "ProductComments2", Desc: "产品备注2" },
            { Name: "ProductComments3", Desc: "产品备注3" },
            { Name: "ProductDepth", Desc: "产品深度" },
            { Name: "ProductDescription", Desc: "产品名称" },
            { Name: "ProductFaceFramePicture", Desc: "Writehere..." },
            { Name: "ProductHandle", Desc: "Writehere..." },
            { Name: "ProductHeight", Desc: "产品高度" },
            { Name: "ProductId", Desc: "产品编号" },
            { Name: "ProductionBatchCount", Desc: "包含该板件的生产批次数量" },
            { Name: "ProductionBatchNO", Desc: "最近放行的生产批次编号" },
            { Name: "productionLine", Desc: "最近放行的产线名称" },
            {
              Name: "ProductionStatus",
              Desc: "生产类型0=普通，2=预装件，3=不涉及包装"
            },
            { Name: "ProductItemNumber", Desc: "产品项目编号（WM数据）" },
            { Name: "ProductsIndex", Desc: "产品索引" },
            { Name: "ProductWidth", Desc: "产品宽度" },
            { Name: "Qty", Desc: "数量" },
            { Name: "QuoteRule", Desc: "报价规则" },
            { Name: "QuoteRulePrice", Desc: "报价规则价格" },
            { Name: "RecommendMachines", Desc: "建议设备" },
            { Name: "ReplaceMaterialName", Desc: "更换材料名称" },
            {
              Name: "RevertMachineCodeErrorMsg",
              Desc: "还原机加工代码错误信息"
            },
            { Name: "RightEdge", Desc: "右封边" },
            { Name: "RunField", Desc: "Writehere..." },
            { Name: "SameProductIndex", Desc: "同产品索引" },
            { Name: "SemiProductIndex", Desc: "半成品索引" },
            { Name: "SemiProductCounter", Desc: "半成品计数" },
            { Name: "SemiProductId", Desc: "半成品编号" },
            { Name: "SemiProductName", Desc: "半成品名称" },
            { Name: "Shipped", Desc: "是否出货" },
            { Name: "Shipment_ContractAdd", Desc: "收货地址" },
            { Name: "Shipment_ContractPerson", Desc: "收货人" },
            { Name: "Shipment_ContractTel", Desc: "收货人联系电话" },
            { Name: "Shipment_FreightStation", Desc: "货运站" },
            { Name: "SqFtCost", Desc: "每平方价格" },
            {
              Name: "SquencesFace5And6OverTurnAfterFilter",
              Desc: "转换机加工时使用的临时字段"
            },
            { Name: "Status", Desc: "节点状态" },
            { Name: "Storaged", Desc: "是否入库" },
            { Name: "SubassemblyCounter", Desc: "组件计数" },
            { Name: "SubassemblyId", Desc: "组件编号" },
            { Name: "SubassemblyIndex", Desc: "组件索引" },
            { Name: "TestNodeMachineName", Desc: "检验节点机器名称" },
            { Name: "Thickess", Desc: "厚度" },
            { Name: "TurnoverWhenCut", Desc: "开料是否翻板" },
            { Name: "TurnoverWhenDrill", Desc: "打孔是否翻板" },
            {
              Name: "UnAssemblyShip",
              Desc: "整装发货的产品中，这个字段标识该板件是否整装发货。"
            },
            { Name: "UniqueNumber", Desc: "唯一码" },
            { Name: "UniqueNumberDecimal", Desc: "十进制唯一码" },
            { Name: "UpLoadDate", Desc: "上传日期" },
            { Name: "UpperEdge", Desc: "上封边" },
            { Name: "VariableSideLengthByMerge", Desc: "合并板件时的临时变量" },
            { Name: "Width", Desc: "Writehere..." },
            { Name: "WidthMargin", Desc: "加长的宽度值" },
            { Name: "WMProductsIndex", Desc: "WM产品索引" },
            { Name: "XOrigin", Desc: "X坐标" },
            { Name: "XRotation", Desc: "X旋转角度" },
            { Name: "YOrigin", Desc: "Y坐标" },
            { Name: "YRotation", Desc: "Y旋转角度" },
            { Name: "ZOrigin", Desc: "Z坐标" },
            { Name: "ZRotation", Desc: "Z旋转角度" }
          ]
        },
        {
          Key: "CombinedHardwares（五金信息）",
          show: false,
          Data: [
            { Name: "ActualXLength", Desc: "X真实长度" },
            { Name: "ActualYLength", Desc: "Y真实长度" },
            { Name: "ActualZLength", Desc: "Z真实长度" },
            { Name: "BasePoint", Desc: "基准点" },
            { Name: "CalcQty", Desc: "数量计算" },
            { Name: "Comments", Desc: "注解1" },
            { Name: "Comments2", Desc: "注解2" },
            { Name: "Comments3", Desc: "注解3" },
            { Name: "CustomizeProductionNodeIndex", Desc: "定制生产节点索引" },
            { Name: "CustomizeProductionNodeName", Desc: "定制生产节点名称" },
            { Name: "Depth", Desc: "深度" },
            { Name: "Description", Desc: "产品名称" },
            { Name: "HardwareCode", Desc: "五金编码" },
            { Name: "HardwareCounter", Desc: "五金计数" },
            { Name: "HardwareIndex", Desc: "五金索引" },
            { Name: "HardwareName", Desc: "五金名称" },
            { Name: "Height", Desc: "高度" },
            { Name: "Id", Desc: "编号" },
            { Name: "IsAssemblyShipProduct", Desc: "产品是否整装出货" },
            { Name: "IsPackaged", Desc: "是否打包完成" },
            { Name: "JobId", Desc: "订单编号" },
            { Name: "LinFtCost", Desc: "Writehere..." },
            { Name: "ManufacturingProcessCategoryId", Desc: "工艺分类编号" },
            { Name: "ManufacturingProcessCategoryName", Desc: "工艺分类名称" },
            { Name: "NoMoney", Desc: "不计价" },
            { Name: "OriginalUniqueNumber", Desc: "补单时候的原物料唯一码" },
            { Name: "PackageCategoryId", Desc: "包装分类编号" },
            { Name: "PackageCategoryTest", Desc: "包装分类是否免检" },
            { Name: "PackageCategoryIsMinor", Desc: "包装分类是否为次要" },
            { Name: "PackageCategoryName", Desc: "包装分类名称" },
            {
              Name: "PackageCategorySinglePointHandle",
              Desc: "包装分类是否限制为单点操作"
            },
            { Name: "PackageId", Desc: "包装编号" },
            { Name: "PackageKeyboardInput", Desc: "包装是否为键盘输入" },
            { Name: "PackageNum", Desc: "预包装数量" },
            { Name: "SubassemblyCounter", Desc: "组件计数" },
            { Name: "SubssemblyId", Desc: "组件编号" },
            {
              Name: "UnAssemblyShip",
              Desc: "整装发货的产品中，这个字段标识该板件是否整装发货。"
            },
            { Name: "UniqueNumber", Desc: "唯一码编号" },
            { Name: "UniqueNumberDecimal", Desc: "十进制唯一码" },
            { Name: "Unit", Desc: "单位" },
            { Name: "Width", Desc: "宽度" },
            { Name: "WmProductsIndex", Desc: "WM产品索引" },
            { Name: "XOrigin", Desc: "X坐标" },
            { Name: "Yorigin", Desc: "Y坐标" },
            { Name: "Zorigin", Desc: "Z坐标" },
            { Name: "PackageStatus", Desc: "五金包装类型1=散件，2=预包装" },
            { Name: "ParentSubassemblyCounter", Desc: "父级组件计数" },
            { Name: "PartType", Desc: "板件类型" },
            { Name: "ProductComments", Desc: "产品注解1" },
            { Name: "ProductComments2", Desc: "产品注解2" },
            { Name: "ProductComments3", Desc: "产品注解3" },
            { Name: "ProductId", Desc: "产品编号" },
            {
              Name: "ProductionStatus",
              Desc: "生产类型0=普通，2=预装件，3=不涉及包装"
            },
            { Name: "ProductsIndex", Desc: "产品索引" },
            { Name: "Qty", Desc: "数量" },
            { Name: "QuoteRule", Desc: "报价规则" },
            { Name: "QuoteRulePrice", Desc: "报价规则价格" },
            { Name: "SalePrice", Desc: "零售价" },
            { Name: "SameProductIndex", Desc: "同产品索引" },
            { Name: "SameSubassemblyTotalQty", Desc: "同组件总数量" },
            { Name: "SemiProductCounter", Desc: "半成品计数" },
            { Name: "SemiproductId", Desc: "半成品编号" },
            { Name: "SemiProductName", Desc: "半成品名称" },
            { Name: "Status", Desc: "节点状态" }
          ]
        },
        {
          Key: "Materials（材料信息）",
          show: false,
          Data: [
            { Name: "CanDelete", Desc: "是否能删除" },
            { Name: "Code", Desc: "编码" },
            { Name: "CostPrice", Desc: "成本价" },
            { Name: "DoorGrainFlagLimit", Desc: "门板纹理界限" },
            { Name: "ForByCustomerDiscount", Desc: "自输单折扣" },
            { Name: "GrainFlag", Desc: "纹理类型0=无纹理，1=竖纹，2=横纹" },
            { Name: "GrainFlagName", Desc: "纹理名称" },
            { Name: "Id", Desc: "编号" },
            { Name: "IsDisable", Desc: "是否被禁用" },
            { Name: "IsEnable", Desc: "是否启用" },
            { Name: "IsHardware", Desc: "是否为五金" },
            { Name: "Length", Desc: "长度" },
            { Name: "MachiningPrice", Desc: "加工价格" },
            { Name: "MaterialFlag", Desc: "材料标志" },
            {
              Name: "MaterialProductType",
              Desc: "产品类型0=通用，1=门板，2=柜体"
            },
            {
              Name: "MaterialType",
              Desc: "材料类型2=Sheet，3=Solid，4=BuyOut"
            },
            { Name: "MVPrice", Desc: "WM价格" },
            { Name: "Name", Desc: "名称" },
            { Name: "Price", Desc: "价格1" },
            { Name: "Price2", Desc: "价格2" },
            { Name: "Price3", Desc: "价格3" },
            { Name: "Price4", Desc: "价格4" },
            { Name: "Qty", Desc: "数量" },
            { Name: "SalePriceCabinet", Desc: "柜体竖纹/无纹理价格" },
            { Name: "SalePriceCabinet2", Desc: "柜体横纹价格" },
            { Name: "SalePriceDoor", Desc: "门板竖纹价格" },
            { Name: "SalePriceDoor2", Desc: "门板横纹价格" },
            { Name: "Thickness", Desc: "厚度" },
            { Name: "TimeStamp", Desc: "时间戳" },
            { Name: "TrimL1", Desc: "切长余量1" },
            { Name: "TrimL2", Desc: "切长余量2" },
            { Name: "TrimW1", Desc: "切宽余量1" },
            { Name: "TrimW2", Desc: "切宽余量2" },
            { Name: "UsableLength", Desc: "可用长度（不包含余量）" },
            { Name: "UsableWidth", Desc: "可用宽度（不包含余量）" },
            { Name: "Width", Desc: "宽度" }
          ]
        },
        {
          Key: "Combinededgebandings（封边信息）",
          show: false,
          Data: [
            { Name: "CombinedPartId", Desc: "板件编号" },
            {
              Name: "CurrentDealerCabinetPrice",
              Desc: "当前经销商柜体类型价格"
            },
            { Name: "CurrentDealerDoorPrice", Desc: "当前经销商门板类型价格" },
            { Name: "EBCode", Desc: "封边编码" },
            { Name: "EBLength", Desc: "封边长度" },
            { Name: "EBMaterial", Desc: "封边材料" },
            { Name: "Ebthickness", Desc: "封边厚度" },
            { Name: "EdgeNumber", Desc: "封边编号" },
            { Name: "Id", Desc: "编号" },
            { Name: "IsHandleType", Desc: "是否拉手" },
            { Name: "JobId", Desc: "订单编号" },
            { Name: "LinFtCost", Desc: "Writehere..." },
            { Name: "Price", Desc: "价格" },
            { Name: "PriceCabinte", Desc: "衣柜价格" },
            { Name: "ProductId", Desc: "产品编号" },
            { Name: "ProductsIndex", Desc: "产品索引" },
            { Name: "SameProductIndex", Desc: "同产品索引" },
            { Name: "SameProductCounter", Desc: "同产品计数" },
            { Name: "SqFtCost", Desc: "每平方价格" },
            { Name: "SubassemblyId", Desc: "组件编码" },
            { Name: "Unit", Desc: "单位" }
          ]
        },
        {
          Key: "QuoteItem（报价项）",
          show: false,
          Data: [
            { Name: "Deleted", Desc: "是否删除" },
            { Name: "EnableEdit", Desc: "是否启用编辑" },
            { Name: "Id", Desc: "编号" },
            { Name: "Index", Desc: "索引" },
            { Name: "IsAdditionalFee", Desc: "是否附加额外费用" },
            { Name: "JobId", Desc: "订单编号" },
            { Name: "Name", Desc: "报价项名称" },
            { Name: "NoPrint", Desc: "是否不打印" },
            { Name: "Price", Desc: "价格" },
            { Name: "PricingUnit", Desc: "计价单位" },
            { Name: "Qty", Desc: "数量" },
            { Name: "Remark", Desc: "备注" },
            { Name: "Standard", Desc: "规格信息" },
            { Name: "TotalPrice", Desc: "总价" }
          ]
        },
        {
          Key: "DoorProducts(门板产品，门板订单才有用)",
          show: false,
          Data: [
            { Name: "DoorOpenDirection", Desc: "开门方向" },
            { Name: "DoorOpenDirectionName", Desc: "开门方向名称" },
            { Name: "DoorSeriesName", Desc: "门板系列名称" },
            { Name: "EdgeMaterialName", Desc: "封边材料名称" },
            { Name: "EdgeMaterialPrice", Desc: "封边材料价格" },
            { Name: "EdgeMaterialThickness", Desc: "封边材料厚度" },
            { Name: "FinalUnitPrice", Desc: "最终单价" },
            { Name: "GrainDirection", Desc: "纹理方向" },
            { Name: "GrainDirectionName", Desc: "纹理方向名字" },
            { Name: "HandleTypeAppendSurcharge", Desc: "拉手附加费用" },
            { Name: "HandleTypeDirectionName", Desc: "拉手方向名称" },
            { Name: "HandleTypeInstallThickness", Desc: "拉手安装厚度" },
            { Name: "HandleTypeName", Desc: "拉手名称" },
            { Name: "HandleTypePrice", Desc: "拉手单价" },
            { Name: "HandleTypePricingLength", Desc: "拉手计价长度" },
            { Name: "HandleTypeSurcharge", Desc: "拉手附加费" },
            { Name: "Height", Desc: "高度" },
            { Name: "Id", Desc: "编号" },
            { Name: "IsExTernalHandletype", Desc: "是否为外置拉手" },
            { Name: "MaterialMachininePrice", Desc: "材料加工单价" },
            { Name: "MaterialName", Desc: "材料名称" },
            { Name: "MaterialSalePrice", Desc: "材料售价" },
            { Name: "MinPricingArea", Desc: "最小价格区域" },
            { Name: "OrderNumber", Desc: "订单号" },
            { Name: "OriginalUnitPrice", Desc: "初始单价" },
            { Name: "PeicingArea", Desc: "计价面积" },
            { Name: "PricingUnit", Desc: "计价单位" },
            { Name: "Qty", Desc: "数量" },
            { Name: "Remark", Desc: "备注" },
            { Name: "Surcharge", Desc: "附加费" },
            { Name: "TotalPrice", Desc: "总价" },
            { Name: "TotalPriceWithHandeleType", Desc: "总价（含拉手）" },
            { Name: "Width", Desc: "宽度" }
          ]
        },
        {
          Key: "UseMaterials（订单内用到的材料）",
          show: false,
          Data: [
            { Name: "Area", Desc: "面积" },
            { Name: "JobId", Desc: "订单编号" },
            { Name: "MaterialName", Desc: "材料名称" }
          ]
        },
        {
          Key: "SemiProducts（半成品）",
          show: false,
          Data: [
            { Name: "Barcode", Desc: "唯一码（WM）" },
            { Name: "BasePoint", Desc: "基准点" },
            { Name: "BrdFtCost", Desc: "Writehere..." },
            { Name: "Comments", Desc: "注解1" },
            { Name: "Comments2", Desc: "注解2" },
            { Name: "Comments3", Desc: "注解3" },
            { Name: "EachCost", Desc: "个销" },
            { Name: "EBLength1", Desc: "封边长1" },
            { Name: "EBLength2", Desc: "封边长2" },
            { Name: "EBWidth1", Desc: "封边宽1" },
            { Name: "EBWidth2", Desc: "封边宽2" },
            { Name: "Edge1BarCode", Desc: "封边1唯一码" },
            { Name: "Edge1FileName", Desc: "封边1文件名" },
            { Name: "Edge2BarCode", Desc: "封边2唯一码" },
            { Name: "Edge2FileName", Desc: "封边2文件名" },
            { Name: "Edge3BarCode", Desc: "封边3唯一码" },
            { Name: "Edge3FileName", Desc: "封边3文件名" },
            { Name: "Edge4BarCode", Desc: "封边4唯一码" },
            { Name: "Edge4FileName", Desc: "封边4文件名" },
            { Name: "Face6Barcode", Desc: "面6唯一码" },
            { Name: "Face6FileName", Desc: "面6文件名" },
            { Name: "Face6MachiningPicture", Desc: "面6机加工图" },
            { Name: "FileName", Desc: "文件名" },
            { Name: "FinishedLength", Desc: "完工长度" },
            { Name: "FinishedWidth", Desc: "完工宽度" },
            { Name: "GrainFlag", Desc: "纹理0=无纹理，1=竖纹，2=横纹" },
            { Name: "Id", Desc: "编号" },
            { Name: "JobIndex", Desc: "工作任务索引" },
            { Name: "LaborIndex", Desc: "工作标准" },
            { Name: "LaborTime", Desc: "工作时间" },
            { Name: "Length", Desc: "长度" },
            { Name: "LinFtCost", Desc: "Writehere..." },
            { Name: "MachinePoint", Desc: "机加工原点" },
            { Name: "MachiningPicture", Desc: "机加工图" },
            { Name: "Material", Desc: "材料" },
            { Name: "MaterialCode", Desc: "材料编码" },
            { Name: "MaterialCost", Desc: "材料费用" },
            { Name: "MaterialFlag", Desc: "材料标志" },
            { Name: "MaterialType", Desc: "材料类型" },
            { Name: "NewProductsIndex", Desc: "新产品索引" },
            { Name: "PriceNumber", Desc: "Writehere..." },
            { Name: "PriceUnit", Desc: "单间" },
            { Name: "ProductId", Desc: "产品编号" },
            { Name: "ProductsIndex", Desc: "产品索引" },
            { Name: "Qty", Desc: "数量" },
            { Name: "QuoteRule", Desc: "报价规则" },
            { Name: "RunField", Desc: "经营领域" },
            { Name: "SemiProductCounter", Desc: "半成品计数" },
            { Name: "SemiProductIndex", Desc: "半成品索引" },
            { Name: "SemiProductName", Desc: "半成品名称" },
            { Name: "SqFtCost", Desc: "每平方价格" },
            { Name: "SubassemblyCounter", Desc: "组件计数" },
            { Name: "SubassemblyIndex", Desc: "组件索引" },
            { Name: "Thickness", Desc: "厚度" },
            { Name: "UniqueNumber", Desc: "唯一码" },
            { Name: "UniqueNumberDecimal", Desc: "十进制唯一码" },
            { Name: "Width", Desc: "宽度" },
            { Name: "XOrigin", Desc: "X坐标" },
            { Name: "XRotation", Desc: "X选择角度" },
            { Name: "YOrigin", Desc: "Y坐标" },
            { Name: "YRotation", Desc: "Y旋转角度" },
            { Name: "ZOrigin", Desc: "Z坐标" },
            { Name: "ZRotation", Desc: "Z旋转角度" }
          ]
        },
        {
          Key: "ProductionBatches(生产批次)",
          show: false,
          Data: [
            { Name: "CreatTime", Desc: "创建时间" },
            { Name: "CreatUser", Desc: "创建人" },
            { Name: "CustomizeProductionNodeIndex", Desc: "自定义节点索引" },
            { Name: "CustomizeProductionNodeName", Desc: "自定义节点名称" },
            { Name: "Deleted", Desc: "是否已经删除" },
            { Name: "Downloaded", Desc: "是否已下载" },
            { Name: "HasOptimizeResult", Desc: "是否有优化结果" },
            {
              Name: "HasParallelProductionBath",
              Desc: "是否有其他并行的生产批次"
            },
            { Name: "Id", Desc: "编号" },
            { Name: "IsModify", Desc: "是否修改" },
            { Name: "IsSync", Desc: "是否同步" },
            { Name: "JobInfo", Desc: "工作任务信息" },
            { Name: "NewVersion", Desc: "新版本" },
            { Name: "OptimizedType", Desc: "优化类型0=线下优化，1=在线优化" },
            { Name: "OrderQty", Desc: "订单数量" },
            { Name: "OutPutFileName", Desc: "输出文件名称" },
            { Name: "PartArea", Desc: "板件面积" },
            { Name: "PartQty", Desc: "板件数量" },
            { Name: "ProductionBatchGroupId", Desc: "生产批次组ID" },
            { Name: "ProductionLineName", Desc: "产线名称" },
            { Name: "ProductNo", Desc: "生产批次唯一码" },
            { Name: "Released", Desc: "是否放行" },
            { Name: "ReleaseTime", Desc: "放行时间" },
            { Name: "ReleaseUser", Desc: "放行人" },
            { Name: "SaveFileFullName", Desc: "保存文件全称" },
            { Name: "Status", Desc: "节点状态" },
            { Name: "SubmitArdisOnlineOptTime", Desc: "提交Ardis在线优化时间" },
            { Name: "UnCutPartsQty", Desc: "未开料板件数量" },
            { Name: "UploadOptimizeDataTime", Desc: "上传优化时间" }
          ]
        },
        {
          Key: "Package（包装信息）",
          show: false,
          Data: [
            { Name: "Contractor", Desc: "收货人" },
            { Name: "DealerCompany", Desc: "经销商公司名称" },
            { Name: "DealerTag", Desc: "经销商标志" },
            { Name: "DueDate", Desc: "截止日期" },
            { Name: "EnableDismiss", Desc: "是否可以拆包" },
            { Name: "HardwareTotalNumber", Desc: "五金总数量" },
            {
              Name: "HardwareTotalNumberByCate",
              Desc: "五金总数量（按包装分类分）"
            },
            {
              Name: "HardwareTotalNumbersByOrderGroup",
              Desc: "按订单组五金总数量（启用）"
            },
            {
              Name: "HardwareTotalNumbersByOrderGroupByCate",
              Desc: "按订单组合包装分类的五金总数量（启用）"
            },
            {
              Name: "HardwareTotalNumbersByProduct",
              Desc: "按产品五金总数量（启用）"
            },
            {
              Name: "HardwareTotalNumbersByProductByCate",
              Desc: "按产品和包装分类五金总数量（启用）"
            },
            { Name: "IsSelected", Desc: "是否已被选中" },
            { Name: "JobAddress", Desc: "收货地址" },
            { Name: "JobId", Desc: "工作任务编号" },
            { Name: "JobName", Desc: "订单名称" },
            { Name: "JobNumber", Desc: "订单号" },
            { Name: "LastPackageTime", Desc: "最后一次打包时间" },
            { Name: "Misc1", Desc: "注解1" },
            { Name: "Misc2", Desc: "注解2" },
            { Name: "Misc3", Desc: "注解3" },
            { Name: "Misc4", Desc: "注解4" },
            { Name: "Misc5", Desc: "注解5" },
            { Name: "Misc6", Desc: "注解6" },
            { Name: "Misc7", Desc: "注解7" },
            { Name: "Misc8", Desc: "注解8" },
            { Name: "Misc9", Desc: "注解9" },
            { Name: "Misc10", Desc: "注解10" },
            { Name: "Operator", Desc: "打包人员" },
            { Name: "OrderGroupId", Desc: "订单组编号" },
            { Name: "OrderGroupIndex", Desc: "订单组索引" },
            { Name: "OrderGroupName", Desc: "订单组名称" },
            { Name: "OrderGroupNumber", Desc: "订单组号" },
            {
              Name: "PackageByOrderGroupNo(弃用)",
              Desc: "按订单组包装的包号（弃用）"
            },
            {
              Name: "PackageByOrderGroupNoByCate(弃用)",
              Desc: "按订单组和包装分类的包号（弃用）"
            },
            { Name: "PackageByProductNo(弃用)", Desc: "按产品的包号（弃用）" },
            {
              Name: "PackageByProductNoByCate(弃用)",
              Desc: "按产品和包装分类的包号（弃用）"
            },
            { Name: "PackageCategroyId", Desc: "包装分类编号" },
            { Name: "PackageCategroyName", Desc: "包装分类名称" },
            { Name: "PackageId", Desc: "包装编号" },
            { Name: "PackageNo", Desc: "包装号" },
            { Name: "PackageNoByCate(弃用)", Desc: "按包装分类的包号" },
            {
              Name: "PackagesByOrderGroupTotalNumbers(弃用)",
              Desc: "按订单组包装的总包数"
            },
            {
              Name: "PackagesByOrderGroupTotalNumbersByCate(弃用)",
              Desc: "按订单组和包装分类的总包数"
            },
            {
              Name: "PackagesByProductTotalNumbers(弃用)",
              Desc: "按产品包装的总包数"
            },
            {
              Name: "PackagesByProductTotalNumbersByCate(弃用)",
              Desc: "按产品和包装分类的总包数"
            },
            { Name: "PackagesTotalNumbers(弃用)", Desc: "按订单包装总包数" },
            {
              Name: "PackagesTotalNumbersByCate(弃用)",
              Desc: "按订单和包装分类的总包数"
            },
            { Name: "PackageTime", Desc: "包装时间" },
            { Name: "PartCount", Desc: "当前包板件数量" },
            { Name: "PartTotalNumbers(弃用)", Desc: "按订单板件总数量" },
            {
              Name: "PartTotalNumbersByCate(弃用)",
              Desc: "按订单和包装分类包装的板件总数量"
            },
            {
              Name: "PartTotalNumbersByOrderGroup(弃用)",
              Desc: "按订单组包装的板件总数量"
            },
            {
              Name: "PartTotalNumbersByOrderGroupByCate(弃用)",
              Desc: "按订单组和包装分类的板件总数"
            },
            {
              Name: "PartTotalNumbersByProduct(弃用)",
              Desc: "按产品包装的板件总数量"
            },
            {
              Name: "PartTotalNumbersByProductByCate(弃用)",
              Desc: "按产品和包装分类的板件总数"
            },
            { Name: "ProductComments", Desc: "产品注解1" },
            { Name: "ProductComments2", Desc: "产品注解2" },
            { Name: "ProductComments3", Desc: "产品注解3" },
            { Name: "ProductName", Desc: "产品名称" },
            { Name: "SameGroupOrdersQty", Desc: "同组订单数量" },
            { Name: "Shipment_ContractAdd", Desc: "收货人地址" },
            { Name: "Shipment_ContractPerson", Desc: "收货人姓名" },
            { Name: "Shipment_ContractTel", Desc: "收货人电话" },
            { Name: "Shipment_FreightStation", Desc: "货运站" },
            { Name: "ShowDismissBtn", Desc: "是否显示拆包按钮（报表不用）" },
            { Name: "UniqueNumber", Desc: "包号唯一码" },
            {
              Name: "CurrentPackageNo",
              Desc:
                "当前包号，根据当前打包设备的设置（按产品或者按订单，是否有限制包装分类）由系统自动计算"
            },
            {
              Name: "CurrentPartTotalCount",
              Desc:
                "当前板件总数，根据当前打包设备的设置（按产品或者按订单，是否有限制包装分类）由系统自动计算"
            },
            {
              Name: "CurrentHardwareTotalCount",
              Desc:
                "当前五金总数，根据当前打包设备的设置（按产品或者按订单，是否有限制包装分类）由系统自动计算"
            },
            {
              Name: "CurrentPackageTotalCount",
              Desc:
                "<FONTsize=3>当前总包数，只有包装完成才会大于0，根据当前打包设备的设置（按产品或者按订单，是否有限制包装分类）由系统自动计算"
            }
          ]
        },
        {
          Key: "PackageCategories（包装分类信息）",
          show: false,
          Data: [
            { Name: "CanDel", Desc: "是否能删除" },
            { Name: "DeliveryQty", Desc: "已出库数量" },
            { Name: "Id", Desc: "编号" },
            { Name: "IgnoreTest", Desc: "是否免检" },
            { Name: "InStockQty", Desc: "库存数量" },
            { Name: "IsMinor", Desc: "是否为次要" },
            { Name: "JobId", Desc: "工作任务编号" },
            { Name: "Name", Desc: "分类名称" },
            { Name: "PackageComplete", Desc: "是否包装完成" },
            { Name: "PackagePartsTotalCount", Desc: "包装板件总量" },
            { Name: "PackagesCount", Desc: "包装数量" },
            {
              Name: "PartsTotalCount",
              Desc: "订单内这个包装分类的板件总数量（报表不用）"
            },
            { Name: "PartsTotalCount", Desc: "包装板件总数量" },
            { Name: "SinglePointHandle", Desc: "是否限制单点操作" },
            {
              Name: "SystemDefault",
              Desc: "是否系统默认的包装分类（板件，五金）"
            }
          ]
        }
      ]
    };
  }
};
</script>