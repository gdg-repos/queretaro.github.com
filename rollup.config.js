/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import summary from 'rollup-plugin-summary';
import {terser} from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import autoprefixer from 'autoprefixer';
import { rollupPluginHTML as html } from '@web/rollup-plugin-html';
import postcss from 'rollup-plugin-postcss';
import nested from 'postcss-nested';
import postcssLit from 'rollup-plugin-postcss-lit';

export default {
  input: './src/index.html',
  // input: './src/my-element.ts',
  output: {
    dir: 'pages',
    format: 'es',
    sourcemap: true,
  },
  onwarn(warning) {
    if (warning.code !== 'THIS_IS_UNDEFINED') {
      console.error(`(!) ${warning.message}`);
    }
  },
  plugins: [
    html(),
    postcss({ 
      autoModules: true,
      inject: false,
      extract: true,
      plugins: [autoprefixer(), nested()],
      use: ['sass']
    }),
    postcssLit({
      importPackage: 'lit-element',
      use: ['sass']
    }),
    // babel({ babelHelpers: 'bundled' }),
    typescript({ outDir: './pages'}),
    replace({'Reflect.decorate': 'undefined', preventAssignment: true}),
    resolve({
      browser: true,
      extensions: ['.js', '.ts', '.css', '.scss']
    }),
    /**
     * This minification setup serves the static site generation.
     * For bundling and minification, check the README.md file.
     */
    terser({
      ecma: 2021,
      module: true,
      warnings: true,
      mangle: {
        properties: {
          regex: /^__/,
        },
      },
    }),
    summary(),
  ],
};
