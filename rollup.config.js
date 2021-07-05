// see https://remarkablemark.org/blog/2019/07/12/rollup-commonjs-umd/

import commonjs   from '@rollup/plugin-commonjs'
import resolve    from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript';

export default {
  input: './src/svelte-agnostic-draggable.ts',
  external:['agnostic-draggable','agnostic-draggable-bug-fixed'],
  output: {
    file:     './dist/svelte-agnostic-draggable.esm.js',
    format:   'esm',
    sourcemap:true,
  },
  plugins: [
    resolve(), commonjs(), typescript(),
  ],
};
