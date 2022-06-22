/** @format */

// Animates navbar borders while scrolling
const scrollingSpy = () => {
	const sections = document.querySelectorAll('section');
	window.onscroll = () => {
		const scrollNum =
			document.documentElement.scrollTop || document.body.scrollTop;
		for (let section in sections) {
			if (
				sections.hasOwnProperty(section) &&
				sections[section].offsetTop - 100 <= scrollNum
			) {
				const id = sections[section].id;
				document
					.querySelector('.active')
					.classList.remove('active');
				document
					.querySelector(`a[href*=${id}]`)
					.parentNode.classList.add('active');
			}
		}
	};
};


function changeLanguage(lang) {
	const alertMessage = document.querySelector('.alert-message');
	alertMessage.classList.add('show-alert-message');

	if (lang === 'French') {
		alertMessage.innerHTML = 'Cette fonctionnalité sera bientôt disponible !';
	} else if (lang === 'English') {
		alertMessage.innerHTML= 'This feature will be available soon !';
	} else if (lang === 'Arabic') {
		alertMessage.innerText = "! هذه الخاصية ستكون متاحة قريبًا";
	}

	setTimeout(() => {
		alertMessage.classList.remove('show-alert-message');
	}, 6000);
}

scrollingSpy();