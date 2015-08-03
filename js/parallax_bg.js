'use strict';

var parallax_bg = (function () {

	querySelectorAll = document.querySelectorAll.bind(document);

	function elementInViewport(el) {

		var elInViewport = false;

		for (var i = el.length - 1; i >= 0; i--) {
			var elThis = el[i];
			var rect = elThis.getBoundingClientRect();

			if (rect.bottom > 0 &&
				rect.right > 0 &&
				rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
				rect.top < (window.innerHeight || document.documentElement.clientHeight)) {
				elInViewport = elThis;
		}
	}

	return elInViewport;
}


if(querySelectorAll('.parallax_bg').length) {

	window.addEventListener('scroll', function() {
		var parallax_bg_visible = elementInViewport(querySelectorAll('.parallax_bg'));

		if(parallax_bg_visible) {
			var speed = 0.55;
			var newBgPosition = parseInt(parallax_bg_visible.getBoundingClientRect().top) * speed;	
			newBgPosition = newBgPosition * (-1);
			parallax_bg_visible.style.backgroundPosition = 'center ' + newBgPosition + 'px';
		}
	});

}

})();