$(document).ready(function() {
	$('ul.ingredients li label input').click(function() {
		$(this).parents('li').toggleClass("highlighted");
		if($(this).parents('li').hasClass("highlighted")) {
			$(this).parent().append(" <span class='bought'>bought</span>");
		} else {
			$(this).parent().children('span.bought').remove();
		}
	});

	$('ol.directions > li').click(function() {
		if($(this).hasClass('active')) {
			$(this).toggleClass('faint');
			$(this).removeClass('active');
			$(this).next().addClass('active');
		}
	});


	var imgState = true;
	$('h4 button').click(function() {
		$('img').toggle();
		imgState = !imgState;
		if(imgState) {
			$(this).text("Hide all images");
		} else {
			$(this).text("Show all images");
		}
	});
});