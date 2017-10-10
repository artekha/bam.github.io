'use strict';

class Popup {
	constructor(options) {
		this.links = options.links;
		this.overlay = options.overlay;

		this.popup = this.overlay.querySelectorAll('.popup');
		this.close = this.overlay.querySelectorAll('.popup__close');

		// Show event
		for(let link of this.links) {
			link.addEventListener('click', this.show.bind(this));
		}

		// Escape event
		for(let escape of this.close) {
			escape.addEventListener('click', this.escape.bind(this));
		}

		// Escape for overlay
		this.overlay.addEventListener('click', this.escapeOverlay.bind(this));
	}
	show(event) {
		event.preventDefault();

		// Define popup
		let target = event.currentTarget,
				id = target.getAttribute('href').slice(1),
				popup = document.getElementById(id);

		// Show popup
		document.body.style.overflowY = 'hidden';

		this.overlay.classList.add('popup-overlay_show');
		popup.classList.add('popup_show');
	}
	escape(event) {
		event.preventDefault();

		// Hide popup
		document.body.style.overflowY = '';
		this.overlay.classList.remove('popup-overlay_show');

		for(let popup of this.popup) {
			popup.classList.remove('popup_show');
		}
	}
	escapeOverlay(event) {
		let target = event.target;

		if(target != this.overlay) return;

		// Hide popup
		document.body.style.overflowY = '';
		this.overlay.classList.remove('popup-overlay_show');

		for(let popup of this.popup) {
			popup.classList.remove('popup_show');
		}
	}
}

// Popup
let popup = new Popup({
	links: document.querySelectorAll('.popup-link'),
	overlay: document.querySelector('.popup-overlay')
});