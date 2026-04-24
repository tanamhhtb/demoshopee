var registerTrigger = document.querySelector(
    ".header__navbar-item.header__navbar-item-strong.header__navbar-item--separate"
);
var loginTrigger = document.querySelector(
    ".header__navbar-item.header__navbar-item-strong:not(.header__navbar-item--separate)"
);
var modal = document.querySelector(".modal");
var overlay = document.querySelector(".modal__overlay");
var authForms = document.querySelectorAll(".modal .auth-form");
var backButtons = document.querySelectorAll(".auth-form__control-back");
var switchButtons = document.querySelectorAll(".auth-form__switch-btn");
var heartIcons = document.querySelectorAll(".ti-heart");

if (modal) {
    modal.style.display = "none";
}

if (registerTrigger && loginTrigger && modal && authForms.length >= 2) {
    var registerForm = authForms[0];
    var loginForm = authForms[1];

    function showRegisterForm() {
        modal.style.display = "flex";
        registerForm.style.display = "block";
        loginForm.style.display = "none";
    }

    function showLoginForm() {
        modal.style.display = "flex";
        registerForm.style.display = "none";
        loginForm.style.display = "block";
    }

    function closeModal() {
        modal.style.display = "none";
    }

    registerTrigger.addEventListener("click", function (event) {
        event.preventDefault();
        showRegisterForm();
    });

    loginTrigger.addEventListener("click", function (event) {
        event.preventDefault();
        showLoginForm();
    });

    if (overlay) {
        overlay.addEventListener("click", closeModal);
    }

    backButtons.forEach(function (button) {
        button.addEventListener("click", closeModal);
    });

    switchButtons.forEach(function (button, index) {
        button.addEventListener("click", function () {
            if (index === 0) {
                showLoginForm();
                return;
            }

            showRegisterForm();
        });
    });
}

heartIcons.forEach(function (heartIcon) {
    heartIcon.style.cursor = "pointer";
    heartIcon.style.color = "black";

    heartIcon.addEventListener("click", function () {
        if (heartIcon.style.color === "red") {
            heartIcon.style.color = "black";
            return;
        }

        heartIcon.style.color = "red";
    });
});
