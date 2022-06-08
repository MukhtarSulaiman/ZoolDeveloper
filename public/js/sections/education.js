/** @format */

// Languages circular and progress bar values
const progressBarCircular1 = document.getElementById('circular1');
const progressBarCircular2 = document.getElementById('circular2');
const progressBarCircular3 = document.getElementById('circular3');

const progressValueOne = document.querySelector('.progress-value-one');
const progressValueTwo = document.querySelector('.progress-value-two');
const progressValueThree = document.querySelector('.progress-value-three');


// This function is called from the main.js file
function animateProgressCircles() {

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
}