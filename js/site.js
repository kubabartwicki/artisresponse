var Site = {
	init: function() {
		

		function centerContainer() {
			var canvasContainer = $('.canvas-container'),
				headerWidth = $('header').height();
			canvasContainer.css('left', headerWidth);
		}

		centerContainer();
		$(window).resize(function() { centerContainer(); });

		var currentElement = $('#timeline-current');
		$('html, body').animate({
		    scrollTop: currentElement.offset().top - $(window).height()/2 + currentElement.height()/2,
		    scrollLeft: currentElement.offset().left
		}, 1);

	}
}

$(document).ready(function() {
	Site.init();
})