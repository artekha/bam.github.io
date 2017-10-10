'use strict';

// Gallery
;(function() {

	var image = document.querySelector('.img-general');
	var previews = document.querySelectorAll('.goods-previews__item');

	for(var i = 0; i < previews.length; i++) {
		previews[i].addEventListener('click', changeImg);
	}

	function changeImg(event) {
		event.preventDefault();

		var target = event.currentTarget;

		// Check
		if(target.classList.contains('goods-previews__item_active')) return false;

		var src = target.getAttribute('href'); // Get src

		image.setAttribute('src', src); // Set src
		image.closest('.goods-image').setAttribute('href', src); // Set href

		// Change active element
		for(var i = 0; i < previews.length; i++) {
			previews[i].classList.remove('goods-previews__item_active');
		}
		target.classList.add('goods-previews__item_active');
	}

}());