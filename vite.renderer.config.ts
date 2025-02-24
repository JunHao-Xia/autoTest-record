import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver  from 'unplugin-icons/resolver'
import {createStyleImportPlugin,ElementPlusResolve} from 'vite-plugin-style-import'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config
export default defineConfig({
    plugins:[
        vue(),
        createStyleImportPlugin({
            resolves: [ElementPlusResolve()],
            libs: [
              { libraryName: 'element-plus', esModule: true, resolveStyle: name => {
                return `element-plus/theme-chalk/${name}.css`;
              }, },
            ]

          }),
        AutoImport({
            resolvers: [
              ElementPlusResolver(),
              IconsResolver({
                prefix: 'Icon', // 图标组件前缀
              }),
            ],
          }),
          Components({
            resolvers: [
              ElementPlusResolver(),
              IconsResolver({
                enabledCollections: ['ep'], // 启用 Element Plus 图标库
              }),
            ],
          }),
          Icons({
            autoInstall: true, // 自动安装图标库
          }),
    ],
    resolve:{
        alias:{
            '@':path.resolve(__dirname,'./src/renderer')
        }
    },
    css:{
        preprocessorOptions:{
            scss:{
                additionalData:``,
                api: 'modern-compiler'
            }
        }
    }
});
