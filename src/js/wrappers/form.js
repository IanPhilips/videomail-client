import EventEmitter from './../util/eventEmitter'
import Events from './../events'
import VideomailError from './../util/videomailError'
import getFormData from 'get-form-data'
import h from 'hyperscript'
import hidden from 'hidden'
import util from 'util'

const Form = function (container, formElement, options) {
  EventEmitter.call(this, options, 'Form')

  const self = this

  let disableContainerValidation
  let keyInput

  function getData() {
    return getFormData(formElement, { includeDisabled: true })
  }

  this.loadVideomail = function (videomail) {
    const limit = formElement.elements.length

    let input
    let name

    for (let i = 0; i < limit; i++) {
      input = formElement.elements[i]
      name = input.name

      if (videomail[name]) {
        input.value = videomail[name]
      }

      if (
        name === options.selectors.subjectInputName ||
        name === options.selectors.bodyInputName
      ) {
        input.disabled = true
      }
    }

    formElement.setAttribute('method', 'put')
  }

  function isNotButton(element) {
    return element.tagName !== 'BUTTON' && element.type !== 'submit'
  }

  function setDisabled(disabled, buttonsToo) {
    const limit = formElement.elements.length

    for (let i = 0; i < limit; i++) {
      if (buttonsToo || (!buttonsToo && isNotButton(formElement.elements[i]))) {
        formElement.elements[i].disabled = disabled
      }
    }
  }

  function hideAll() {
    const limit = formElement.elements.length

    for (let i = 0; i < limit; i++) {
      hidden(formElement.elements[i], true)
    }

    hidden(formElement, true)
  }

  function getInputElements() {
    return formElement.querySelectorAll('input, textarea')
  }

  function getSelectElements() {
    return formElement.querySelectorAll('select')
  }

  this.disable = function (buttonsToo) {
    setDisabled(true, buttonsToo)
  }

  this.enable = function (buttonsToo) {
    setDisabled(false, buttonsToo)
  }

  this.build = function () {
    if (options.enableAutoValidation) {
      const inputElements = getInputElements()
      let inputElement

      for (let i = 0, len = inputElements.length; i < len; i++) {
        inputElement = inputElements[i]

        if (inputElement.type === 'radio') {
          inputElement.addEventListener('change', function () {
            container.validate()
          })
        } else {
          inputElement.addEventListener('input', function () {
            container.validate()
          })
        }

        // because of angular's digest cycle, validate again when it became invalid
        inputElement.addEventListener('invalid', function () {
          if (!disableContainerValidation) {
            container.validate()
          }
        })
      }

      const selectElements = getSelectElements()

      for (let j = 0, len2 = selectElements.length; j < len2; j++) {
        selectElements[j].addEventListener('change', function () {
          container.validate()
        })
      }
    }

    keyInput = formElement.querySelector(
      'input[name="' + options.selectors.keyInputName + '"]'
    )

    if (!keyInput) {
      keyInput = h('input', {
        name: options.selectors.keyInputName,
        type: 'hidden'
      })

      formElement.appendChild(keyInput)
    }

    this.on(Events.PREVIEW, function (videomailKey) {
      // beware that preview doesn't always come with a key, i.E.
      // container.show() can emit PREVIEW without a key when a replay already exists
      // (can happen when showing - hiding - showing videomail over again)

      // only emit error if key is missing AND the input has no key (value) yet
      if (!videomailKey && !keyInput.value) {
        self.emit(
          Events.ERROR,
          VideomailError.create('Videomail key for preview is missing!', options)
        )
      } else if (videomailKey) {
        keyInput.value = videomailKey
      }
      // else
      // leave as it and use existing keyInput.value
    })

    // fixes https://github.com/binarykitchen/videomail-client/issues/91
    this.on(Events.GOING_BACK, () => {
      keyInput.value = null
    })

    this.on(Events.ERROR, function (err) {
      // since https://github.com/binarykitchen/videomail-client/issues/60
      // we hide areas to make it easier for the user to process an error
      // (= less distractions)
      if (err.hideForm && err.hideForm() && options.adjustFormOnBrowserError) {
        hideAll()
      } else if (
        err.hideButtons &&
        err.hideButtons() &&
        options.adjustFormOnBrowserError
      ) {
        hideSubmitButton()
      }
    })

    this.on(Events.BUILT, function () {
      startListeningToSubmitEvents()
    })
  }

  function hideSubmitButton() {
    const submitButton = self.findSubmitButton()
    hidden(submitButton, true)
  }

  function startListeningToSubmitEvents() {
    const submitButton = container.getSubmitButton()
    submitButton.addEventListener('click', self.doTheSubmit.bind(self))
  }

  this.doTheSubmit = (e) => {
    if (e) {
      e.preventDefault()
    }

    // only submit when there is a container,
    // otherwise do nothing and leave as it
    if (container.hasElement()) {
      container.submitAll(
        getData(),
        formElement.getAttribute('method'),
        formElement.getAttribute('action')
      )
    }

    return false // important to stop submission
  }

  this.getInvalidElement = () => {
    const inputElements = getInputElements()
    let i = 0

    for (const len = inputElements.length; i < len; i++) {
      if (!inputElements[i].validity.valid) {
        return inputElements[i]
      }
    }

    const selectElements = getSelectElements()
    let j = 0

    for (const len2 = selectElements.length; j < len2; j++) {
      if (!selectElements[j].validity.valid) {
        return selectElements[j]
      }
    }

    return null
  }

  this.validate = function () {
    // prevents endless validation loop
    disableContainerValidation = true

    const formIsValid = formElement.checkValidity()

    disableContainerValidation = false

    return formIsValid
  }

  this.findSubmitButton = function () {
    return formElement.querySelector("[type='submit']")
  }

  this.hide = function () {
    formElement && hidden(formElement, true)
  }

  this.show = function () {
    formElement && hidden(formElement, false)
  }
}

util.inherits(Form, EventEmitter)

export default Form
