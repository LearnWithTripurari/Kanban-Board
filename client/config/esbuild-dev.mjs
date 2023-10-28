import esbuild from "esbuild";
import {sassPlugin} from "esbuild-sass-plugin";
import postcss from "postcss";
import autoprefixer from "autoprefixer";
import setupDirectory from "./copy-index-dot-html.mjs";


setupDirectory().catch((error) => {
    console.error('Error:', error);
});

const ctx = await esbuild.context({
    entryPoints: ['./src/Index.jsx'],
    bundle: true,
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    outfile: './dist/bundle.js',
    format: 'esm',
    allowOverwrite: true,
    plugins: [
        sassPlugin({
            async transform(source) {
                const { css } = await postcss([autoprefixer]).process(source);
                return css;
            },
        }),
    ],
});

// await ctx.watch()
// console.log("Watching...")

await ctx.serve({
    servedir: 'dist',
    port: 9000,
});
console.log("Server is running on http://localhost:9000/");