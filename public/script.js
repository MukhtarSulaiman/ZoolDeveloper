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

// Animates navbar borders while scrolling
const scrollingSpy = () => {
	const sections = document.querySelectorAll('section');
	window.onscroll = () => {
		const scrollNum = document.documentElement.scrollTop || document.body.scrollTop;
		for (let section in sections) {
			
			if (sections.hasOwnProperty(section) && sections[section].offsetTop - 100 <= scrollNum) {
				const id = sections[section].id;
				document.querySelector('.active').classList.remove('active');
				document.querySelector( `a[href*=${ id }]` ).parentNode.classList.add( 'active' );
			}
		}
	} 
}
scrollingSpy();

// Downloads the resume
function download(fileUrl, fileName) {
	let a = document.createElement('a');
	a.href = fileUrl;
	a.setAttribute('download', fileName);
	a.click();
}

// Languages circular and progress bar values
const progressBarCircular1 = document.getElementById('circular1');
const progressBarCircular2 = document.getElementById('circular2');
const progressBarCircular3 = document.getElementById('circular3');

const progressValueOne = document.querySelector('.progress-value-one');
const progressValueTwo = document.querySelector('.progress-value-two');
const progressValueThree = document.querySelector('.progress-value-three');

let progressValue1 = 0;
let progressValue2 = 0;
let progressValue3 = 0;

let progressEndValue1 = 70;
let progressEndValue2 = 85;
let progressEndValue3 = 100;

const speed = 20;

// progress circular bar 1
const progressOne = setInterval(() => {
	progressValue1++;
	progressValueOne.textContent = `${progressValue1}%`;
	progressBarCircular1.style.background = `conic-gradient(
        #BE2E73 ${progressValue1 * 3.6}deg,
        #000 ${progressValue1 * 3.6}deg
    )`;
	if (progressValue1 === progressEndValue1) {
		clearInterval(progressOne);
	}
}, speed);

// progress circular bar 2
const progressTwo = setInterval(() => {
	progressValue2++;
	progressValueTwo.textContent = `${progressValue2}%`;
	progressBarCircular2.style.background = `conic-gradient(
        #BE2E73 ${progressValue2 * 3.6}deg,
        #000 ${progressValue2 * 3.6}deg
    )`;
	if (progressValue2 === progressEndValue2) {
		clearInterval(progressTwo);
	}
}, speed);

// progress circular bar 3
const progressThree = setInterval(() => {
	progressValue3++;
	progressValueThree.textContent = `${progressValue3}%`;
	progressBarCircular3.style.background = `conic-gradient(
        #BE2E73 ${progressValue3 * 3.6}deg,
        #000 ${progressValue3 * 3.6}deg
    )`;
	if (progressValue3 === progressEndValue3) {
		clearInterval(progressThree);
	}
}, speed);


document.querySelector("footer>small>span").innerText = new Date().getFullYear();


const contactForm = document.querySelector(".contact-container__form-contact");

let fullName = document.getElementById("fullName");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");

contactForm.addEventListener('submit', (e) => {
	e.preventDefault();

	let formData = {
		fullName: fullName.value,
		email: email.value,
		subject: subject.value,
		message: message.value
	}

	let xhr = new XMLHttpRequest();
	xhr.open("POST", "/")
	xhr.setRequestHeader("content-type", "application/json");
	xhr.onload = function () {
		if (xhr.status == 200) {
			alert(xhr.responseText)	
			fullName.value = '';
			email.value = '';
			subject.value = '';
			message.value = '';
		} else {
			alert(xhr.responseText)
		}
	}
	xhr.send(JSON.stringify(formData));
});