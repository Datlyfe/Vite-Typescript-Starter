import NProgress from 'nprogress'
import { App } from 'vue'
import { Router } from 'vue-router'

export default (app: App) => {
  const router = app.config.globalProperties.$router as Router
  if (router) {
    router.beforeEach(() => {
      NProgress.start()
    })
    router.afterEach(() => {
      NProgress.done()
    })
  }
}
