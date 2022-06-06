/** @format */

const contactForm = document.querySelector('.contact-container__form-contact');

let fullName = document.getElementById('fullName');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');

contactForm.addEventListener('submit', e => {
	e.preventDefault();

	let formData = {
		fullName: fullName.value,
		email: email.value,
		subject: subject.value,
		message: message.value,
	};
      console.log(formData)
	let xhr = new XMLHttpRequest();
	xhr.open('POST', '/');
	xhr.setRequestHeader('content-type', 'application/json');
	xhr.onload = function () {
		if (xhr.status == 200) {
			alert(xhr.responseText);
			fullName.value = '';
			email.value = '';
			subject.value = '';
			message.value = '';
		} else {
			alert(xhr.responseText);
		}
      };
      console.log('test')
	xhr.send(JSON.stringify(formData));
});
