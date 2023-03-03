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
	// Sections Active Class
	allSections.addEventListener('Click', (e) =>{
		const id = e.target.dataset.id;
		if(id){
			// Remove selected from the other buttons
			sectBtns.forEach((btn) =>{
				btn.classList.remove('active')
			})
			e.target.classList.add('active')
			
			// Hide other sections
			sections.forEach((section) =>{
				sect.classList.remove('active')
			})
			
			const element = document.getElementById(id);
			element.classList.add('active');
		}
	})
}

PageTransitions();