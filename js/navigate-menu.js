export function showNavigation() {
	const header = document.querySelector('.header');
	const headerHeight = header.getBoundingClientRect().height;
	const navigation = document.querySelector('.navigation');
	const navigationHeight = navigation.getBoundingClientRect().height;

	getNavigation();

	window.addEventListener('scroll', () => {
		getNavigation();
	});

	function getNavigation() {
		if (window.pageYOffset >= headerHeight) {
			const position = window.pageYOffset + (window.innerHeight - navigationHeight) / 3;
			navigation.style = 'display: block';
			navigation.style = `top: ${position}px`;
		} else {
			navigation.style = 'display: none';
		}
	}
}
