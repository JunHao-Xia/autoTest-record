import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
console.log(111111111111111)
console.log(path.resolve(__dirname, './src/renderer/assets/styles/variables.scss'));
// https://vitejs.dev/config
export default defineConfig({
    plugins:[vue()],
    resolve:{
        alias:{
            '@':path.resolve(__dirname,'./src/renderer')
        }
    },
    css:{
        preprocessorOptions:{
            scss:{
                additionalData:``
            }
        }
    }
});
