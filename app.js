// JavaScript Document
const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');


function PageTransitions(){
	// Button click active class
	for(let i = 0; i < sectBtn .length; i++){
		sectBtn[i].addEventListener('Click', function(){
			let currentBtn = document.querySelectAll('.active-btn');
			currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
			this.className += 'active-btn';
		})
	}
}

PageTransitions();