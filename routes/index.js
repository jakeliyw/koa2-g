const router = require('koa-router')()

router.get('/api/engineering/createBom/getMateriel', async (ctx, next) => {
  ctx.body = {
    data: [{
        id: 1,
        classification: '类型',
        subMaterialNo: '子物料编码',
        describe: '描述',
        number: 0, // 数量
        // 仓库
        warehouse: [{
          value: '选项1',
          label: '物料仓'
        }, {
          value: '选项2',
          label: '成品仓'
        }, {
          value: '选项3',
          label: '半成品仓'
        }, {
          value: '选项4',
          label: '废弃仓'
        }, {
          value: '选项5',
          label: '靠垫仓'
        }],
        methods: '方法',
        priceList: ['成本价','采购单价','废料仓库'],
        unitPrice: 12,
        summation: 0
  }
    ],
    message: '数据获取成功',
    code: 0
  }
})

router.get('/api/engineering/createBom/getCodeValue', async (ctx, next) => {
    ctx.body = {
    data: [{
      value: '选项1',
      label: '创建组织 编码'
    }, {
      value: '选项2',
      label: '创建组织'
    }, {
      value: '选项3',
      label: '使用组织'
    }, {
      value: '选项4',
      label: '使用组织编码'
    }, {
      value: '选项5',
      label: '物料来源'
    }],
    message: '获取数据成功',
    code: 0
    }
})

router.get('/api/engineering/createBom/getContain', async (ctx,next) => {
    ctx.body = {
        data: [{
            value: '选项1',
            label: '等于'
        }, {
            value: '选项2',
            label: '不等于'
        }, {
            value: '选项3',
            label: '大于等于'
        }, {
            value: '选项4',
            label: '小于'
        }, {
            value: '选项5',
            label: '不为空'
        }],
        message: '获取数据成功',
        code: 0
    }
})

module.exports = router
