import uni from '@dcloudio/vite-plugin-uni'
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    uni(),
    AutoImport({
      imports: [
        'vue',
        'uni-app',
        'pinia',
      ],
      dts: 'src/types/auto-imports.d.ts',
    }),
  ],
})