var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: "#swiper-pagination-news",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: "#swiper-button-next-news",
    prevEl: "#swiper-button-prev-news",
  },
});

// residences
var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  grid: {
    rows: 1,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      grid: {
        rows: 2,
      },
    },
    768: {
      slidesPerView: 2,
      grid: {
        rows: 2,
      },
    },
    992: {
      slidesPerView: 3,
      grid: {
        rows: 2,
      },
    },
  },
  spaceBetween: 30,
  pagination: {
    el: "#swiper-pagination-residences",
    clickable: true,
  },
  navigation: {
    nextEl: "#swiper-button-next-residences",
    prevEl: "#swiper-button-prev-residences",
  },
});

// properties

var swiper = new Swiper(".mySwiper3", {
  slidesPerView: 1,
  grid: {
    rows: 1,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      grid: {
        rows: 1,
      },
    },
    768: {
      slidesPerView: 2,
      grid: {
        rows: 2,
      },
    },
    992: {
      slidesPerView: 3,
      grid: {
        rows: 2,
      },
    },
  },
  spaceBetween: 30,
  pagination: {
    el: "#swiper-pagination-properties",
    clickable: true,
  },
  navigation: {
    nextEl: "#swiper-button-next-properties",
    prevEl: "#swiper-button-prev-properties",
  },
});
