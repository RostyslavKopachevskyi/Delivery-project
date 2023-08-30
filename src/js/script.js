const hamburger = document.querySelector('.header__hamburger');
const navMenu = document.querySelector('.header__menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.header__menu-item').forEach(item => item.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));
