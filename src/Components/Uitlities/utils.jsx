export function Swap(x, y) {
	const temp = x.style.height;
	x.style.height = y.style.height;
	y.style.height = x = temp;
}

export function MakeDelay(milisec) {
	return new Promise(resolve => {
		setTimeout(() => { resolve('') }, milisec);
	})
}

export var delay = 50;
export const PRIMARY_COLOR = 'rgb(99, 156, 255)'; //light blue
export const FINAL_COLOR = 'rgb(50,205,50)'; //green
export const POSITION_FINAL_COLOR = 'rgb(183, 51, 245)'; //purple
export const COMPARE_COLOR = 'blue'; //dark blue
export const SWAP_COLOR = 'red';
export const MIN_COLOR = 'rgb(255, 112, 31)' //orange-ish

export function randomNumberFrom(l, r) {
	return Math.floor(Math.random() * (l - r + 1) + r) //generates random number between l and r both inclusive
}

export function disableAllButtons(val) {
	document.getElementById('rangeSlider').disabled = val;
	var btns = document.querySelectorAll(".btn")
	for (var i = 0; i < btns.length; i++) {
		btns[i].disabled = val;
	}
}

export function changeDelay(val) {
	delay = val;
}