// Created new js file so script.js wasn't too cluttered.

// Validation for all required feilds on submit.
function formValidate() {
	$('form').submit(function(e) {
		e.preventDefault();

		const email = /[a-zA-Z0-9._+-]+\@[a-zA-Z0-9]+\.[a-z]{2,3}/;
		const creditCard = /^\d{13,16}$/;
		const zipCode = /^\d{5}$/;
		const cvv = /^\d{3}$/;
		const activities = $('.activities').children().children();
		let checkedActivities = 0;

		// Name Validation
		if ($('#name').val() === '') {
			$('#name').addClass('alert');
		} else {
			$('#name').removeClass('alert');
		}

		// Email validation
		if ($('#mail').val() === '' || !email.test($('#mail').val())) {
			$('#mail').addClass('alert');
		} else {
			$('#mail').removeClass('alert');
		}

		// Activities validation
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

		// Credit Card number validation
		if ($('#credit-card')[0].style.display !== 'none') {
			// Number validation
			if ($('#cc-num').val() === '' || !creditCard.test($('#cc-num').val())) {
				$('#cc-num').addClass('alert');
			} else {
				$('#cc-num').removeClass('alert');
			}

			// Zipcode validation 
			if ($('#zip').val() === '' || !zipCode.test($('#zip').val())) {
				$('#zip').addClass('alert');
			} else {
				$('#zip').removeClass('alert');
			}

			// CVV validation
			if ($('#cvv').val() === '' || !cvv.test($('#cvv').val())) {
				$('#cvv').addClass('alert');
			} else {
				$('#cvv').removeClass('alert');
			}
		}

	})
}

$(document).ready(function() {
	formValidate();
})