const submit = document.querySelector("button");
const input = document.querySelector("input");
const errorMessage = document.querySelector(".error-message")
const errorIcon = document.querySelector(".error-icon");

submit.addEventListener("click", validate);

function validate(e) {
    e.preventDefault();

    const emailInput = input.value.trim();

    if(!isEmailValid(emailInput)){
        errorIcon.classList.remove("hidden");
        errorMessage.classList.remove("hidden");
    } else {
        errorIcon.classList.add("hidden");
        errorMessage.classList.add("hidden");
    }
}

function isEmailValid(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}
