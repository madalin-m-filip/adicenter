$(document).ready(function(){
	$('.push-msg img').on('click', function(){
		$('.push-msg').slideUp(250);
	});
});

$(document).ready(function(){
	$('#menu-button').click(function(){
		$('.header-wrap .nav').slideToggle();
		$(this).toggleClass('close-icon');
	});
});