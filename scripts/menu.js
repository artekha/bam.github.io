'use strict';

// Menu
;(function() {

	var menu = document.querySelector('.menu');
	var toggler = document.querySelector('.nav__menu');

	toggler.addEventListener('click', toggleMenu);

	function toggleMenu() {
		toggler.innerHTML = 
		menu.classList.contains('menu_show') ? 
		'Меню' : 
		'Скрыть';

		menu.classList.toggle('menu_show');
	}

}());