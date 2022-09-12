import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import electron from 'vite-plugin-electron'

import path from 'path'

export default ({ mode }: { mode: string }) => {
  return defineConfig({
    plugins: [
      vue(),
      electron({
        main: {
          entry: './electron/main/index.ts',
          vite: {
            build: {
              sourcemap: mode === 'development' ? true : false,
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
              sourcemap: mode === 'development' ? true : false,
              outDir: 'dist/electron/preload'
            }
          }
        }
      }),
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  })
}
