/** @format */
const formContact = document.querySelector('.contact-container__form-contact');

let fullName = document.getElementById('fullName');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');

formContact.addEventListener('submit', e => {
	e.preventDefault();

	checkInputs();
});

function checkInputs() {
	const emptyErrorMsg = 'Champ est requis !';
	const formData = {
		fullNameValue: fullName.value.trim(),
		emailValue: email.value.trim(),
		subjectValue: subject.value.trim(),
		messageValue: message.value.trim(),
	};

	if (formData.fullNameValue === '') {
		setErrorFor(fullName, emptyErrorMsg);
	} else if (!isLetters(formData.fullNameValue)) {
		setErrorFor(fullName, 'Champ doit uniquement contenir des lettres !');
	} else if (formData.fullNameValue.length < 3) {
		setErrorFor(fullName, 'Minimum 3 Lettres');
	} else {
		setSuccessFor(fullName);
	}

	if (formData.emailValue === '') {
		setErrorFor(email, emptyErrorMsg);
	} else if (!isEmail(formData.emailValue)) {
		setErrorFor(email, "E-mail n'est pas valide !");
	} else {
		setSuccessFor(email);
	}

	if (formData.subjectValue === '') {
		setErrorFor(subject, emptyErrorMsg);
	} else if (formData.subjectValue.length < 3) {
		setErrorFor(subject, 'Minimum 3 Caractères');
	} else {
		setSuccessFor(subject);
	}

	if (formData.messageValue === '') {
		setErrorFor(message, emptyErrorMsg);
	} else if (formData.messageValue.split(' ').length < 5) {
		setErrorFor(message, 'Exprimez votre message en quelques mots !');
	} else {
		setSuccessFor(message);
	}

	if (
		formData.fullNameValue &&
		formData.emailValue &&
		formData.subjectValue &&
		formData.messageValue !== '' &&
		isLetters(formData.fullNameValue) &&
		isEmail(formData.emailValue) &&
		formData.fullNameValue.length >= 3 &&
		formData.subjectValue.length >= 3 &&
		formData.messageValue.split(' ').length >= 5
	) {
		getFormInputValues(formData);
	}
}

function setErrorFor(input, message) {
	const formGroup = input.parentElement;
	const small = formGroup.querySelector('small');

	small.innerText = message;
	small.classList.add('error');
}

function setSuccessFor(input) {
	const formGroup = input.parentElement;
	const small = formGroup.querySelector('small');
	small.classList.remove('error');
	small.classList.add('success');
}

function isLetters(letter) {
	return /[a-zA-Z-âãäåæçèéêëìíîïðñòóôõøùúûüýþÿı]/.test(letter);
}

function isEmail(email) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

function getFormInputValues(formData) {
	formContact.firstElementChild.classList.add('loader');

	let xhr = new XMLHttpRequest();
	xhr.open('POST', '/');
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.onload = function () {
		if (xhr.status == 200) {
			alert(xhr.responseText);
			fullName.value = '';
			email.value = '';
			subject.value = '';
			message.value = '';

			formContact.firstElementChild.classList.remove('loader');
		} else {
			alert(xhr.responseText);
		}
	};
	xhr.send(JSON.stringify(formData));
}
