import { App } from 'vue'
import router from '@/router'
import Np from './Np'

const registerPlugins = (app: App) => {
  app.use(router)
  app.use(Np)
}

export default registerPlugins
