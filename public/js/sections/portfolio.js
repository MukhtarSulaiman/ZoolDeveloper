/** @format */

const projects = document.querySelectorAll('.portfolio-container__project');

for (let i = 0; i < projects.length; i++) {
	projects[i].addEventListener('mouseover', () => {
		if (window.innerWidth > 992) {
			projects[i].children[2].children[2].classList.add('show-links');
		} 
	});

	projects[i].addEventListener('mouseleave', () => {
		projects[i].children[2].children[2].classList.remove('show-links');
	});
}
