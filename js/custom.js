 jQuery(function($) {
  $(document).ready( function() {

     // owl carousel plugin linking here
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:40,
    autoplay: Boolean,
    autoplayTimeout:1000,
        responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})
     
  // var swiper = new Swiper(".mySwiper", {
  //     slidesPerView: 2,
  //     grid: {
  //       rows: 1,
  //     },
  //     spaceBetween: 0,
  //     pagination: {
  //       el: ".swiper-pagination",
  //       clickable: false,
       
  //     },
  //   });

     const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
      }
    });


       });
              });