import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import';
import visualizer from 'rollup-plugin-visualizer';
import { terser } from "rollup-plugin-terser";
import vueJsx from '@vitejs/plugin-vue-jsx'


import path from 'path';
// 打包插件
const plugins=[ 
  vue(),
  vueJsx({
    // options are passed on to @vue/babel-plugin-jsx
  }),
  styleImport({
    libs: [{
      libraryName: 'ant-design-vue',
      esModule: true,
      resolveStyle: (name) => {
        return `ant-design-vue/es/${name}/style/css`;
      },
    }]
  })]
 //生产环境配置打包分析插件
if(process.env.NODE_ENV){
  plugins.push(visualizer({
    open: true,
    gzipSize: true,
    brotliSize: true,
  }))
  // 开启智能压缩 删除console
  plugins.push(terser({ compress: { drop_console: true } }))

}
export default defineConfig({
  plugins,
  base:"./",//打包路径
  resolve: {
    alias:{
      '@': path.resolve(__dirname, './src')//设置别名
    }
  },
  server: {
    port:4000,//启动端口
    open: true,
    proxy: {
      // 选项写法
      '/api': 'http://123.56.85.24:5000'//代理网址
    },
    cors:true
  },
  build:{
    // target:"esnext",//
    brotliSize:false,
  }
})
