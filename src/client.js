var merge = require('merge-recursive')
var readystate = require('readystate')
var util = require('util')

var defaultOptions = require('./options')
var Constants = require('./constants')
var Events = require('./events')
var CollectLogger = require('./util/collectLogger')
var EventEmitter = require('./util/eventEmitter')
var Container = require('./wrappers/container')
var OptionsWrapper = require('./wrappers/optionsWrapper')
var Replay = require('./wrappers/visuals/replay')
var Browser = require('./util/browser')
var Resource = require('./resource')

var collectLogger, browser

function adjustOptions (options) {
  var localOptions = merge.recursive(defaultOptions, options || {})

  collectLogger = collectLogger || new CollectLogger(localOptions)

  localOptions.logger = collectLogger
  localOptions.debug = localOptions.logger.debug

  OptionsWrapper.addFunctions(localOptions)

  return localOptions
}

function getBrowser (localOptions) {
  if (!browser) {
    browser = new Browser(localOptions)
  }

  return browser
}

var VideomailClient = function (options) {
  var localOptions = adjustOptions(options)
  var container = new Container(localOptions)

  var replay

  EventEmitter.call(this, localOptions, 'VideomailClient')

  // expose all possible events
  this.events = Events

  function build () {
    var building = false

    readystate.interactive(function () {
      // it can happen that it gets called twice, i.E. when an error is thrown
      // in the middle of the build() fn
      if (!building && !container.isBuilt()) {
        building = true
        container.build()
        building = false
      }
    })
  }

  this.show = function () {
    if (container.isBuilt()) {
      container.show()
    } else {
      this.once(Events.BUILT, container.show)
    }
  }

    // automatically adds a <video> element inside the given parentElement and loads
    // it with the videomail
  this.replay = function (videomail, parentElement) {
    function buildReplay () {
      if (typeof parentElement === 'string') {
        parentElement = document.getElementById(parentElement)
      }

      // if there is none, use the automatically generated one
      if (!parentElement) {
        replay = container.getReplay()
        parentElement = replay.getParentElement()
      } else {
        replay = new Replay(parentElement, localOptions)
        replay.build()
      }

      videomail = container.addPlayerDimensions(videomail, parentElement)

      if (videomail) {
        // slight delay needed to avoid HTTP 416 errors (request range unavailable)
        setTimeout(function () {
          replay.setVideomail(videomail)

          if (container.isOutsideElementOf(parentElement)) {
            // replay element must be outside of the container
            container.hideForm()
          } else {
            container.loadForm(videomail)
          }

          container.showReplayOnly()
        }, 150)
      }
    }

    readystate.interactive(buildReplay)
  }

  this.startOver = function () {
    replay && replay.hide()
    container.startOver()
  }

  this.unload = function (e) {
    readystate.removeAllListeners()
    container.unload(e)
  }

  this.hide = function () {
    container.hide()
  }

  this.get = function (key, cb) {
    new Resource(localOptions).get(key, function (err, videomail) {
      if (err) {
        cb(err)
      } else {
        cb(null, container.addPlayerDimensions(videomail))
      }
    })
  }

  this.canRecord = function () {
    return getBrowser(localOptions).canRecord()
  }

  // return true when a video has been recorded but is not sent yet
  this.isDirty = function () {
    return container.isDirty()
  }

  this.submit = function () {
    container.submit()
  }

  build()
}

util.inherits(VideomailClient, EventEmitter)

Object.keys(Constants.public).forEach(function (name) {
  VideomailClient[name] = Constants.public[name]
})

// just another convenient thing
VideomailClient.events = Events

module.exports = VideomailClient
