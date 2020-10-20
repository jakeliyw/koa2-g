const router = require('koa-router')()

router.get('/api/engineering/createBom/getOrganization', async (ctx, next) => {
    ctx.body = {
        data: [{
            establish: '杰希集团',
            use: '杰希集团',
            edition: '',
            abbreviation: ''
        }],
        message: '数据获取成功',
        code: 0
    }
})
router.get('/api/engineering/createBom/getDialogCode', async (ctx, next) => {
    ctx.body = {
        data: [
            {
                label: '创建组织编码',
                value: 'CreateOrganizationCode'
            },
            {
                label: '创建组织',
                value: 'CreateOrganization'
            },
            {
                label: '使用组织',
                value: 'useOrganization'
            },
            {

                label: '使用组织编码',
                value: 'useOrganizationCode'
            }],
        message: '数据获取成功',
        code: 0
    }
})

router.get('/api/engineering/createBom/getDialogContain', async (ctx, next) => {
    ctx.body = {
        data: [
            {
                label: '包含',
                value: 'contain'
            },
            {
                label: '不等于',
                value: 'notEqualTo'
            },
            {
                label: '大于',
                value: 'greaterThan'
            },
            {

                label: '大于等于',
                value: 'greaterThanOr'
            }],
        message: '数据获取成功',
        code: 0
    }
})

router.get('/api/engineering/createBom/getDialogTable', async (ctx, next) => {
    ctx.body = {
        data: [
            {
                parentID: 1,
                parentItemNo: '五金',
                materialCode: '1-1-001',
                materialDescription: '成品物料测试200*100*76CM',
                materialSpecification: 'PU',
                materialRemarks: '',
                type: '类型',
                consumption: '变动',
                company: 'Pcs',
                materialPicture: '物料模型图片',
                state: '未通过',
                takeEffectDate: '2020-10-20'
            },
            {
                parentID: 2,
                parentItemNo: '成品(测试物料)',
                materialCode: '物料编码',
                materialDescription: '成品物料测试200*100*76CM',
                materialSpecification: '200*100*76CM',
                materialRemarks: '物料备注',
                type: '类型',
                consumption: '用量',
                company: '单位',
                materialPicture: '物料模型图片',
                state: '状态',
                takeEffectDate: '2020-10-20'
            },
            {
                parentID: 3,
                parentItemNo: '父项物料编号',
                materialCode: '物料编码',
                materialDescription: '物料描述',
                materialSpecification: '物料规格',
                materialRemarks: '物料备注',
                type: '类型',
                consumption: '用量',
                company: '单位',
                materialPicture: '物料模型图片',
                state: '状态',
                takeEffectDate: '2020-10-20'
            },
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

router.get('/api/engineering/createBom/getContain', async (ctx, next) => {
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

router.post('/api/engineering/createBom/contentTable', async (ctx,next) => {
    const { parentID } = ctx.request.body
    console.log(parentID)
})

module.exports = router
