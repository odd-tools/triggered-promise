import  typescript from 'rollup-plugin-typescript2'
import {terser} from 'rollup-plugin-terser'
import pkg from './package.json'

export default {
  input: 'src/triggered-promise.ts',
  output: [
    {
      file: pkg.main,
      name: 'TriggeredPromise',
      format: 'esm',
      sourcemap: true,
    }
  ],
plugins: [
    typescript({
      typescript: require('typescript'),
    }),
  (process.env.BUILD === 'production' ? terser() : {})
  ]
}