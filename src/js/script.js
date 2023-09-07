// Hamburger 
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

// FAQ Section
const items = document.querySelectorAll('.faq__item');

items.forEach(item => {
    const button = item.querySelector('.faq__item-btn');
    const text = item.querySelector('.faq__item-text');
    let isChecked = false;
    
    const title = item.querySelector('.faq__item-title');

    button.addEventListener('click', () => {

        title.classList.toggle('active');
        button.classList.toggle('active');
        item.classList.toggle('active-border');

        if (isChecked) {
            button.innerHTML = "+";
            item.style.height = "12.6rem";
            text.style.opacity = "0";
        } else {
            button.innerHTML = "-";
            item.style.height = `${item.scrollHeight}px`;
            text.style.opacity = "1";
        }

        isChecked = !isChecked;
    });
});