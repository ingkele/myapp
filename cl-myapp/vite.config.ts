import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue(),
  ],
  base: '/',
  resolve: {
    alias: {//设置别名
      '@': '/src',
      '@page': '/src/page',
      '@components': '/src/components',
      '@assets': '/src/assets',
      '@modules': 'node_modules',
      '@router': '/src/router',
    },
  },
  server: {
    host: '0.0.0.0',
    port: 1112,
    https: false,
    //以上的ip和端口是我们本机的;下面为需要跨域的
    proxy: {//配置跨域
      '/api': {
        target: 'http://*:1112',//后端地址
        ws: true,
        changeOrigin: true,//允许跨域
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  },
})
