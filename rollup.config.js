// see https://remarkablemark.org/blog/2019/07/12/rollup-commonjs-umd/

import commonjs   from '@rollup/plugin-commonjs'
import resolve    from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser'

export default {
  input: './svelte-agnostic-draggable.ts',
  output: {
    file:     './svelte-agnostic-draggable.esm.js',
    format:   'esm',
    sourcemap:true
  },
  plugins: [
    commonjs(), resolve(), typescript(),
    terser()
  ],
};
