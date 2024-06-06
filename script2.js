$(document).ready(function() {
    // Появление и исчезновение кнопки "Наверх" при прокрутке страницы
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('#scrollToTopBtn').addClass('show');
      } else {
        $('#scrollToTopBtn').removeClass('show');
      }
    });
  
    // Плавная прокрутка страницы к верху
    $('#scrollToTopBtn').click(function() {
      $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
  });
  