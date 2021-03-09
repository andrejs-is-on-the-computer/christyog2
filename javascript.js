var ua = navigator.userAgent.toLowerCase(); 
if (ua.indexOf('safari') != -1) { 
  if (ua.indexOf('chrome') > -1) {
    alert("CHROME") // Chrome
  } else {
    alert("SAFARI") // Safari
  }
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;

if (prevScrollpos + 1 > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
} else {
    document.getElementById("navbar").style.top = "-90px";
}
    prevScrollpos = currentScrollPos;
}