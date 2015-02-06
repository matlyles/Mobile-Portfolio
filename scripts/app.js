var DWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;

$(document).ready(function(){
	
	setTimeout(function(){
			$('.spinner').hide();
			$('.page.home-page').show();
		}, 2000);
	

	window.scrollTo(0, 1);
	var triggerEvent= "click"; // touchend for mobile device, click for normal web browser

	var snapper = new Snap({
	  element: document.getElementById('content')
	});

	$( '.swipebox' ).swipebox({
		// hideBarsOnMobile : false
	});
	
	// Side Menu

	$('.deploy-sidebar, .page-header, .close-icon').on(triggerEvent,function(e){
		if( snapper.state().state=="left" ){
			snapper.close();		
		} else {
			snapper.open('left');
		}
		return false;
	});
	
	// Change Page

	var newSec;
	var newTitle;

	$('.nav-item, .welcome').on(triggerEvent,function(e){
		
		newSec = '#' + $(this).attr('rel');
		newTitle = $(this).attr('title');

		$('.page').hide();

		window.scrollTo(0, 1);
		$('.spinner').show();
		
		setTimeout(function(){
			$('.spinner').hide();
			$(newSec).show();
		}, 1000);
		
		//$(newSec).show();

		$('h1.name').text(newTitle);

		$('.nav-item').removeClass('selected');
		$(this).addClass('selected');

		snapper.close();


	});
	

	setTimeout(function() {
	      $('li.ux').addClass('show');
	}, 400);
	setTimeout(function() {
	      $('li.ui').addClass('show');
	}, 700);
	setTimeout(function() {
	      $('li.vsd').addClass('show');
	}, 1000);
	setTimeout(function() {
	      $('li.dev').addClass('show');
	}, 1300);

	
	
});




