document.addEventListener("DOMContentLoaded", () => {
  // Year
  const year = document.getElementById("y");
  if (year) year.textContent = new Date().getFullYear();

  // Fade-in for hero content (on scroll)
  const heroContent = document.querySelector(".hero-content");
  if (heroContent) {
    const heroObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            heroContent.classList.add("visible");
            heroObserver.unobserve(heroContent);
          }
        });
      },
      { threshold: 0.4 }
    );
    heroObserver.observe(heroContent);
  }

  // Generic fade-in for .card and .art images
  const fadeTargets = document.querySelectorAll(".card, .art img");
  if (fadeTargets.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    fadeTargets.forEach((el) => observer.observe(el));

    // ✅ fallback: if JS runs after render and cards already in view
    fadeTargets.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        el.classList.add("fade-in");
      }
    });
  }
});

// Automated Review Slider
document.addEventListener("DOMContentLoaded", () => {
  const reviews = document.querySelectorAll(".review");
  let index = 0;

  if (reviews.length > 0) {
    reviews[index].classList.add("active");

    setInterval(() => {
      reviews[index].classList.remove("active");
      index = (index + 1) % reviews.length;
      reviews[index].classList.add("active");
    }, 6000); // 6 seconds per review
  }
});

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (toggle) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}
