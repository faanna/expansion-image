const panel = document.querySelectorAll('.panel');

panel.forEach((el, index) => {
	el.addEventListener('click', (e) => {
		for (let el of panel) el.classList.remove('on');
		el.classList.add('on');
	});
});

// for (let i = 0; i < panel.length; i++) {
// 	panel[i].addEventListener('click', (e) => {
// 		for (let el of panel) el.classList.remove('on');
// 		panel[i].classList.add('on');
// 	});
// }
