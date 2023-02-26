import { showNavigation } from './navigate-menu.js';

showNavigation();

//замена стандартной кнопки загрузки на дизайн с макета
const buttonFile = document.querySelector('.contacts-measuring__button-file');
const inputFile = document.querySelector('.contacts-measuring__input-file');
buttonFile.addEventListener('click', e => {
	e.preventDefault();
	inputFile.click();
});
