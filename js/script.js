$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$(document).ready(function() {
	$('.slider').slick({
		arrows:true,
		dots:true,
		infinite: true,
		speed:750,
		autoplay:true,
		autoplaySpeed:2500,
		easing:'ease'
	});
});