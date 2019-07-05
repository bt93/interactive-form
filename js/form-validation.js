// Created new js file so script.js wasn't too cluttered.

// Validation for all required feilds on submit.
function formValidate() {
	$('form').submit(function(e) {
		e.preventDefault();

		const email = /[a-zA-Z0-9._+-]+\@[a-zA-Z0-9]+\.[a-z]{2,3}/;

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
	})
}

$(document).ready(function() {
	formValidate();
})