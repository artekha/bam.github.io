'use strict';

// Slider
$(function(){
	$('.slides').slidesjs({
		width: 1082,
		height: 458,
		play: {
			active: true,
			auto: true,
			interval: 4000,
			swap: false
		}
	});
});