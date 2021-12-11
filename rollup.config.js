import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import alias from '@rollup/plugin-alias';

import svelte from 'rollup-plugin-svelte';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import css from 'rollup-plugin-css-only';

import sveltePreprocess from 'svelte-preprocess';
import dotenv from 'dotenv';

const __app = {
  version: process.env.npm_package_version,
  env: {
    isProd: !process.env.ROLLUP_WATCH && process.env.APP_ENV === 'production',
    ...dotenv.config({ path: `env/${process.env.APP_ENV}.env` }).parsed,
  },
};

function serve() {
  let server;

  function toExit() {
    if (server) server.kill(0);
  }

  return {
    writeBundle() {
      if (server) return;
      server = require('child_process').spawn(
        'npm',
        ['run', 'start', '--', '--dev'],
        {
          stdio: ['ignore', 'inherit', 'inherit'],
          shell: true,
        }
      );

      process.on('SIGTERM', toExit);
      process.on('exit', toExit);
    },
  };
}

export default {
  input: 'src/main.ts',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: 'public/build/bundle.js',
  },
  plugins: [
    svelte({
      preprocess: sveltePreprocess({
        sourceMap: !__app.env.isProd,
        // Configure Postcss
        postcss: {
          plugins: [require('tailwindcss'), require('autoprefixer')],
        },
        // Allow usage of __app on code
        replace: [['__app', JSON.stringify(__app)]],
      }),
      compilerOptions: {
        // enable run-time checks when not in production
        dev: !__app.env.isProd,
      },
    }),
    // we'll extract any component CSS out into
    // a separate file - better for performance
    css({ output: 'bundle.css' }),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration -
    // consult the documentation for details:
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    resolve({
      browser: true,
      dedupe: ['svelte'],
    }),
    commonjs(),
    typescript({
      sourceMap: !__app.env.isProd,
      inlineSources: !__app.env.isProd,
    }),

    // Path aliases
    alias({
      entries: [
        { find: '@components', replacement: 'src/components' },
        { find: '@screens', replacement: 'src/screens' },
        { find: '@data', replacement: 'src/data' },
        { find: '@assets', replacement: 'src/assets' },
      ],
    }),

    // In dev mode, call `npm run start` once
    // the bundle has been generated
    !__app.env.isProd && serve(),

    // Watch the `public` directory and refresh the
    // browser on changes when not in __app.env.isProd
    !__app.env.isProd && livereload('public'),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    __app.env.isProd && terser(),
  ],
  watch: {
    clearScreen: false,
  },
};
