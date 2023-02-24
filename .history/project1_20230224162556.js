var light = document.getElementById("light");
var dark = document.getElementById("dark");
var body = document.getElementById("body");
dark.addEventListener("click", function () {
    body.style.background = "black";
    
})
light.addEventListener("click", function () {
    body.style.background = "white";
    
})
