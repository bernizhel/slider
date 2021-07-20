const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const container = document.querySelector('.container');
const mainSlide = document.querySelector('.main-slide');
const slidesCount = mainSlide.querySelectorAll('div').length - 1;

sidebar.style.top = `-${slidesCount * 100}vh`;

upBtn.addEventListener('click', () => {
  changeSlide('up');
});

downBtn.addEventListener('click', () => {
  changeSlide('down');
});

let activeSlideIndex = 0;

function changeSlide(direction) {
  if (direction === 'up') {
    activeSlideIndex++;
    if (activeSlideIndex > slidesCount) {
      activeSlideIndex = 0;
    }
  } else if (direction === 'down') {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount;
    }
  }
  translateSlides();
}

window.addEventListener('resize', () => {
  translateSlides(false);
});

function translateSlides(animated = true) {
  if (!animated) {
    mainSlide.classList.add('notransition');
    sidebar.classList.add('notransition');
  }
  const height = container.clientHeight;
  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
  if (!animated) {
    mainSlide.offsetHeight;
    sidebar.offsetHeight;
    mainSlide.classList.remove('notransition');
    sidebar.classList.remove('notransition');
  }
}
