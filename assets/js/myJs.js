const loginBlock = document.querySelector(".login-block");
const forgotPassBlock = document.querySelector(".forgotPass-block");
const signupBlock = document.querySelector(".signup-block");

const signupBtn = document.querySelector(".signup-btn");
const forgotPassBtn = document.querySelector(".forgotPass-btn");
const loginBtn = document.querySelector(".login-btn");
const backBtn = document.querySelector(".back-btn");

let signupBtnOpen = false;
signupBtn.addEventListener("click", () => {
    if (!signupBtnOpen) {
        signupBlock.classList.add("active");
        loginBlock.classList.add("active");
        signupBtnOpen = true;
    } else {
        signupBlock.classList.remove("active");
        signupBtnOpen = false;
    }
})

let forgotPassBtnOpen = false;
forgotPassBtn.addEventListener("click", () => {
    if (!forgotPassBtnOpen) {
        forgotPassBlock.classList.add("active");
        loginBlock.classList.add("active");
        forgotPassBtnOpen = true;
    } else {
        forgotPassBlock.classList.remove("active");
        forgotPassBtnOpen = false;
    }
})

let loginBtnOpen = false;
loginBtn.addEventListener("click", () => {
    if (!loginBtnOpen) {
        loginBlock.classList.remove("active");
        signupBlock.classList.remove("active");
        loginBtnOpen = true;
    } else {
        loginBtnOpen = false;
    }
})

let backBtnOpen = false;
backBtn.addEventListener("click", () => {
    if (!backBtnOpen) {
        loginBlock.classList.remove("active");
        forgotPassBlock.classList.remove("active");
        backBtnOpen = true;
    } else {
        backBtnOpen = false;
    }
})