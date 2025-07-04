(function ($) {

"use strict";



$(window).on('load', function () {

	$('#preloader').delay(350).fadeOut('slow');

	$('body').delay(350).css({ 'overflow': 'visible' });

})





// meanmenu

$('#mobile-menu').meanmenu({

	meanMenuContainer: '.mobile-menu',

	meanScreenWidth: "1200"

});



// meanmenu

$('#mobile-menu-3').meanmenu({

	meanMenuContainer: '.mobile-menu',

	meanScreenWidth: "992"

});







// sticky

var wind = $(window);

var sticky = $('#header-sticky');

wind.on('scroll', function () {

	var scroll = wind.scrollTop();

	if (scroll < 300) {

		sticky.removeClass('sticky-header');

	} else {

		sticky.addClass('sticky-header');

	}

});







/* info-bar */

$('.info-bar').on('click', function () {

	$('.extra-info').addClass('info-open');

})



$('.close-icon').on('click', function () {

	$('.extra-info').removeClass('info-open');

})





// data - background

$("[data-background]").each(function () {

	$(this).css("background-image", "url(" + $(this).attr("data-background") + ")")

})





$('.cat-toggle').on('click', function () {

	$('.category-menu').slideToggle(500);

});







// mainSlider

function mainSlider() {

	var BasicSlider = $('.slider-active');

	BasicSlider.on('init', function (e, slick) {

		var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');

		doAnimations($firstAnimatingElements);

	});

	BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {

		var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');

		doAnimations($animatingElements);

	});

	BasicSlider.slick({

		autoplay: false,

		autoplaySpeed: 10000,

		dots: false,

		fade: true,

		prevArrow: '<button type="button" class="slick-prev"> <i class="fas fa-arrow-left"></i> </button>',

		nextArrow: '<button type="button" class="slick-next"> <i class="fas fa-arrow-right"></i></button>',

		arrows: true,

		responsive: [

			{ breakpoint: 767, settings: { dots: false, arrows: false } }

		]

	});



	function doAnimations(elements) {

		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

		elements.each(function () {

			var $this = $(this);

			var $animationDelay = $this.data('delay');

			var $animationType = 'animated ' + $this.data('animation');

			$this.css({

				'animation-delay': $animationDelay,

				'-webkit-animation-delay': $animationDelay

			});

			$this.addClass($animationType).one(animationEndEvents, function () {

				$this.removeClass($animationType);

			});

		});

	}

}

mainSlider();



// mainSlider 5

function mainSlider5() {

	var BasicSlider = $('.slider-active-5');

	BasicSlider.on('init', function (e, slick) {

		var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');

		doAnimations($firstAnimatingElements);

	});

	BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {

		var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');

		doAnimations($animatingElements);

	});

	BasicSlider.slick({

		autoplay: false,

		autoplaySpeed: 10000,

		dots: true,

		fade: true,

		prevArrow: '<button type="button" class="slick-prev"> <i class="fas fa-arrow-left"></i> </button>',

		nextArrow: '<button type="button" class="slick-next"> <i class="fas fa-arrow-right"></i></button>',

		arrows: false,

		responsive: [

			{ breakpoint: 767, settings: { dots: false, arrows: false } }

		]

	});



	function doAnimations(elements) {

		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

		elements.each(function () {

			var $this = $(this);

			var $animationDelay = $this.data('delay');

			var $animationType = 'animated ' + $this.data('animation');

			$this.css({

				'animation-delay': $animationDelay,

				'-webkit-animation-delay': $animationDelay

			});

			$this.addClass($animationType).one(animationEndEvents, function () {

				$this.removeClass($animationType);

			});

		});

	}

}

mainSlider5();







// blog - active

$('.basic').slick({

	dots: false,

	arrows: true,

	infinite: true,

	speed: 300,

	prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',

	nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',

	slidesToShow: 4,

	slidesToScroll: 1,

	responsive: [

		{

			breakpoint: 1024,

			settings: {

				slidesToShow: 3,

				slidesToScroll: 1,

				infinite: true,

			}

		},

		{

			breakpoint: 991,

			settings: {

				slidesToShow: 3,

				slidesToScroll: 1

			}

		},

		{

			breakpoint: 480,

			settings: {

				slidesToShow: 1,

				slidesToScroll: 1

			}

		}

	]

});





