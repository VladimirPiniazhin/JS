"use strict"

document.getElementById("trigger").onmouseover = function() {
    document.getElementById("target").src = "img/picB.jpg";
    
}
document.getElementById("trigger").onmouseout = function() {
    document.getElementById("target").src = "img/picA.jpg";
    
}