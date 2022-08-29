const night = document.querySelector('#night');
const cards = document.querySelectorAll('.card');
const slider = document.querySelector('#slider');
const sliderMenu = document.querySelector('#slider-menu');
const wholePage = document.querySelector('#wholePage')
const closeSigh = document.querySelector('#closeSign');

let lockThePage = true;
night.addEventListener('click', () =>{
    if (night.innerText.toLowerCase() === '🌑') {
        document.body.classList.toggle('night');
        document.body.style.color = '#FFF'
        cards.forEach(card => {
            card.style.color = '#000'
            card.style.opacity = 0.7;
        });
        night.innerText = '☀️';
    } else {
        document.body.classList.toggle('night')
        night.innerText = '🌑';
        document.body.style.color = '#000'
        cards.forEach(card => {
            card.style.opacity = 1;
        });
    }
})
slider.addEventListener('click', () =>{
    sliderMenu.classList.toggle('links')
    wholePage.classList.toggle('blurred');
    slider.removeAttribute('src');
    lockThePage = true;
})
closeSigh.addEventListener('click', () => {
    sliderMenu.classList.toggle('links');
    wholePage.classList.toggle('blurred');
    setTimeout(() => {
    slider.setAttribute('src', 'menu.svg');
    },700)
})

