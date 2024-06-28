var _rakeForm = document.querySelector("[data-rake-form]");

var _skipValidationInput = document.querySelector("[data-rake-form-input-skip-validations]")
var _environmentInput = document.querySelector("[data-rake-form-input-environment]")
var _argsInput = document.querySelector("[data-rake-form-input-args]")
var _formError = document.querySelector("[data-rake-form-error]")

function _failWithError(event, message) {
  event.preventDefault()
  _formError.innerHTML = message;
}

_rakeForm.addEventListener("submit", function handleFormSubmit(event) {
  if (_skipValidationInput.checked) {
    return;
  }

  var argValue = _argsInput.value;
  if (argValue.includes(" ") || argValue.includes("[") || argValue.includes("]")) {
    _failWithError(event, "Do not include spaces or brackets in your rake arguments, disable validation if needed")
  }
});
