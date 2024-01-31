
export let swiper = new Swiper(".mySwiper", {
    spaceBetween: 5,
    slidesPerView:4,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320:{
        slidesPerView:2,
      },
      580: {
        slidesPerView: 3,
      },
    
      768: {
        slidesPerView: 4,
      },
      
      1024: {
        slidesPerView: 6,
      },
    },
  });
