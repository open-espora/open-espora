import { defineConfig } from 'vite'
import tsconfigPaths from "vite-tsconfig-paths"
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  build: {
    outDir: "build"
  },
  plugins: [reactRefresh(), tsconfigPaths()]
})
