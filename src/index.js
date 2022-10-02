import Swiper, { Navigation } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import './index.scss';

// const arrows = document.querySelectorAll('.arrow');
// const movieLists = document.querySelectorAll('.movie-list');
const courseLists = document.querySelectorAll('.movie-list');

const mainVideo = document.querySelector('.main-video-container');
const videoPlaylist = document.querySelector('.video-list-container');
const sliders = document.querySelectorAll('.movie-list-wrapper');

let courseData = [
	{
		id: 'p001',
		src: 'img/Meghan/01.jpg',
		title: 'Harmonising Breath',
		area: 'lifedesign',
		category: 'new_classes',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p002',
		src: 'img/Meghan/02.jpg',
		title: 'Stillness in Motion',
		area: 'lifedesign',
		category: 'new_classes',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p003',
		src: 'img/Meghan/03.jpg',
		title: 'Creative Feminine Flow',
		area: 'lifedesign',
		category: 'new_classes',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p004',
		src: 'img/Meghan/04.jpg',
		title: 'Modified Kasyapasana',
		area: 'lifedesign',
		category: 'new_classes',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p005',
		src: 'img/Meghan/05.jpg',
		title: 'Full Body Presence',
		area: 'lifedesign',
		category: 'new_classes',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p006',
		src: 'img/Meghan/06.jpg',
		title: 'Earth Connection',
		area: 'lifedesign',
		category: 'new_classes',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p007',
		src: 'img/Meghan/07.jpg',
		title: 'Expand Into Vasisthasana',
		area: 'lifedesign',
		category: 'new_classes',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p008',
		src: 'img/Meghan/08.jpg',
		title: 'Be With What Is',
		area: 'lifedesign',
		category: 'new_classes',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p009',
		src: 'img/Meghan/09.jpg',
		title: '7 Directions of the Spine',
		area: 'lifedesign',
		category: 'metamorphosis',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p010',
		src: 'img/Meghan/10.jpg',
		title: 'Straight Up Warm Up',
		area: 'lifedesign',
		category: 'metamorphosis',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p011',
		src: 'img/Meghan/11.jpg',
		title: 'Hip Hip Hooray',
		area: 'lifedesign',
		category: 'metamorphosis',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p012',
		src: 'img/Meghan/12.jpg',
		title: 'Puppy Press Play',
		area: 'lifedesign',
		category: 'metamorphosis',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p013',
		src: 'img/Meghan/13.jpg',
		title: 'Wake Up and Flow',
		area: 'lifedesign',
		category: 'metamorphosis',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p014',
		src: 'img/Meghan/14.jpg',
		title: 'Unwind Your Mind',
		area: 'lifedesign',
		category: 'metamorphosis',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p015',
		src: 'img/Meghan/15.jpg',
		title: 'Prayer in Motion',
		area: 'lifedesign',
		category: 'metamorphosis',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p016',
		src: 'img/Meghan/16.jpg',
		title: 'Yummy Yin at the Wall',
		area: 'lifedesign',
		category: 'metamorphosis',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p017',
		src: 'img/Meghan/17.jpg',
		title: 'Move More',
		area: 'lifedesign',
		category: 'programs',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p018',
		src: 'img/Meghan/18.jpg',
		title: 'Align from the Inside Out',
		area: 'lifedesign',
		category: 'programs',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p019',
		src: 'img/Meghan/19.jpg',
		title: 'Awaken Inspiration',
		area: 'lifedesign',
		category: 'programs',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p020',
		src: 'img/Meghan/20.jpg',
		title: 'Effort and Surrender',
		area: 'lifedesign',
		category: 'programs',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p021',
		src: 'img/Meghan/21.jpg',
		title: 'Electric Booty',
		area: 'lifedesign',
		category: 'programs',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p022',
		src: 'img/Meghan/22.jpg',
		title: 'Morning Glou',
		area: 'lifedesign',
		category: 'programs',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p023',
		src: 'img/Meghan/23.jpg',
		title: 'Introduction to Wheel',
		area: 'lifedesign',
		category: 'programs',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p024',
		src: 'img/Meghan/24.jpg',
		title: "Dancer's Pose Progression",
		area: 'lifedesign',
		category: 'programs',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p025',
		src: 'img/Meghan/25.jpg',
		title: 'Drop It Back',
		area: 'lifedesign',
		category: 'workshops',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p026',
		src: 'img/Meghan/26.jpg',
		title: 'Exhale Alchemy',
		area: 'lifedesign',
		category: 'workshops',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p027',
		src: 'img/Meghan/27.jpg',
		title: 'Sweet Deep Stretch',
		area: 'lifedesign',
		category: 'workshops',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p028',
		src: 'img/Meghan/28.jpg',
		title: 'Seated Flow',
		area: 'lifedesign',
		category: 'workshops',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p029',
		src: 'img/Meghan/29.jpg',
		title: 'Lazy Sunday Afternoon',
		area: 'lifedesign',
		category: 'workshops',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p030',
		src: 'img/Meghan/30.jpg',
		title: 'Grounded in Simplicity',
		area: 'lifedesign',
		category: 'workshops',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p031',
		src: 'img/Meghan/31.jpg',
		title: 'Booty and Breath',
		area: 'lifedesign',
		category: 'workshops',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p032',
		src: 'img/Meghan/32.jpg',
		title: 'Grounding and Calming',
		area: 'lifedesign',
		category: 'workshops',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p033',
		src: 'img/Meghan/33.jpg',
		title: 'Softer and Softer',
		area: 'holistic_health',
		category: 'new_classes',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p034',
		src: 'img/Meghan/34.jpg',
		title: 'Honey Mustard Super Sauce',
		area: 'holistic_health',
		category: 'new_classes',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p035',
		src: 'img/Meghan/35.jpg',
		title: 'Pea+ Mint Hummus',
		area: 'holistic_health',
		category: 'new_classes',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p036',
		src: 'img/Meghan/36.jpg',
		title: 'Kale Kimchi Tacos',
		area: 'holistic_health',
		category: 'new_classes',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p037',
		src: 'img/Meghan/01.jpg',
		title: 'Harmonising Breath',
		area: 'holistic_health',
		category: 'new_classes',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p038',
		src: 'img/Meghan/02.jpg',
		title: 'Stillness in Motion',
		area: 'holistic_health',
		category: 'new_classes',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p039',
		src: 'img/Meghan/03.jpg',
		title: 'Creative Feminine Flow',
		area: 'holistic_health',
		category: 'new_classes',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p040',
		src: 'img/Meghan/04.jpg',
		title: 'Modified Kasyapasana',
		area: 'holistic_health',
		category: 'new_classes',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p041',
		src: 'img/Meghan/05.jpg',
		title: 'Full Body Presence',
		area: 'holistic_health',
		category: 'metamorphosis',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p042',
		src: 'img/Meghan/06.jpg',
		title: 'Earth Connection',
		area: 'holistic_health',
		category: 'metamorphosis',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p043',
		src: 'img/Meghan/07.jpg',
		title: 'Expand Into Vasisthasana',
		area: 'holistic_health',
		category: 'metamorphosis',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p044',
		src: 'img/Meghan/08.jpg',
		title: 'Be With What Is',
		area: 'holistic_health',
		category: 'metamorphosis',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p045',
		src: 'img/Meghan/09.jpg',
		title: '7 Directions of the Spine',
		area: 'holistic_health',
		category: 'metamorphosis',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p046',
		src: 'img/Meghan/10.jpg',
		title: 'Straight Up Warm Up',
		area: 'holistic_health',
		category: 'metamorphosis',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p047',
		src: 'img/Meghan/11.jpg',
		title: 'Hip Hip Hooray',
		area: 'holistic_health',
		category: 'metamorphosis',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p048',
		src: 'img/Meghan/12.jpg',
		title: 'Puppy Press Play',
		area: 'holistic_health',
		category: 'metamorphosis',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p049',
		src: 'img/Meghan/13.jpg',
		title: 'Wake Up and Flow',
		area: 'holistic_health',
		category: 'programs',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p050',
		src: 'img/Meghan/14.jpg',
		title: 'Unwind Your Mind',
		area: 'holistic_health',
		category: 'programs',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p051',
		src: 'img/Meghan/15.jpg',
		title: 'Prayer in Motion',
		area: 'holistic_health',
		category: 'programs',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p052',
		src: 'img/Meghan/16.jpg',
		title: 'Yummy Yin at the Wall',
		area: 'holistic_health',
		category: 'programs',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p053',
		src: 'img/Meghan/17.jpg',
		title: 'Move More',
		area: 'holistic_health',
		category: 'programs',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p054',
		src: 'img/Meghan/18.jpg',
		title: 'Align from the Inside Out',
		area: 'holistic_health',
		category: 'programs',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p055',
		src: 'img/Meghan/19.jpg',
		title: 'Awaken Inspiration',
		area: 'holistic_health',
		category: 'programs',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p056',
		src: 'img/Meghan/20.jpg',
		title: 'Effort and Surrender',
		area: 'holistic_health',
		category: 'programs',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p057',
		src: 'img/Meghan/21.jpg',
		title: 'Electric Booty',
		area: 'holistic_health',
		category: 'workshops',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p058',
		src: 'img/Meghan/22.jpg',
		title: 'Morning Glou',
		area: 'holistic_health',
		category: 'workshops',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p059',
		src: 'img/Meghan/23.jpg',
		title: 'Introduction to Wheel',
		area: 'holistic_health',
		category: 'workshops',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p060',
		src: 'img/Meghan/24.jpg',
		title: "Dancer's Pose Progression",
		area: 'holistic_health',
		category: 'workshops',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p061',
		src: 'img/Meghan/25.jpg',
		title: 'Drop It Back',
		area: 'holistic_health',
		category: 'workshops',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p062',
		src: 'img/Meghan/26.jpg',
		title: 'Exhale Alchemy',
		area: 'holistic_health',
		category: 'workshops',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p063',
		src: 'img/Meghan/27.jpg',
		title: 'Sweet Deep Stretch',
		area: 'holistic_health',
		category: 'workshops',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p064',
		src: 'img/Meghan/28.jpg',
		title: 'Seated Flow',
		area: 'holistic_health',
		category: 'workshops',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p065',
		src: 'img/Meghan/29.jpg',
		title: 'Lazy Sunday Afternoon',
		area: 'earthpuzzle',
		category: 'new_classes',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p066',
		src: 'img/Meghan/30.jpg',
		title: 'Grounded in Simplicity',
		area: 'earthpuzzle',
		category: 'new_classes',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p067',
		src: 'img/Meghan/31.jpg',
		title: 'Booty and Breath',
		area: 'earthpuzzle',
		category: 'new_classes',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p068',
		src: 'img/Meghan/32.jpg',
		title: 'Grounding and Calming',
		area: 'earthpuzzle',
		category: 'new_classes',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p069',
		src: 'img/Meghan/33.jpg',
		title: 'Softer and Softer',
		area: 'earthpuzzle',
		category: 'new_classes',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p070',
		src: 'img/Meghan/34.jpg',
		title: 'Honey Mustard Super Sauce',
		area: 'earthpuzzle',
		category: 'new_classes',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p071',
		src: 'img/Meghan/35.jpg',
		title: 'Pea+ Mint Hummus',
		area: 'earthpuzzle',
		category: 'new_classes',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p072',
		src: 'img/Meghan/36.jpg',
		title: 'Kale Kimchi Tacos',
		area: 'earthpuzzle',
		category: 'new_classes',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p073',
		src: 'img/Meghan/04.jpg',
		title: 'Modified Kasyapasana',
		area: 'earthpuzzle',
		category: 'metamorphosis',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p074',
		src: 'img/Meghan/05.jpg',
		title: 'Full Body Presence',
		area: 'earthpuzzle',
		category: 'metamorphosis',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p075',
		src: 'img/Meghan/06.jpg',
		title: 'Earth Connection',
		area: 'earthpuzzle',
		category: 'metamorphosis',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p076',
		src: 'img/Meghan/07.jpg',
		title: 'Expand Into Vasisthasana',
		area: 'earthpuzzle',
		category: 'metamorphosis',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p077',
		src: 'img/Meghan/08.jpg',
		title: 'Be With What Is',
		area: 'earthpuzzle',
		category: 'metamorphosis',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p078',
		src: 'img/Meghan/09.jpg',
		title: '7 Directions of the Spine',
		area: 'earthpuzzle',
		category: 'metamorphosis',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p079',
		src: 'img/Meghan/10.jpg',
		title: 'Straight Up Warm Up',
		area: 'earthpuzzle',
		category: 'metamorphosis',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p080',
		src: 'img/Meghan/11.jpg',
		title: 'Hip Hip Hooray',
		area: 'earthpuzzle',
		category: 'metamorphosis',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p081',
		src: 'img/Meghan/12.jpg',
		title: 'Puppy Press Play',
		area: 'earthpuzzle',
		category: 'programs',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p082',
		src: 'img/Meghan/13.jpg',
		title: 'Wake Up and Flow',
		area: 'earthpuzzle',
		category: 'programs',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p083',
		src: 'img/Meghan/14.jpg',
		title: 'Unwind Your Mind',
		area: 'earthpuzzle',
		category: 'programs',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p084',
		src: 'img/Meghan/15.jpg',
		title: 'Prayer in Motion',
		area: 'earthpuzzle',
		category: 'programs',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p085',
		src: 'img/Meghan/16.jpg',
		title: 'Yummy Yin at the Wall',
		area: 'earthpuzzle',
		category: 'programs',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p086',
		src: 'img/Meghan/17.jpg',
		title: 'Move More',
		area: 'earthpuzzle',
		category: 'programs',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p087',
		src: 'img/Meghan/18.jpg',
		title: 'Align from the Inside Out',
		area: 'earthpuzzle',
		category: 'programs',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p088',
		src: 'img/Meghan/19.jpg',
		title: 'Awaken Inspiration',
		area: 'earthpuzzle',
		category: 'programs',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p089',
		src: 'img/Meghan/20.jpg',
		title: 'Effort and Surrender',
		area: 'earthpuzzle',
		category: 'workshops',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p090',
		src: 'img/Meghan/21.jpg',
		title: 'Electric Booty',
		area: 'earthpuzzle',
		category: 'workshops',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p091',
		src: 'img/Meghan/22.jpg',
		title: 'Morning Glou',
		area: 'earthpuzzle',
		category: 'workshops',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p092',
		src: 'img/Meghan/23.jpg',
		title: 'Introduction to Wheel',
		area: 'earthpuzzle',
		category: 'workshops',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p093',
		src: 'img/Meghan/24.jpg',
		title: "Dancer's Pose Progression",
		area: 'earthpuzzle',
		category: 'workshops',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p094',
		src: 'img/Meghan/25.jpg',
		title: 'Drop It Back',
		area: 'earthpuzzle',
		category: 'workshops',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p095',
		src: 'img/Meghan/26.jpg',
		title: 'Exhale Alchemy',
		area: 'earthpuzzle',
		category: 'workshops',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
	{
		id: 'p096',
		src: 'img/Meghan/27.jpg',
		title: 'Sweet Deep Stretch',
		area: 'earthpuzzle',
		category: 'workshops',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est asperiores soluta  reprehenderit?',
	},
];

let videoData = [
	{
		id: 'a1',
		title: 'manipulate text background',
		video: '../videos/manipulate text background.mp4',
		img: '../img/Meghan/01.jpg',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sed nemo laboriosam facilis. Maiores, repudiandae officiis!',
		duration: '2:47',
	},
	{
		id: 'a2',
		title: 'build gauge with css',
		video: '../videos/build gauge with css.mp4',
		img: '../img/Meghan/02.jpg',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sed nemo laboriosam facilis. Maiores, repudiandae officiis!',
		duration: '2:45',
	},
	{
		id: 'a3',
		title: '3D popup card',
		video: '../videos/3D popup card.mp4',
		img: '../img/Meghan/03.jpg',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sed nemo laboriosam facilis. Maiores, repudiandae officiis!',
		duration: '24:49',
	},

	{
		id: 'a4',
		title: 'customize HTML5 form elements',
		video: '../videos/customize HTML5 form elements.mp4',
		img: '../img/Meghan/04.jpg',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sed nemo laboriosam facilis. Maiores, repudiandae officiis!',
		duration: '3:59',
	},
	{
		id: 'a5',
		title: 'custom select box',
		video: '../videos/custom select box.mp4',
		img: '../img/Meghan/05.jpg',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sed nemo laboriosam facilis. Maiores, repudiandae officiis!',
		duration: '4:25',
	},
	{
		id: 'a6',
		title: 'embed google map to contact form',
		video: '../videos/embed google map to contact form.mp4',
		img: '../img/Meghan/06.jpg',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sed nemo laboriosam facilis. Maiores, repudiandae officiis!',
		duration: '5:33',
	},
	{
		id: 'a7',
		title: 'password strength checker javascript web app',
		video: '../videos/password strength checker javascript web app.mp4',
		img: '../img/Meghan/07.jpg',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sed nemo laboriosam facilis. Maiores, repudiandae officiis!',
		duration: '0:29',
	},
];

courseLists.forEach((courseList) => {
	courseData.forEach((item) => {
		let dir =
			courseList.dataset.directory !== undefined
				? courseList.dataset.directory
				: './';
		let area =
			courseList.dataset.area !== undefined
				? courseList.dataset.area
				: '';
		let category =
			courseList.dataset.category !== undefined
				? courseList.dataset.category
				: '';
		let link =
			courseList.dataset.link !== undefined
				? courseList.dataset.link
				: 'single.html';
		if (area === item.area || area === '') {
			if (category === item.category || category === '') {
				let courseElement = `
					<div class="swiper-slide movie-list__item">
						<a href="${link}">
							<img class="movie-list__item--img" src="${dir + item.src}" alt=""/>
						</a>
						<h2 class="movie-list__item--title">${item.title}</h2>
					</div>
				`;
				courseList.innerHTML += courseElement;
			}
		}
	});
});

if (mainVideo && videoPlaylist) {
	videoData.forEach((video, index) => {
		if (index === 0) {
			let videoElelment = `
			<video
				src="${video.video}"
				loop
				controls
				class="main-video"
			></video>
			<h3 class="main-video-title">${video.title}</h3>
		`;
			mainVideo.innerHTML = videoElelment;
		}
		let videoElement = `
		<div class="list ${index === 0 ? 'active' : ''}">
			<video
				src="${video.video}"
				class="list-video"
			></video>
			<h3 class="list-title">${video.title}</h3>
		</div>
	`;
		videoPlaylist.innerHTML += videoElement;
	});
}

// arrows.forEach((arrow, index) => {
// 	const itemNumber = movieLists[index].querySelectorAll('img').length;
// 	if (itemNumber <= Math.floor(window.innerWidth / 285)) {
// 		arrow.style.display = 'none';
// 	} else {
// 		arrow.style.display = '';
// 	}
// 	let clickCounter = 0;
// 	arrow.addEventListener('click', () => {
// 		const ratio = Math.floor(window.innerWidth / 285);
// 		clickCounter++;
// 		if (itemNumber - (6 + clickCounter) + (6 - ratio) >= 0) {
// 			movieLists[index].style.transform = `translateX(${
// 				movieLists[index].computedStyleMap().get('transform')[0].x
// 					.value - 315
// 			}px)`;
// 		} else {
// 			movieLists[index].style.transform = `translateX(0)`;
// 			clickCounter = 0;
// 		}
// 	});
// });

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

let videoList = document.querySelectorAll('.video-list-container .list');

videoList.forEach((vid) => {
	vid.onclick = () => {
		videoList.forEach((v) => {
			v.classList.remove('active');
		});
		vid.classList.add('active');
		let src = vid.querySelector('.list-video').src;
		let title = vid.querySelector('.list-title').innerHTML;
		document.querySelector('.main-video-container .main-video').src = src;
		document.querySelector('.main-video-container .main-video').play();
		document.querySelector(
			'.main-video-container .main-video-title'
		).innerHTML = title;
	};
});

sliders.forEach((slider, index) => {
	slider.classList.add('movie-list-wrapper-' + index);
	window['swiper' + index] = new Swiper('.movie-list-wrapper-' + index, {
		loop: true,
		grabCursor: true,
		modules: [Navigation],
		navigation: {
			prevEl: '.swiper-button-prev',
			nextEl: '.swiper-button-next',
		},
		autoheight: true,
		breakpoints: {
			600: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			935: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1240: {
				slidesPerView: 4,
				spaceBetween: 20,
			},
			1910: {
				slidesPerView: 6,
				spaceBetween: 25,
			},
		},
	});
});
