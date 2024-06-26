var swiper = new Swiper(".mySwiperDesktop", {
  loop: true,
  autoplay: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

var swiper = new Swiper(".mySwiperMobile", {
  loop: true,
  autoplay: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

var swiper = new Swiper(".standardSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: true,
  loop: true,
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".processSwiper", {
  autoplay: true,
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".testimonialSwiper", {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

let navBar = document.querySelector("#navBar");
let hamburger = document.querySelector("#hamburger");

hamburger.addEventListener("click", () => {
  navBar.classList.toggle("nav--active");
  hamburger.classList.toggle("bx-x-circle");
});

let faqQuestions = document.querySelectorAll(".faq-card__question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    var abc = question.nextElementSibling;
    console.log(abc);
    question.classList.toggle("faq-card__question--active");
    abc.classList.toggle("faq-card__answer--active");
  });
});

let backToTop = document.querySelector("#backToTop");

window.onscroll = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTop.style.opacity = "1";
  } else {
    backToTop.style.opacity = "0";
  }
};

backToTop.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

