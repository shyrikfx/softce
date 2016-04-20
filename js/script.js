jQuery(function($){
	var $block = $('.block');
	var $bgBlock = $('.bg-block');
	var $form = $bgBlock.find('.form');
	var $load = $('.loading');
	var $exit = $('.last-slide');
	var $linkToForm = $block.find('.link-to-form');
	var $linkToLoading = $form.find('.submit');

	$linkToForm.on('click', function(e){
		e.preventDefault();
		$block.toggleClass('close');
		$bgBlock.toggleClass('opened');
		$form.toggleClass('opened');
	});

	$form.on('submit', function(e){
		e.preventDefault();
		$form.toggleClass('close');
		// $form.input.reset();
		$load.fadeIn(500);
		$load.fadeOut(3500);
		function endLoad() {
			$load.toggleClass('close');
			$exit.toggleClass('opened');
		}
		$load.fadeOut(3500, endLoad);
		$form[0].reset();
	});

	$exit.on('click', function(e){
		e.preventDefault();
		$bgBlock.removeClass('opened');
		$form.removeClass('opened close');
		$load.removeClass('close');
		$exit.removeClass('opened');
		$block.removeClass('close');

	});


});
