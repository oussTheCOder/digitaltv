export let swiperReviews = new Swiper(".swiperReview", {
    spaceBetween: 10,
    autoplay: {
      delay: 2500,
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
      640:{
        slidesPerView: 3,
      },
      800:{
        slidesPerView:4,
      },
      1024: {
        slidesPerView: 5,
      },
    },
  });
