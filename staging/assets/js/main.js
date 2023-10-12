(() => {
  // src/js/main.js
  var menuBtn = document.querySelectorAll(".menu-btn");
  var menuItems = document.querySelector(".menu-items");
  var submenuBtn = document.querySelectorAll(".submenu-btn");
  var closeBtn = document.querySelectorAll(".menu-close-btn");
  var containerAll = document.getElementById("container-all");
  menuBtn.forEach((btn) => {
    const x = window.matchMedia("(max-width: 970px)");
    if (x.matches) {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        if (btn.nextElementSibling.classList.contains("show")) {
          btn.nextElementSibling.classList.remove("show");
          if (btn.classList.contains("menu-services")) {
            containerAll.classList.remove("no-scroll");
          }
        } else {
          btn.nextElementSibling.classList.add("show");
          if (btn.classList.contains("menu-services")) {
            containerAll.classList.add("no-scroll");
          }
        }
        for (let i = 0; i < menuBtn.length; i++) {
          if (menuBtn[i].nextElementSibling != btn.nextElementSibling) {
            menuBtn[i].nextElementSibling.classList.remove("show");
          }
        }
      });
    }
  });
  submenuBtn.forEach((btn) => {
    const x = window.matchMedia("(max-width: 970px)");
    if (x.matches) {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        if (btn.nextElementSibling.classList.contains("show")) {
          btn.nextElementSibling.classList.remove("show");
        } else {
          btn.nextElementSibling.classList.add("show");
        }
        for (let i = 0; i < submenuBtn.length; i++) {
          if (submenuBtn[i].nextElementSibling != btn.nextElementSibling) {
            submenuBtn[i].nextElementSibling.classList.remove("show");
          }
        }
      });
    }
  });
  closeBtn.forEach((btn) => {
    const x = window.matchMedia("(max-width: 970px)");
    if (x.matches) {
      const arr = [...menuBtn, ...submenuBtn];
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        for (let i = 0; i < arr.length; i++) {
          if (arr[i].nextElementSibling.classList.contains("show")) {
            arr[i].nextElementSibling.classList.remove("show");
          }
        }
        containerAll.classList.remove("no-scroll");
      });
    }
  });
  document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
      if (window.scrollY > 50) {
        document.body.classList.add("ims-is-scrolled");
      } else {
        document.body.classList.remove("ims-is-scrolled");
      }
    });
  });
})();
//# sourceMappingURL=main.js.map
