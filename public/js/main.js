/** @format */

const cursor1 = document.querySelector('.cursor1');
const cursor2 = document.querySelector('.cursor2');
const cursors = document.querySelectorAll('.cursor');
const elements = document.querySelectorAll(
	`a, button, p, 
	.skills-container__content,
	.nav-item-mode-switch,
	.nav-item-lang`
);

elements.forEach(element => {
	element.addEventListener('mouseover', function () {
		if (element.matches('p')) {
			cursor1.classList.add('expand-cursor');
		} else {
			cursors.forEach(cursor => {
				// console.log(cursor);
				cursor.classList.add('remove-cursor');
			});
		}
	});
});

elements.forEach(element => {
	element.addEventListener('mouseleave', function () {
		cursors.forEach(cursor => {
			if (element.matches('p')) {
				cursor1.classList.remove('expand-cursor');
			} else {
				cursor.classList.remove('remove-cursor');
			}
		});
	});
});

document.addEventListener('mousemove', e => {
	const cursor1 = document.querySelector('.cursor1');
	const cursor2 = document.querySelector('.cursor2');
	cursor1.style.cssText = cursor2.style.cssText = `${
		'left:' + e.clientX + 'px; top: ' + e.clientY + 'px;'
	}`;
});

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

document.querySelector('footer>small>span').innerText =
	new Date().getFullYear();

const selectors = document.querySelectorAll(
	`.portfolio-container__project, 
	.skills-container__content,
	.lang-progress-bar,
	.discription-wrapper`
);

const observer = new IntersectionObserver(
	enteries => {
		enteries.forEach(entery => {
			entery.target.classList.toggle('show', entery.isIntersecting);
			if (entery.target.classList == 'lang-progress-bar show') {
				// This function is declared in the .section/main.js file
				animateProgressCircles();
			}
		});
	},
	{
		threshold: 0.3,
	}
);

selectors.forEach(selector => {
	observer.observe(selector);
});
