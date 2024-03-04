import { defineConfig } from 'vite'
import postcssLit from "rollup-plugin-postcss-lit"

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../pages'
  },
  plugins: [
    postcssLit()
  ]
})