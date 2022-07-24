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

const siteLanguage = document.getElementById('site-language');
const alertMessage = document.querySelector('.alert-message');
let timeHandle;


siteLanguage.addEventListener('change', () => {
	
	alertMessage.classList.add('show-alert-message');

	if (siteLanguage.value === 'French') {
		alertMessage.innerHTML =
			'Cette fonctionnalité sera bientôt disponible !';
	} else if (siteLanguage.value === 'English') {
		alertMessage.innerHTML = 'This feature will be available soon !';
	} else if (siteLanguage.value === 'Arabic') {
		alertMessage.innerText = '! هذه الخاصية ستكون متاحة قريبًا';
	}
	
	clearTimeout(timeHandle);
	timeHandle = setTimeout(() => {
		alertMessage.classList.remove('show-alert-message');
	}, 6000);
	
});

scrollingSpy();
