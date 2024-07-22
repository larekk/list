import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

const mediaQueryMobile = window.matchMedia('(max-width: 768px)')
function handleTabletChange(e) {
	if (e.matches) {
		new Swiper('.swiper', {
			// Optional parameters
			loop: true,

			// If we need pagination
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			slidesPerView: 'auto',
			spaceBetween: 16,
			watchOverflow: true,
		});
		listShowButton.classList.add('none');
		listCloseButton.classList.add('none');
	}
}
mediaQueryMobile.addListener(handleTabletChange);
handleTabletChange(mediaQueryMobile);