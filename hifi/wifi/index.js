 const noob = document.getElementById("player11")
 const button = document.getElementById("button")
 const container = document.getElementById("container")

 button.addEventListener("click", function () {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    container.style.backgroundColor = `rgb(${r} , ${g} , ${b})`;
 })