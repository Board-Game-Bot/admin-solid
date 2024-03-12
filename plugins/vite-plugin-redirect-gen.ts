import { Plugin } from 'vite';
import fs from 'node:fs';
import path from 'node:path';

export const redirectGen = (): Plugin => {
  return {
    name: 'redirect-gen',
    apply: 'build',
    writeBundle: async () => {
      console.log('\nGenerating netlify redirect file...');

      const content = `/*    /index.html   200`;
      const outputPath = path.resolve(process.cwd(), 'dist', '_redirect');
      fs.writeFileSync(outputPath, content, {});

      console.log('Generated file successfully!');
    }
  };
}