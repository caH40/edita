import { Carousel } from 'https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.esm.js';

const myCarousel = new Carousel(document.querySelector('.promo__carousel'), { Dots: false });

const leftArrow = document.querySelector('.promo-main__control-left');
const rightArrow = document.querySelector('.promo-main__control-right');

rightArrow.onclick = myCarousel.slideNext;
leftArrow.onclick = myCarousel.slidePrev;
