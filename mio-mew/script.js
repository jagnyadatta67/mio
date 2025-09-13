const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextBtn = document.querySelector('.carousel-btn.next');
const prevBtn = document.querySelector('.carousel-btn.prev');
const dotsNav = document.querySelector('.carousel-dots');

let currentSlide = 0;

// create dots
slides.forEach((_, i) => {
  const btn = document.createElement('button');
  if (i === 0) btn.classList.add('active');
  dotsNav.appendChild(btn);
});
const dots = Array.from(dotsNav.children);

function updateSlide(index) {
  track.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
  currentSlide = index;
}

nextBtn.addEventListener('click', () => {
  let next = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
  updateSlide(next);
});

prevBtn.addEventListener('click', () => {
  let prev = currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1;
  updateSlide(prev);
});

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => updateSlide(i));
});

// auto-slide every 6s
setInterval(() => {
  let next = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
  updateSlide(next);
}, 6000);
