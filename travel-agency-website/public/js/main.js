
(function () {
  'use strict';

  const navbar = document.getElementById('navbar');
  if (navbar) {
    const onScroll = () => {
      if (window.scrollY > 60) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); 
  }

  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', navLinks.classList.contains('open'));
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target)) navLinks.classList.remove('open');
    });
  }

  const revealEls = document.querySelectorAll(
    '.dest-card, .pkg-card, .pkg-full-card, .testi-card, .feature, .confirmation-card, .booking-summary-card'
  );

  if ('IntersectionObserver' in window && revealEls.length) {
    revealEls.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = `opacity 0.55s ease ${(i % 4) * 80}ms, transform 0.55s ease ${(i % 4) * 80}ms`;
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => observer.observe(el));
  }

  document.querySelectorAll('img[loading="lazy"]').forEach(img => {
    img.addEventListener('error', () => {
      img.style.background = '#e0dbd4';
      img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400"%3E%3Crect fill="%23e0dbd4" width="800" height="400"/%3E%3Ctext x="50%25" y="50%25" fill="%23a09890" font-family="serif" font-size="24" text-anchor="middle" dy=".3em"%3EImage unavailable%3C/text%3E%3C/svg%3E';
    });
  });

  const travellersSelect = document.getElementById('travellers');
  const totalDisplay     = document.getElementById('totalDisplay');
  const perPersonNote    = document.getElementById('perPersonNote');

  if (travellersSelect && totalDisplay) {
  }

  const dateInput = document.getElementById('departureDate');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
    if (!dateInput.value) dateInput.value = '';
  }
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  const alert = document.querySelector('.alert-success');
  if (alert) {
    setTimeout(() => {
      alert.style.transition = 'opacity 0.6s ease';
      alert.style.opacity = '0';
      setTimeout(() => alert.remove(), 700);
    }, 6000);
  }

  const currentPath = window.location.pathname.split('/')[1];
  document.querySelectorAll('.nav-links a').forEach(link => {
    const linkPath = link.getAttribute('href').split('/')[1];
    if (linkPath && linkPath === currentPath) {
      link.style.color = 'var(--gold)';
    }
  });

  const heroImg = document.querySelector('.hero-img');
  if (heroImg) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y < window.innerHeight) {
        heroImg.style.transform = `scale(1.05) translateY(${y * 0.18}px)`;
      }
    }, { passive: true });
  }

})();
