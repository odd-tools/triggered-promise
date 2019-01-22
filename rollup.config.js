import  typescript from 'rollup-plugin-typescript2'
import { uglify } from "rollup-plugin-uglify";
import pkg from './package.json'

export default {
  input: 'src/triggered-promise.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    }
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
plugins: [
    typescript({
      typescript: require('typescript'),
    }),
    (process.env.BUILD === 'production'? uglify() : {})
  ]
}