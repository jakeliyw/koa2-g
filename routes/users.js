const router = require('koa-router')()

router.prefix('/api/users/')

router.post('/login', async function (ctx, next) {
  const { username, password } = ctx.request.body
  if(username === 'admin') {
    ctx.body = '登录成功'
  }
})


module.exports = router
