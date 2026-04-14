// ─── GrowBrow.ai Main JS ───

// Navbar scroll effect
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });
}

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
  });
}

// Scroll reveal
const revealEls = document.querySelectorAll('.feat-card, .step, .testi-card, .section-header, .compare-table');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('reveal', 'visible');
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// Smooth counter animation
function animateCounter(el, target, suffix = '') {
  let current = 0;
  const step = target / 60;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) { current = target; clearInterval(timer); }
    el.textContent = Math.round(current) + suffix;
  }, 16);
}

// Animate stats when in view
const stats = document.querySelectorAll('.stat-num');
const statsObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting && !e.target.dataset.animated) {
      e.target.dataset.animated = '1';
      const txt = e.target.textContent.trim();
      if (txt.endsWith('%')) animateCounter(e.target, parseInt(txt), '%');
      else if (txt.endsWith('×')) animateCounter(e.target, parseFloat(txt) * 10, '');
    }
  });
}, { threshold: 0.5 });
stats.forEach(s => statsObs.observe(s));

// Active nav link highlighting
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navAnchors.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === '#' + current) a.classList.add('active');
  });
});
