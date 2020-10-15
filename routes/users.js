const router = require('koa-router')()

// router.prefix('/api/users/')

router.post('/api/users/login', async function (ctx, next) {
  const { username, password } = ctx.request.body
  console.log(username, password)
  ctx.body = {
    message: '登录成功',
    code: 0
  }
  // if(username === 'admin') {
  //   ctx.body = '登录成功'
  // }
})


module.exports = router
