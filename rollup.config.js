import commonjs   from '@rollup/plugin-commonjs'
import resolve    from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript';

export default {
  input: './src/svelte-agnostic-draggable.ts',
  external:['agnostic-draggable'],
  output: {
    file:     './dist/svelte-agnostic-draggable.esm.js',
    format:   'esm',
    sourcemap:true,
  },
  plugins: [
    resolve(), commonjs(), typescript(),
  ],
};
