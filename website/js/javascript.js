$(document).ready(function () {

	function slideNav() {
		$('.navItems').slideToggle();
		$('.mainNav').css("padding-bottom", "20px");
	};

	$('#menuButton').click(function(){
		slideNav();
	});


});