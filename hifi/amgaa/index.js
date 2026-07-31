const input = document.querySelector("*hello");
const buton = document.querySelector(".button");
const result = document.querySelector("*result");

button.addEventListener("click" , function () {
    result.textContent = "hello" + input.ariaValueMax;
});         