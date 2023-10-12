(() => {
  // src/js/form-validation.js
  var inputs = document.querySelectorAll("input, select, textarea");
  inputs = [...inputs].filter(function(value) {
    return value.type != "radio" && value.type != "checkbox";
  });
  inputs.forEach(function(input) {
    function checkValidity(options) {
      const insertError = options.insertError;
      if (!input.validity.valid && input.validationMessage) {
        if (insertError) {
          input.nextElementSibling.innerHTML = input.validationMessage;
          input.nextElementSibling.classList.add("with-errors");
          input.classList.add("error");
        }
      } else {
        if (input.nextElementSibling) {
          input.nextElementSibling.innerHTML = "";
          input.nextElementSibling.classList.remove("with-errors");
          input.classList.remove("error");
        }
      }
    }
    input.addEventListener("input", function() {
      checkValidity({ insertError: false });
    });
    input.addEventListener("invalid", function(e) {
      e.preventDefault();
      checkValidity({ insertError: true });
    });
  });
  var p = document.getElementsByName("phone");
  p[0].addEventListener("keyup", function() {
    var v = p[0].value;
    var output;
    v = v.replace(/[^0-9]/g, "");
    var area = v.substr(0, 3);
    var pre = v.substr(3, 3);
    var tel = v.substr(6, 4);
    if (area.length < 3) {
      output = area;
    } else if (area.length == 3 && pre.length < 3) {
      output = "" + area + "-" + pre;
    } else if (area.length == 3 && pre.length == 3) {
      output = "" + area + "-" + pre + "-" + tel;
    }
    p[0].value = output;
  });
})();
//# sourceMappingURL=form-validation.js.map
