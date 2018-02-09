window.addEventListener('DOMContentLoaded', function() {

  var header = document.querySelector('header.main-nav');

  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 100) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });

  document.querySelector('.mobile-toggle').addEventListener('click', function() {
    if(header.classList.contains('open-nav')) {
      header.classList.remove('open-nav');
    } else {
      header.classList.add('open-nav');
    }
  });

  // $('nav a').click(function(event) {
  //   var id = $(this).attr("href");
  //   var offset = 70;
  //   var target = $(id).offset().top - offset;
  //   $('html, body').animate({
  //       scrollTop: target
  //   }, 500);
  //   event.preventDefault();
  // });
});
