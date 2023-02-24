var light = document.getElementById("light");
var dark = document.getElementById("dark");
var body = document.getElementById("body");
dark.addEventListener("click", function () {
    body.style.background = "#001d3d";
    
})
light.addEventListener("click", function () {
    body.style.background = "white";
    
})
