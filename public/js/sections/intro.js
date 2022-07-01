/** @format */

const btnReadMore = document.getElementById('btn-read-more');
btnReadMore.childNodes[0].nodeValue = "Plus d'info";

btnReadMore.addEventListener('click', () => {
	const toggleClass = document.querySelector('.intro-section__description-container');
	const arrowIcon = btnReadMore.childNodes[1];
	toggleClass.classList.toggle('active');

	if (toggleClass.classList.contains('active')) {
		btnReadMore.childNodes[0].nodeValue = "Moins d'info";
		arrowIcon.classList.remove('fa-arrow-right');
		arrowIcon.classList.add('fa-arrow-left');
		
	} else {
		btnReadMore.childNodes[0].nodeValue = "Plus d'info";
		arrowIcon.classList.add('fa-arrow-right');
		arrowIcon.classList.remove('fa-arrow-left');
	}
});
