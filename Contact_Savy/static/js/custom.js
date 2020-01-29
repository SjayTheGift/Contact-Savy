$(document).ready(function() {
	$('input[type="checkbox"]').each(function() {
		var thisBox = $(this).attr("id");
		if ($(this).is(":checked")) {
			$("." + thisBox).show();
		} else {
			$("." + thisBox).hide();
		}
	});

	$('input[type="checkbox"]').on("click", function() {
		var thisBox = $(this).attr("id");
		if ($("#" + thisBox).is(":checked")) {
			$("." + thisBox).show();
		} else {
			$("." + thisBox).hide();
		}
	});


});