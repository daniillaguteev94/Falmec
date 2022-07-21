var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    freeMode: true,
    navigation: {
        nextEl: ".carousel__navigation-next",
        prevEl: ".carousel__navigation-back",
      
    },
    breakpoints: {
      960: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      320: {
        slidesPerView: 2,
        spaceBetween: 10,

      }

    }

  });

  var swiper = new Swiper(".swiperSales", {
    slidesPerView: 'auto',
    spaceBetween: 20,
    freeMode: true,
    autoWidth: true,
    
    navigation: {
        nextEl: ".carousel-sale__navigation-next",
        prevEl: ".carousel-sale__navigation-back",
      
    },

    breakpoints: {
      960: {
        slidesPerView: 'auto',
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 'auto',
        spaceBetween: 10,

      }
    }

   


  });