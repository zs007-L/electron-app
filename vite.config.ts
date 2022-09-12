import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import electron from 'vite-plugin-electron'

import path from 'path'

export default ({ mode }: { mode: string }) => {
  console.log('mode', mode)
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
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  })
}
