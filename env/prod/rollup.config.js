import replace from 'rollup-plugin-replace'
import closure from 'rollup-plugin-closure-compiler-js'

import config from './../dev/rollup.config'

config.dest = `dist/${config.moduleName}.min.js`
config.plugins[0] = replace({'process.env.NODE_ENV': JSON.stringify('production')})
config.plugins.push(closure())
config.sourceMap = 'external'

export default config
