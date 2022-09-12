/// <reference types="vite/client" />

interface ImportMetaEnv {
  // 环境变量
  readonly VITE_NODE_ENV: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
