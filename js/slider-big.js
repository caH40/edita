import { Carousel } from 'https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.esm.js';

const carousels = document.querySelectorAll('.product__carousel');
for (let carousel of carousels) {
	const slider = carousel.closest('.slider');
	const arrowsRight = slider.querySelector('.slider__control-right');
	const arrowsLeft = slider.querySelector('.slider__control-left');

	const productCarousel = new Carousel(carousel, {
		slidesPerPage: 1,
		Dots: false,
		center: false,
	});
	arrowsRight.onclick = productCarousel.slideNext;
	arrowsLeft.onclick = productCarousel.slidePrev;
}
