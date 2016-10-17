$( document ).ready(function(){
	'use strict';

  $('.element').typed({
      strings: ['All the benefits of <br>a Private Cloud ^1000<br>without the headaches^1500', 'All the benefits of <br>a Private Cloud ^1000<br>without the cost^1500'],
      typeSpeed: 0,
      cursorChar: '_'
  });

  /**
	 * Listen to scroll to change header opacity class
	 */
	function checkScroll(){
	    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

	    if($(window).scrollTop() > startY){
	        $('.navbar').addClass("scrolled");
	    }else{
	        $('.navbar').removeClass("scrolled");
	    }
	}

	if($('.navbar').length > 0){
	    $(window).on("scroll load resize", function(){
	        checkScroll();
	    });
	}

});
