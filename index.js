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
