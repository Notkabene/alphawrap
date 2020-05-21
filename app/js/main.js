//~~~~~~~
$(function(){

  $('.logo').click(function(){
    $('.logos__item').toggleClass('click-animated');
  });

  $('.navigation__btn').click(function () {
    $('.navigation__menu').toggleClass('active');
    $('.menu__list').toggleClass('active');
  });

  $('.btn-close').click(function () {
    $('.navigation__menu').removeClass('active');
    $('.menu__list').removeClass('active');
  });

  $('.burger').click(function () {
    $('.menu__list').toggleClass('active');
    $('.burger').toggleClass('active');
  });

  //~~~~~~~ Полноэкранный режим
  $('#fullpage').fullpage({
    licenseKey: 'C4198C2E-BF8F4FE3-B535FFC1-A0D1CBFC',
    sectionsColor: ['#000'],
    responsiveWidth: 1023,
    responsiveHeight: 767
  });

  $(function up () {
    $('#btn-up').on('click', function () {
      $('html,body').animate({
        scrollButton: $('.header__img').offset().bottom + "px"
      }, {
        duration: 2000
      });
    });
  });


  // //~~~~~~~ Плавная прокрутка до блока
  // $('#link-manufacture').on('click', function () {
  //   $('html,body').animate({
  //     scrollTop: $('.manufacture').offset().top + "px"
  //   }, {
  //     duration: 2000
  //   });
  // });

  // $('#link-footer').on('click', function () {
  //   $('html,body').animate({
  //     scrollTop: $('.footer').offset().top + "px"
  //   }, {
  //     duration: 2000
  //   });
  // });


  $().fancybox({

  });

});

/**
 * Infinite Scroll + Masonry + ImagesLoaded
 */
$(function() {

	// Main content container
	var $container = $('.gallery__wrapper');

	// Masonry + ImagesLoaded
	$container.imagesLoaded(function(){
		$container.masonry({
			// selector for entry content
      itemSelector: '.gallery__item',
      singleMode: false,
      isResizable: true,
      isFitWidth: true,
      gutter: 20,
      isAnimated: true,
          animationOptions: {
          queue: false,
          duration: 500
	  }

		});
	});

	// Infinite Scroll
	$container.infinitescroll({

		// selector for the paged navigation (it will be hidden)
		navSelector  : ".navigation",
		// selector for the NEXT link (to page 2)
		nextSelector : ".nav-previous a",
		// selector for all items you'll retrieve
		itemSelector : ".gallery__item",

		// finished message
		loading: {
			finishedMsg: 'No more pages to load.'
			}
		},

		// Trigger Masonry as a callback
		function( newElements ) {
			// hide new items while they are loading
			var $newElems = $( newElements ).css({ opacity: 0 });
			// ensure that images load before adding to masonry layout
			$newElems.imagesLoaded(function(){
				// show elems now they're ready
				$newElems.animate({ opacity: 1 });
				$container.masonry( 'appended', $newElems, true );
			});

	});

})();
