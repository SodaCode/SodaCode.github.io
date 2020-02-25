let warning = document.getElementById("warning");
let button = document.querySelector(".warning-button");
let canvas = document.querySelector("#myCanvas");

button.addEventListener("click", function () {
    warning.style.display = "none";
    canvas.style.visibility = "visible";
});