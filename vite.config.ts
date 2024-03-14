import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
import tsconfigPaths from 'vite-tsconfig-paths';
import uno from 'unocss/vite';

import { redirectGen } from './plugins';

export default defineConfig({
  plugins: [solid(), redirectGen(), tsconfigPaths(), uno()],
});
