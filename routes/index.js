const router = require('koa-router')()

router.get('/api/engineering/createBom/getParentData', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

module.exports = router
