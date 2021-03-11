

/* navigation menu animation with way points */

$('.nav-animate').waypoint(function(direction) {
	$('.secondary-menu').toggleClass('hide', direction === "down");
	$('.navbar').toggleClass('comeup', direction === "down");
}, {
	offset: '10%'
});

// Block scrolling
	
$('.nav li a').bind('click', function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 992);
		if($(window).width() < 992){
			var $navMain = $(".navbar-collapse");
			$navMain.collapse('hide');
		}
		e.preventDefault();
});


/* *************************************** */
// One page navigation 
/* *************************************** */

$('.nav').onePageNav({
    currentClass: 'active',
    changeHash: true,
    scrollSpeed: 1000,
    scrollThreshold: 0.1
});

// Block scrolling
	
$('.nav a').bind('click', function(e){
		if($(window).width() < 992){
			var $navMain = $(".navbar-collapse");
			$navMain.collapse('hide');
		}
		e.preventDefault();
});


/* tool-tip initialize */

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});


/* Scroll to Top */  

$(".totop").hide();
$(function(){
	$(window).scroll(function(){
		if ($(this).scrollTop()>300)
		{
			$('.totop').fadeIn();
		} 
		else
		{
			$('.totop').fadeOut();
		}
	});

	$('.totop a').click(function (e) {
		e.preventDefault();
		$('body,html').animate({scrollTop: 0}, 1200);
	});

});