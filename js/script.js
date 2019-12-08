$(document).ready(function(){
	$('.filter_buts>.but').on('click', function(e){
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
});