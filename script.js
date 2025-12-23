async function includeHTML(id, file) {
  try {
    const response = await fetch(file);
    if (!response.ok) throw new Error(`Failed to load ${file}`);
    const html = await response.text();
    document.getElementById(id).innerHTML = html;
  } catch (err) {
    console.error(err);
  }
}


includeHTML('header', 'header.html');
includeHTML('footer', 'footer.html');
const slides = document.querySelectorAll('.intro .slide');
let currentSlide = 0;
const totalSlides = slides.length;
const slideInterval = 3000; // 3 seconds per slide

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

// Initialize
showSlide(currentSlide);
setInterval(nextSlide, slideInterval);
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');

  // Toggle hamburger animation (optional)
  hamburger.classList.toggle('open');
});

