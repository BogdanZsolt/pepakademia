/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");


const arrows = document.querySelectorAll('.arrow');
const movieLists = document.querySelectorAll('.movie-list');
const courseLists = document.querySelectorAll('.movie-list');

let courseData = [
	{
		id: 'p01',
		src: './img/Meghan/01.jpg',
		title: 'Harmonising Breath',
		categories: 'new_classes',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p02',
		src: './img/Meghan/02.jpg',
		title: 'Stillness in Motion',
		categories: 'new_classes',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p03',
		src: './img/Meghan/03.jpg',
		title: 'Creative Feminine Flow',
		categories: 'new_classes',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p04',
		src: './img/Meghan/04.jpg',
		title: 'Modified Kasyapasana',
		categories: 'new_classes',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p05',
		src: './img/Meghan/05.jpg',
		title: 'Full Body Presence',
		categories: 'new_classes',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p06',
		src: './img/Meghan/06.jpg',
		title: 'Earth Connection',
		categories: 'new_classes',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p07',
		src: './img/Meghan/07.jpg',
		title: 'Expand Into Vasisthasana',
		categories: 'new_classes',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p08',
		src: './img/Meghan/08.jpg',
		title: 'Be With What Is',
		categories: 'new_classes',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p09',
		src: './img/Meghan/09.jpg',
		title: '7 Directions of the Spine',
		categories: 'new_classes',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p10',
		src: './img/Meghan/10.jpg',
		title: 'Straight Up Warm Up',
		categories: 'metamorphosis',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p11',
		src: './img/Meghan/11.jpg',
		title: 'Hip Hip Hooray',
		categories: 'metamorphosis',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p12',
		src: './img/Meghan/12.jpg',
		title: 'Puppy Press Play',
		categories: 'metamorphosis',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p13',
		src: './img/Meghan/13.jpg',
		title: 'Wake Up and Flow',
		categories: 'metamorphosis',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p14',
		src: './img/Meghan/14.jpg',
		title: 'Unwind Your Mind',
		categories: 'metamorphosis',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p15',
		src: './img/Meghan/15.jpg',
		title: 'Prayer in Motion',
		categories: 'metamorphosis',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p16',
		src: './img/Meghan/16.jpg',
		title: 'Yummy Yin at the Wall',
		categories: 'metamorphosis',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p17',
		src: './img/Meghan/17.jpg',
		title: 'Move More',
		categories: 'metamorphosis',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p18',
		src: './img/Meghan/18.jpg',
		title: 'Align from the Inside Out',
		categories: 'metamorphosis',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p19',
		src: './img/Meghan/19.jpg',
		title: 'Awaken Inspiration',
		categories: 'programs',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p20',
		src: './img/Meghan/20.jpg',
		title: 'Effort and Surrender',
		categories: 'programs',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p21',
		src: './img/Meghan/21.jpg',
		title: 'Electric Booty',
		categories: 'programs',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p22',
		src: './img/Meghan/22.jpg',
		title: 'Morning Glou',
		categories: 'programs',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p23',
		src: './img/Meghan/23.jpg',
		title: 'Introduction to Wheel',
		categories: 'programs',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p24',
		src: './img/Meghan/24.jpg',
		title: "Dancer's Pose Progression",
		categories: 'programs',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p25',
		src: './img/Meghan/25.jpg',
		title: 'Drop It Back',
		categories: 'programs',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p26',
		src: './img/Meghan/26.jpg',
		title: 'Exhale Alchemy',
		categories: 'programs',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p27',
		src: './img/Meghan/27.jpg',
		title: 'Sweet Deep Stretch',
		categories: 'programs',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p28',
		src: './img/Meghan/28.jpg',
		title: 'Seated Flow',
		categories: 'workshops',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p29',
		src: './img/Meghan/29.jpg',
		title: 'Lazy Sunday Afternoon',
		categories: 'workshops',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p30',
		src: './img/Meghan/30.jpg',
		title: 'Grounded in Simplicity',
		categories: 'workshops',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p31',
		src: './img/Meghan/31.jpg',
		title: 'Booty and Breath',
		categories: 'workshops',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p32',
		src: './img/Meghan/32.jpg',
		title: 'Grounding and Calming',
		categories: 'workshops',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p33',
		src: './img/Meghan/33.jpg',
		title: 'Softer and Softer',
		categories: 'workshops',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p34',
		src: './img/Meghan/34.jpg',
		title: 'Honey Mustard Super Sauce',
		categories: 'workshops',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p35',
		src: './img/Meghan/35.jpg',
		title: 'Pea+ Mint Hummus',
		categories: 'workshops',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p36',
		src: './img/Meghan/36.jpg',
		title: 'Kale Kimchi Tacos',
		categories: 'workshops',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
];

courseLists.forEach((courseList) => {
	courseData.forEach((item) => {
		if (courseList.dataset.categories === item.categories) {
			let courseElement = `
      <div class="movie-list__item">
        <a href="#">
          <img class="movie-list__item--img" src="${item.src}" alt=""/>
          <p class="movie-list__item--desc">${item.desc}</p>
        </a>
        <h2 class="movie-list__item--title">${item.title}</h2>
      </div>`;
			courseList.innerHTML += courseElement;
		}
	});
});

arrows.forEach((arrow, index) => {
	const itemNumber = movieLists[index].querySelectorAll('img').length;
	if (itemNumber < Math.floor(window.innerWidth / 285)) {
		arrow.style.display = 'none';
	} else {
		arrow.style.display = '';
	}
	let clickCounter = 0;
	arrow.addEventListener('click', () => {
		const ratio = Math.floor(window.innerWidth / 285);
		clickCounter++;
		if (itemNumber - (6 + clickCounter) + (6 - ratio) >= 0) {
			movieLists[index].style.transform = `translateX(${
				movieLists[index].computedStyleMap().get('transform')[0].x
					.value - 315
			}px)`;
		} else {
			movieLists[index].style.transform = `translateX(0)`;
			clickCounter = 0;
		}
	});
});

// Color Toggle

const ball = document.querySelector('.color-toggle');
const items = document.querySelectorAll(
	'.container, .movie-list-title, .navbar-container, .color-toggle__ball, .selection, .filter-button, .footer, .footer-content__text, .footer-copyright, .footer-social__item'
);

ball.addEventListener('click', () => {
	ball.classList.toggle('active');
	items.forEach((item) => {
		item.classList.toggle('active');
	});
});

const filterButton = document.querySelector('.filter-button');
const filterContainer = document.querySelector('.filter-container');

filterButton.onclick = () => {
	filterContainer.classList.toggle('active');
};

})();

/******/ })()
;
//# sourceMappingURL=index.js.map