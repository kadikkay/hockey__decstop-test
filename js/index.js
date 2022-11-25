let swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  slidePerGroup: 1,
  spaceBetween: 50,
  watchSlidesProgress: 3,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,

  },
})

$(document).ready(function(){
  $(".choice__wrapper").owlCarousel({
    items: 4,
    margin: 25,
    nav: true,
  });
});
