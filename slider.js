$(document).ready(function() {
	var current = 1
	var total = $('.content-wrapper').length;
	
	$('.total-slide').text(total);
		
	$('.arrow-container .btn-prev').on('click', function() {
		if(current <= 1) {
			current = total;
		} else {
			current--;
		}
		
		updateSlide();
	});
	
	$('.arrow-container .btn-next').on('click', function() {
		if(current >= total) {
			current = 1;
		} else {
			current++;
		}
		
		updateSlide();
	});
	
	function updateSlide() {
		$('.content-wrapper').removeClass('active');
		$('.content-wrapper[data-id="' + current + '"]').addClass('active');
		$('.current-slide').text(current);
		$('.total-slide').text(total);
	}

	
});