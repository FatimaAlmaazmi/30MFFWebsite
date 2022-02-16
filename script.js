
//Scroll to top button
var scrollUp = document.querySelector('.scrollup');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollUp.style.display = "block";
  } else {
    scrollUp.style.display = "none";
  }
}
scrollUp.addEventListener('click', function(){
  document.documentElement.scrollTop = 0;
});
