import * as esbuild from 'esbuild';
import { rimraf } from 'rimraf';
import stylePlugin from 'esbuild-style-plugin';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

const args = process.argv.slice(2);
const isProd = args[0] === '--production';

await rimraf('dist');

/**
 * @type {esbuild.BuildOptions}
 */
const esbuildOpts = {
  color: true,
  entryPoints: ['src/main.tsx', 'index.html'],
  outdir: 'dist',
  entryNames: '[name]',
  write: true,
  bundle: true,
  format: 'iife',
  sourcemap: isProd ? false : 'linked',
  minify: isProd,
  treeShaking: true,
  jsx: 'automatic',
  loader: {
    '.html': 'copy',
    '.png': 'file',
  },
  plugins: [
    stylePlugin({
      postcss: {
        plugins: [tailwindcss, autoprefixer],
      },
    }),
  ],
};

if (isProd) {
  await esbuild.build(esbuildOpts);
} else {
  const ctx = await esbuild.context(esbuildOpts);
  await ctx.watch();

  // ✅ Use Render-compatible PORT and 0.0.0.0 host
  const PORT = process.env.PORT || 8000;
  const HOST = '0.0.0.0';

  const { port } = await ctx.serve({
    servedir: 'dist',
    port: Number(PORT),
    host: HOST,
  });

  console.log(`Server is running at: http://${HOST}:${port}`);
}
