var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;

console.log("prev: " + prevScrollpos);
console.log("cur: " + currentScrollPos);

if (prevScrollpos + 1 > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
} else {
    document.getElementById("navbar").style.top = "-90px";
}
    prevScrollpos = currentScrollPos;
}