const listItems = document.querySelectorAll('.companyList__wrapper');
const swiperSlide = document.querySelectorAll('.swiper-slide');
const swiperWrapper = document.querySelector('.swiper-wrapper');
const companyList = document.querySelector('.companyList');
const listShowButton = companyList.querySelector('.button__show');
const listCloseButton = companyList.querySelector('.button__close');

listShowButton.addEventListener('click', (e) => {
	for(let i = 0; i < listItems.length; i++) {
		listItems[i].classList.remove('none');
		listShowButton.classList.add('none');
		listCloseButton.classList.remove('none');
	}
})

listCloseButton.addEventListener('click', (e) => {
	for(let i = 6; i < listItems.length; i++) {
		listItems[i].classList.add('none');
		listShowButton.classList.remove('none');
		listCloseButton.classList.add('none');
	}
})

const mediaQueryPl = window.matchMedia('(min-width: 768px)')
function handleTabletChange(e) {
	if (e.matches) {
		for(let i = 0; i < swiperSlide.length; i++) {
			listItems[i].classList.remove('swiper-slide');
		}
		for(let i = 6; i < listItems.length; i++) {
			listItems[i].classList.add('none');
		}
		listShowButton.classList.remove('none');
	}
}
mediaQueryPl.addListener(handleTabletChange);
handleTabletChange(mediaQueryPl);

