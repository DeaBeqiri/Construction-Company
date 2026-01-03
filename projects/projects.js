/*JavaScript per funksionalitetin e faqes se projekteve me JQuery*/

$(document).ready(function() {
  const maxScroll = 200;

  /* Animacioni i headerit */
  $(window).scroll(function() {
    const progress = Math.min($(window).scrollTop() / maxScroll, 1);
    $('header').css({
      transform: `translateY(-${progress * 100}%)`,
      opacity: 1 - progress
    });
  });

  /* Menuja hamburger */
  $('.hamburger').click(function() {
    $(this).toggleClass('active');
    $('.nav-menu').toggleClass('active');
  });

  /* Mbyllja e menuse kur klikohet nje link */
  $('.nav-menu a').click(function() {
    $('.hamburger').removeClass('active');
    $('.nav-menu').removeClass('active');
  });
});