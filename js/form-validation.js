// Created new js file so script.js wasn't too cluttered.

// Validation for all required feilds on submit.
function formValidate() {
	$('form').submit(function(e) {
		e.preventDefault();

		const email = /[a-zA-Z0-9._+-]+\@[a-zA-Z0-9]+\.[a-z]{2,3}/;
		const activities = $('.activities').children().children();
		let checkedActivities = 0;

		if ($('#name').val() === '') {
			$('#name').addClass('alert');
		} else {
			$('#name').removeClass('alert');
		}

		if ($('#mail').val() === '') {
			$('#mail').addClass('alert');
		} else if (!email.test($('#mail').val())) {
			$('#mail').addClass('alert');
		} else {
			$('#mail').removeClass('alert');
		}

		for (let i = 0; i < activities.length; i++) {
			if (activities[i].checked) {
				checkedActivities++;
			}
		}
		
		if (checkedActivities === 0) {
			$('.activities').addClass('alert');
		} else {
			$('.activities').removeClass('alert');
		}
	})
}

$(document).ready(function() {
	formValidate();
})