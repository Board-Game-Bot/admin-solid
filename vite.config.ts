import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import { redirectGen } from "./plugins";

export default defineConfig({
  plugins: [solid(), redirectGen()],
})
