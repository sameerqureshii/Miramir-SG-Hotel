(function($) {
	'use strict';
	$(function() {
		$('.owl-carousel-projects').owlCarousel({
			loop: true,
			stagePadding: 100,
			margin: 20,
			nav: false,
			responsive: {
				0: {
					items: 2
				},
				600: {
					items: 3
				},
				1000: {
					items: 4
				}
			}
		})
	
	

	});
})(jQuery);