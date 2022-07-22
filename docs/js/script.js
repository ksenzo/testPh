window.onscroll = function showHeader() {
   let fixedHeader = document.querySelector('.header');
   if (window.pageYOffset > 125) {
      fixedHeader.classList.add('__fixed');
   } else {
      fixedHeader.classList.remove('__fixed');
   }
};

let openMenuBtn = document.querySelector('.header__burger');
let closeMenuBtn = document.querySelector('.header__close-menu');

if (openMenuBtn) {
   const menuActive = document.querySelector('.header__menu');
   openMenuBtn.addEventListener('click', function () {
      menuActive.classList.add('__active');
      document.querySelector('body').classList.add('__noscroll');
   });
}

const menuActive = document.querySelector('.header__menu');

if (closeMenuBtn) {
   closeMenuBtn.addEventListener('click', function () {
      menuActive.classList.remove('__active');
      document.querySelector('body').classList.remove('__noscroll');
   });
}

menuActive.addEventListener('click', function(e) {
   if (!e.target.closest('.header__menu-body')) {
      menuActive.classList.remove('__active');
      document.querySelector('body').classList.remove('__noscroll');
   }
});

document.addEventListener("keydown", (e) => {
   if(e.key === "Escape"){
		menuActive.classList.remove('__active');
      document.querySelector('body').classList.remove('__noscroll');
	}
});
