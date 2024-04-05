import fs from 'node:fs';
import path from 'node:path';
import { Plugin } from 'vite';

export const redirectGen = (): Plugin => {
  return {
    name: 'redirect-gen',
    apply: 'build',
    writeBundle: async () => {
      console.log('\nGenerating netlify redirect file...');

      const content = '/*    /index.html   200';
      const outputPath = path.resolve(process.cwd(), 'dist', '_redirects');
      fs.writeFileSync(outputPath, content, {});

      console.log('Generated file successfully!');
    },
  };
};