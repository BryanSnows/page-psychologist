document.addEventListener("DOMContentLoaded", () => {
  const prevButton = document.querySelector(".carousel-prev");
  const nextButton = document.querySelector(".carousel-next");
  const carousel = document.querySelector(".carousel");
  const slides = Array.from(carousel.querySelectorAll(".carousel-slide"));
  let currentIndex = 0;
  const intervalTime = 5000;

  const updateCarousel = () => {
    const offset = -currentIndex * 100;
    slides.forEach((slide) => {
      slide.style.transform = `translateX(${offset}%)`;
    });
  };

  const showNextSlide = () => {
    currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    updateCarousel();
  };

  const showPrevSlide = () => {
    currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    updateCarousel();
  };

  prevButton.addEventListener("click", showPrevSlide);
  nextButton.addEventListener("click", showNextSlide);

  setInterval(showNextSlide, intervalTime);

  updateCarousel();
});
