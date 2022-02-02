window.onscroll = () => bg();

function bg() {
  var header = document.getElementsByTagName("header")[0].style.backgroundColor;
  if (document.documentElement.scrollTop == 0) {
    header = "#C3E0E580";
  } else {
    header = "#C3E0E5";
  }
  document.getElementsByTagName("header")[0].style.backgroundColor = header;
}

function switchexps() {
  document.getElementById("school").style.display = "grid";
  document.getElementById("work").style.display = "none";
}

function switchexpw() {
  document.getElementById("work").style.display = "grid";
  document.getElementById("school").style.display = "none";
}
