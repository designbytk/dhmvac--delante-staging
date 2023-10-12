(() => {
  // src/js/newsletter.js
  var page = document.body.id;
  var form = document.getElementById("ims-form-module-form");
  var url = "https://73lxm5v417.execute-api.us-east-1.amazonaws.com/dev/email/send";
  var feedback = document.querySelector(".message");
  var submit = document.querySelector(".action-button");
  var input = document.querySelector('input[name="email"');
  console.log(input);
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
  function post(url2, body, callback) {
    var req = new XMLHttpRequest();
    req.open("POST", url2, true);
    req.setRequestHeader("Content-Type", "application/json");
    req.addEventListener("load", function() {
      if (req.status < 400) {
        callback(null, JSON.parse(req.responseText));
      } else {
        callback(new Error("Request failed: " + req.statusText));
      }
    });
    req.send(JSON.stringify(body));
  }
  function success() {
    feedback.innerHTML = "Thank you for signing up for our newsletter!";
    feedback.style.cssText = "font-size: 2em;padding: 2em; background-color: aliceblue; border-radius: 10px;margin-bottom: 1em;line-height: 1.4em;";
    feedback.scrollIntoView();
    submit.disabled = true;
    submit.innerHTML = "Message Sent";
    input.value = "";
  }
  function error(err) {
    feedback.innerHTML = "There was an error with sending your message. Please try again or contact us directly by calling 860-589-8367";
    feedback.style.cssText = "font-size: 2em;padding: 2em; background-color: #ffcccb;border-radius: 10px;margin-bottom: 1em;line-height: 1.4em;";
    feedback.scrollIntoView();
    submit.disabled = false;
    console.log(err);
  }
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    submit.disabled = true;
    const payload = createPayload(page, form);
    post(url, payload, function(err, res) {
      if (err) {
        return error(err);
      }
      success();
    });
  });
  function createPayload(page2) {
    var payload = {
      page: page2,
      date: (/* @__PURE__ */ new Date()).toString(),
      email: input.value,
      captcha: grecaptcha.getResponse()
    };
    return payload;
  }
})();
//# sourceMappingURL=newsletter.js.map
