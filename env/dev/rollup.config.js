import buble from 'rollup-plugin-buble'
import json from 'rollup-plugin-json'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import stylusCssModules from 'rollup-plugin-stylus-css-modules'
import builtins from 'rollup-plugin-node-builtins'
import filesize from 'rollup-plugin-filesize'
import progress from 'rollup-plugin-progress'
import globals from 'rollup-plugin-node-globals'
import regenerator from 'rollup-plugin-regenerator'
import alias from 'rollup-plugin-alias'
import readPkg from 'read-pkg'
import uppercamelcase from 'uppercamelcase'

const packageInfo = readPkg.sync()
const moduleName = packageInfo.name

export default {
  entry: 'src/index.js',
  moduleName: uppercamelcase(moduleName),
  sourceMap: 'inline',
  // fixes https://github.com/rollup/rollup/wiki/Troubleshooting#this-is-undefined
  // in short: defines new global var for using when
  // outermost `this` is meant for window in the browser
  context: process, // not sure if that's the right one??
  plugins: [
    progress(),
    replace({'process.env.NODE_ENV': JSON.stringify('development')}),
    json({preferConst: true}),
    stylusCssModules({output: false}),
    alias({
      'readable-stream': 'stream'
    }),
    regenerator(),
    buble(),
    globals(),
    builtins(),
    nodeResolve({jsnext: true, browser: true}),
    commonjs({
      namedExports: {
        'node_modules/global/document.js': [ 'document' ]
      }
    }),
    filesize({showGzippedSize: false})
  ],
  targets: [{
    dest: packageInfo.main,
    format: 'iife'
  }]
}
