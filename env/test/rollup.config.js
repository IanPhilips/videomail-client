import config from './../dev/rollup.config'

// using continuous mode, recommended here
// https://github.com/lorenzofox3/zora-recipes#continuous-integration-mode

config.entry = './test/index.js'
config.moduleName = 'videomail-client-test'

// removes the progress plugin which does not work when piped, see
// https://github.com/jkuri/rollup-plugin-progress/issues/8
delete config.plugins[1]

// no need for a destination when all is piped
delete config.dest

export default config
