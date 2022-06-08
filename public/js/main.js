/** @format */

const sunIcon = document.getElementById('sun');
const moonIcon = document.getElementById('moon');
const menuIcon = document.querySelector('.navbar');
const darkModeToggle = document.querySelector('.dark-mode-toggle');
let darkMode = localStorage.getItem('darkMode');

// Disable dark mode
const disableDarkMode = () => {
	document.body.classList.add('white');
	sunIcon.style.display = 'none';
	moonIcon.style.display = 'block';
	menuIcon.classList.remove('navbar-dark');
	menuIcon.classList.add('navbar-light');
	localStorage.setItem('darkMode', 'disabled');
};

// Enable dark mode
const enableDarkMode = () => {
	document.body.classList.remove('white');
	sunIcon.style.display = 'block';
	moonIcon.style.display = 'none';
	menuIcon.classList.remove('navbar-light');
	menuIcon.classList.add('navbar-dark');
	localStorage.setItem('darkMode', 'enabled');
};

if (darkMode === 'disabled') {
	disableDarkMode();
}

// Checks if dark mode is disabled or not
darkModeToggle.addEventListener('click', () => {
	darkMode = localStorage.getItem('darkMode');
	if (darkMode !== 'disabled') {
		disableDarkMode();
	} else {
		enableDarkMode();
	}
});

// Downloads the resume
function download(fileUrl, fileName) {
	let a = document.createElement('a');
	a.href = fileUrl;
	a.setAttribute('download', fileName);
	a.click();
}


document.querySelector("footer>small>span").innerText = new Date().getFullYear();


const selectors = document.querySelectorAll(
	`.portfolio-container__project, 
	.skills-container__content,
	.lang-progress-bar,
	.discription-wrapper`
);

const observer = new IntersectionObserver(enteries => {
	enteries.forEach(entery => {
		entery.target.classList.toggle('show', entery.isIntersecting);
		if (entery.target.classList == 'lang-progress-bar show') {
			// This function is declared in the .section/main.js file
			animateProgressCircles();
		}
	})
}, {
	threshold: .3
});

selectors.forEach(selector => {
	observer.observe(selector);
});
