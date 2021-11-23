import { App } from 'vue'
import router from '@/router'
import store from '@/store'
import Np from './Np'

const registerPlugins = (app: App) => {
  app.use(router)
  app.use(store)
  app.use(Np)
}

export default registerPlugins
