import esbuild from 'esbuild';
import { sassPlugin } from "esbuild-sass-plugin";
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import fs from 'fs/promises';
import path from 'path';

const directory = 'dist';

// Check if the directory exists
async function setupDirectory() {
  try {
    await fs.access(directory);
    // If the directory exists, remove it
    await fs.rm(directory, { recursive: true });
  } catch (error) {
    // The directory doesn't exist, so continue
  }

  // Create the directory
  await fs.mkdir(directory);

  // Copy the file
  const sourceFile = './src/index.html';
  const destinationFile = path.join(directory, 'index.html');
  await fs.copyFile(sourceFile, destinationFile);

  console.log('File copied:', sourceFile, '=>', destinationFile);
}

setupDirectory().catch((error) => {
  console.error('Error:', error);
});

esbuild.build({
  entryPoints: ['./src/Index.jsx'],
  bundle: true,
  jsxFactory: 'h',
  jsxFragment: 'Fragment',
  outfile: './dist/bundle.js',
  format: 'esm',
  plugins: [
    sassPlugin({
      async transform(source) {
        const { css } = await postcss([autoprefixer]).process(source);
        return css;
      },
    }),
  ],
}) .then(() => console.log("⚡ Build complete! ⚡"))
    .catch(() => process.exit(1));
