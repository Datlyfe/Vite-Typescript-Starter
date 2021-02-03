import path from 'path'
import { UserConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons'
import ViteComponents from 'vite-plugin-components'

const config: UserConfig = {
  alias: {
    '@': `${path.resolve(__dirname, 'src')}/`,
  },
  plugins: [
    Vue({
      include: [/\.vue$/],
    }),

    ViteComponents({
      extensions: ['vue'],

      customComponentResolvers: [
        ViteIconsResolver({
          componentPrefix: '',
        }),
      ],
    }),

    ViteIcons(),
  ],
}

export default config
