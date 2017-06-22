import buble from 'rollup-plugin-buble'
import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import stylusCssModules from 'rollup-plugin-stylus-css-modules'
import builtins from 'rollup-plugin-node-builtins'
import filesize from 'rollup-plugin-filesize'
import progress from 'rollup-plugin-progress'
import globals from 'rollup-plugin-node-globals'
import readPkg from 'read-pkg'
import camelcase from 'camelcase'

const packageInfo = readPkg.sync()
const moduleName = packageInfo.name

export default {
  entry: packageInfo.main,
  format: 'iife',
  plugins: [
    replace({'process.env.NODE_ENV': JSON.stringify('development')}),
    progress(),
    stylusCssModules({output: false}),
    json({preferConst: true}),
    buble(),
    builtins(),
    resolve({
      jsnext: true,
      browser: true,
      preferBuiltins: true
    }),
    commonjs({
      include: 'node_modules/**',
      ignoreGlobal: true
    }),
    globals(),
    filesize({showGzippedSize: false})
  ],
  moduleName: camelcase(moduleName),
  dest: `dist/${moduleName}.js`,
  sourceMap: 'inline'
}
