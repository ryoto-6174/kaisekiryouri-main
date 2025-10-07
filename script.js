// --- フェードイン・スライドイン --- //
const observerOptions = { threshold: 0.2 };
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      obs.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in, .fade-slide, .zoom-image').forEach(el => observer.observe(el));

// --- 背景のゆらぎに合わせた光のゆらめき --- //
const bg = document.querySelector('.background');
let move = 0;
function animateWashi() {
  move += 0.05;
  bg.style.filter = `brightness(${0.95 + Math.sin(move) * 0.05})`;
  requestAnimationFrame(animateWashi);
}
animateWashi();
