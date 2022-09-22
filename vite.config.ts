import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import electron from 'vite-plugin-electron'

import path from 'path'

const autoSrc = path.resolve(__dirname, 'auto-imports.d.ts')
const componentsSrc = path.resolve(__dirname, 'components.d.ts')

export default ({ mode }: { mode: string }) => {
  return defineConfig({
    plugins: [
      vue(),
      electron({
        main: {
          entry: './electron/main/index.ts',
          vite: {
            build: {
              // sourcemap: mode === 'development' ? true : false,
              outDir: 'dist/electron/main'
            }
          }
        },
        preload: {
          input: {
            index: path.join(__dirname, 'electron/preload/index.ts')
          },
          vite: {
            build: {
              // sourcemap: mode === 'development' ? true : false,
              outDir: 'dist/electron/preload'
            }
          }
        }
      }),
      AutoImport({
        // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
        imports: ['vue'],
        resolvers: [
          ElementPlusResolver(),
          IconsResolver({
            prefix: 'Icon'
          })
        ],
        dts: autoSrc
      }),
      Components({
        resolvers: [
          ElementPlusResolver(),
          IconsResolver({
            enabledCollections: ['ep']
          })
        ],
        dts: componentsSrc
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  })
}
