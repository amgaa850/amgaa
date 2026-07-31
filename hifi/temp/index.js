const degree  = document.getElementById("degree");
const current = document.getElementById("current-degree");
const convert = document.getElementById("convert-degree");
const button = document.getElementById("button");
const result = document.getElementById("result");

button.addEventListener("click", function () {
    if(current.value === "celsius" && convert === "celsius") {
        console.log("hello");
    }

})