import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// `vite build --mode lib` builds the library; default mode builds the demo app.
export default defineConfig(({ mode }) => ({
  plugins: [vue()],
  publicDir: mode === 'lib' ? false : 'public',
  build:
    mode === 'lib'
      ? {
          lib: { entry: 'src/lib.ts', formats: ['es'], fileName: 'vue-form-gen' },
          rollupOptions: { external: ['vue'] },
        }
      : {},
}))