// owlCarousel

$('.product-slider').owlCarousel({

    loop:true,

    margin:30,

	items:4,

	navText: ['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],

    nav:true,

	dots:false,

    responsive:{

        0:{

			items:1,

			nav: false

        },

        768:{

            items:2

        },

        992:{

            items:3

        },

        1200:{

            items:4

        }

    }

})



// owlCarousel

$('.product-slider-2').owlCarousel({

    loop:true,

    margin:30,

	items:3,

	navText: ['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],

    nav:true,

	dots:false,

    responsive:{

        0:{

			items:1,

			nav: false

        },

        768:{

            items:2

        },

        992:{

            items:3

        },

        1200:{

            items:3

        }

    }

})



// owlCarousel

	$('.instagram-active').owlCarousel({

    loop:true,

    margin:0,

	items:6,

	navText: ['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],

    nav:false,

	dots:false,

    responsive:{

        0:{

			items:2

        },

        768:{

            items:3

        },

        992:{

            items:4

        },

        1200:{

            items:6

        }

    }

})





$('.testimonial-active').owlCarousel({

	loop: true,

	items: 1,

	navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],

	nav: false,

	autoplay: true,

	dots: false,

	responsive: {

		0: {

			items: 1

		},

		767: {

			items: 1

		},

		992: {

			items: 1

		}

	}

})



// blog - active

$('.postbox__gallery').slick({

	dots: false,

	arrows: true,

	infinite: true,

	speed: 300,

	prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',

	nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',

	slidesToShow: 1,

	slidesToScroll: 1,

	responsive: [

		{

			breakpoint: 1024,

			settings: {

				slidesToShow: 1,

				slidesToScroll: 1,

				infinite: true,

			}

		},

		{

			breakpoint: 991,

			settings: {

				slidesToShow: 1,

				slidesToScroll: 1

			}

		},

		{

			breakpoint: 480,

			settings: {

				slidesToShow: 1,

				slidesToScroll: 1

			}

		}

	]

});







/* magnificPopup img view */

$('.popup-image').magnificPopup({

	type: 'image',

	gallery: {

	  enabled: true

	}

});



/* magnificPopup video view */

$('.popup-video').magnificPopup({

	type: 'iframe'

});







// isotop

$('.blog-masonry').imagesLoaded(function () {

	// init Isotope

	var $grid = $('.blog-masonry').isotope({

		itemSelector: '.grid-item',

		percentPosition: true,

		masonry: {

			// use outer width of grid-sizer for columnWidth

			columnWidth: '.grid-item',

		}

	});

});



// isotop

$('.grid').imagesLoaded( function() {

	// init Isotope

	var $grid = $('.grid').isotope({

	  itemSelector: '.grid-item',

	  percentPosition: true,

	  masonry: {

		// use outer width of grid-sizer for columnWidth

		columnWidth: '.grid-item',

	  }

	});

});



// filter items on button click

$('.portfolio-menu').on( 'click', 'button', function() {

  var filterValue = $(this).attr('data-filter');

  $grid.isotope({ filter: filterValue });

});



//for menu active class

$('.portfolio-menu button').on('click', function(event) {

	$(this).siblings('.active').removeClass('active');

	$(this).addClass('active');

	event.preventDefault();

});









// scrollToTop

$.scrollUp({

	scrollName: 'scrollUp', // Element ID

	topDistance: '300', // Distance from top before showing element (px)

	topSpeed: 300, // Speed back to top (ms)

	animation: 'fade', // Fade, slide, none

	animationInSpeed: 200, // Animation in speed (ms)

	animationOutSpeed: 200, // Animation out speed (ms)

	scrollText: '<i class="fas fa-arrow-up"></i>', // Text for element

	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'

});



// WOW active

new WOW().init();





// countdown

$('[data-countdown]').each(function () {

	var $this = $(this), finalDate = $(this).data('countdown');

	$this.countdown(finalDate, function (event) {

		$this.html(event.strftime('<span class="cdown days"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hour</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Min</p></span> <span class="cdown second"> <span><span class="time-count">%S</span> <p>Sec</p></span>'));

	});

});





/* Search

-------------------------------------------------------*/

var $searchWrap = $('.search-wrap');

var $navSearch = $('.nav-search');

var $searchClose = $('#search-close');



$('.search-trigger').on('click', function (e) {

	e.preventDefault();

	$searchWrap.animate({ opacity: 'toggle' }, 500);

	$navSearch.add($searchClose).addClass("open");

});



$('.search-close').on('click', function (e) {

	e.preventDefault();

	$searchWrap.animate({ opacity: 'toggle' }, 500);

	$navSearch.add($searchClose).removeClass("open");

});



function closeSearch() {

	$searchWrap.fadeOut(200);

	$navSearch.add($searchClose).removeClass("open");

}



$(document.body).on('click', function (e) {

	closeSearch();

});



$(".search-trigger, .main-search-input").on('click', function (e) {

	e.stopPropagation();

});



/* Price filter active */

if ($("#slider-range").length) {

	$("#slider-range").slider({

		range: true,

		min: 0,

		max: 500,

		values: [75, 300],

		slide: function (event, ui) {

			$("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);

		}

	});

	$("#amount").val("$" + $("#slider-range").slider("values", 0) +

		" - $" + $("#slider-range").slider("values", 1));





	$('#filter-btn').on('click', function () {

		$('.filter-widget').slideToggle(1000);

	});



}







/*----- cart-plus-minus-button -----*/

$(".cart-plus-minus").append('<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>');

$(".qtybutton").on("click", function () {

	var $button = $(this);

	var oldValue = $button.parent().find("input").val();

	if ($button.text() == "+") {

		var newVal = parseFloat(oldValue) + 1;

	} else {

		// Don't allow decrementing below zero

		if (oldValue > 0) {

			var newVal = parseFloat(oldValue) - 1;

		} else {

			newVal = 0;

		}

	}

	$button.parent().find("input").val(newVal);

});





/*-------------------------

	showlogin toggle function

--------------------------*/

$('#showlogin').on('click', function () {

	$('#checkout-login').slideToggle(900);

});



/*-------------------------

	showcoupon toggle function

--------------------------*/

$('#showcoupon').on('click', function () {

	$('#checkout_coupon').slideToggle(900);

});



/*-------------------------

	Create an account toggle function

--------------------------*/

$('#cbox').on('click', function () {

	$('#cbox_info').slideToggle(900);

});



/*-------------------------

	Create an account toggle function

--------------------------*/

$('#ship-box').on('click', function () {

	$('#ship-box-info').slideToggle(1000);

});



	// map

	function basicmap() {

		// Basic options for a simple Google Map

		// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions

		var mapOptions = {

			// How zoomed in you want the map to start at (always required)

			zoom: 15,

			scrollwheel: false,

			// The latitude and longitude to center the map (always required)

			center: new google.maps.LatLng(-1.923588, 30.070655), // New York

			// This is where you would paste any style found on Snazzy Maps.

			styles: [{ "stylers": [{ "hue": "#dd0d0d" }] }, { "featureType": "road", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "lightness": 100 }, { "visibility": "simplified" }] }]

		};

		// Get the HTML DOM element that will contain your map

		// We are using a div with id="map" seen below in the <body>

		var mapElement = document.getElementById('contact-map');



		// Create the Google Map using our element and options defined above

		var map = new google.maps.Map(mapElement, mapOptions);



		// Let's also add a marker while we're at it

		var marker = new google.maps.Marker({

			position: new google.maps.LatLng(-1.923588, 30.070655),

			map: map,

			title: 'Cryptox'

		});

	}

	if ($('#contact-map').length != 0) {

		google.maps.event.addDomListener(window, 'load', basicmap);

	}







})(jQuery);