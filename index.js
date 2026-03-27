const hamburger = document.querySelector('.nav-hamburger');
const mobileNav = document.querySelector('.nav-mobile');
const mobileClose = document.querySelector('.nav-mobile__close');
const mobileLinks = document.querySelectorAll('.nav-mobile__link');
const themeBtn = document.querySelector('.icon-theme').parentElement;
const sunIcon = document.querySelector('.fa-sun');
const moonIcon = document.querySelector('.fa-moon');
const savedTheme = localStorage.getItem('theme');

hamburger.addEventListener('click', () => {
  mobileNav.classList.add('active');
});

mobileClose.addEventListener('click', () => {
  mobileNav.classList.remove('active');
});

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('active');
  });
});


if (savedTheme === 'light') {
  document.documentElement.setAttribute('data-theme', 'light');
  sunIcon.style.display = 'none';
  moonIcon.style.display = 'block';
} else {
  sunIcon.style.display = 'none';
  moonIcon.style.display = 'block';
}

themeBtn.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  
  if (current === 'light') {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme', 'dark');
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'block';
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    moonIcon.style.display = 'none';
    sunIcon.style.display = 'block';
  }
});