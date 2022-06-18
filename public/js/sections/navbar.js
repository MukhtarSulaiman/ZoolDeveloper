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
	if (lang === 'French') {
		alert("Cette fonctionnalité sera bientôt disponible !");
	} else if (lang === 'English') {
		alert('This feature will be available soon !');
	} else if (lang === 'Arabic') {
		alert("هذه الخاصية ستكون متاحة قريبًا !");
	}
}

scrollingSpy();