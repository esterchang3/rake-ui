var interval;
    var content_url = "<%= @rake_task_log_content_url %>"
    var is_requesting = false

    function replaceContent(content) {
      document.getElementById('log_content').innerHTML = content
    }

    interval = setInterval(function () {
      if (is_requesting) { return }
      is_requesting = true;
      fetch(content_url)
        .then(function(r) { return r.json() })
        .then(function (r) {
          replaceContent(r.rake_task_log_content)

          if (r.is_rake_task_log_finished) {
            clearInterval(interval)
          }
          is_requesting = false
        })
        .catch(function(err) {
          is_requesting = false
          clearInterval(interval)
          throw(err)
        })
    }, 500);
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
function _hideTableElement(elm) {
  elm.style.display = "none";
}

function _showTableElement(elm) {
  elm.style.display = "";
}

function _filterTable(value) {
  var tableRows = document.querySelectorAll('[data-table-filterable]');

  for (var i = 0; i < tableRows.length; i++) {
      var row = tableRows[i];

      if (value == "") {
          _showTableElement(row)
      } else {
          if (row.dataset.tableFilterable.includes(value)) {
              _showTableElement(row)
          } else {
              _hideTableElement(row)
          }
      }
  }
}

var _tableFilterInput = document.querySelector('[data-table-filter]');

var _hasFilteredTableInput = false;
_tableFilterInput.addEventListener('input', function handleInput(input) {
  _hasFilteredTableInput = true;
  _filterTable(input.target.value)
})

_tableFilterInput.addEventListener('input', function handleInput(input) {
  _hasFilteredTableInput = true;
  _filterTable(input.target.value)
})

// Handling cases where the browser autofills on a back button navigation due to the bfc
window.addEventListener('pageshow', function() {
if (!_hasFilteredTableInput && _tableFilterInput) {
    _filterTable(_tableFilterInput.value)
}
});
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
;
