import { Carousel } from 'https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.esm.js';

const myCarousel = new Carousel(document.querySelector('#myCarousel'), { Dots: false });

const leftArrow = document.querySelector('.promo-main__control-left');
const rightArrow = document.querySelector('.promo-main__control-right');

rightArrow.onclick = myCarousel.slideNext;
leftArrow.onclick = myCarousel.slidePrev;

const productCarousel = new Carousel(document.querySelector('#productCarousel'), {
	// slidesPerPage: 1,
	Dots: false,
});

const leftArrowSlider = document.querySelector('.slider__control-left');
const rightArrowSlider = document.querySelector('.slider__control-right');

rightArrowSlider.onclick = productCarousel.slideNext;
leftArrowSlider.onclick = productCarousel.slidePrev;
