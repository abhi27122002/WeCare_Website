function openNav() {
    if (window.screen.width > 600) {
        document.getElementById("mySideNav").style.width = "25%";
    } else {
        document.getElementById("mySideNav").style.width = "100%";
    }
    document.getElementById("body").style.marginLeft = "25%";
}

function closeNav() {
    document.getElementById("mySideNav").style.width = "0px";
    document.getElementById("body").style.marginLeft = "0%";
}

document.addEventListener("DOMContentLoaded", function() {
    var elems = document.querySelectorAll(".slider");
    var instances = M.Slider.init(elems);
});