$(document).ready(function(){
	$('.filter_buts>.but').on('click', function(e){
	    AOS.init();
	    
		//change active button
		$(this).parent().find('.but_active').removeClass('but_active');
		$(this).addClass('but_active');

		let b_id = +$(this).attr('data-type');

		$('.filter_items>*').each(function(){
			if(!$(this).hasClass('filter_hide')){
				$(this).fadeOut(300);
				$(this).addClass('filter_hide');
			}
		}).delay(300).each(
				function(){
					if((b_id == 0 || b_id == $(this).attr('data-type')) && ($(this).hasClass('filter_hide'))){
						$(this).fadeIn(300);
						$(this).removeClass('filter_hide');
					}
				});
	});


	$('.team__slider').slick({
		dots: true,
		arrows: false,
  		infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		dotsClass: 'dots-style'
	});

	$('.burger').on('click', function(){
		$(this).toggleClass('burger-active');
		
		AOS.init();
	});

	$(document).on('scroll', function(e){
		if(pageYOffset < 1500)
			$('#top').addClass('hide');
		else
			$('#top').removeClass('hide');
	});

	$('#top').on('click', function(){
		$('html, body').animate({
			scrollTop: 0
		}, 300);
	});

	$('.menu a').on('click', function(){
		$('html, body').animate({
			scrollTop: $(this.getAttribute('href')).offset().top
		}, +$(this).attr('data-delay'));

		return false;
	});

	AOS.init();

});