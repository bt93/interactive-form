// Will do the things needed when page is loaded and ready
$(document).ready(function() {
	// Focuses on the first text field on page load
	$('#name').focus();
	// Hides the `Other title` text field on page load
	$('#other-title').hide();
})

// Displays the `other title` text feild if other is selected
function otherJobTitle() {
	const title = $('#title');
	title.change(function() {
		if (title.val() === 'other') {
			$('#other-title').show();
		} else {
			$('#other-title').hide();
		}
	});
}

otherJobTitle();

/*
 * Takes the design select menu and changes the color menu
 * based on which is chosen and displays only the
 * colors that can be selected
 */
function tShirtInfo() {
	const design = $('#design');
	const color = $('#color');
	const colorChildren = color.children();
	design.change(function() {
		const designVal = design.val()
		if (designVal === 'js puns') {
			colorChildren.show();
			color[0].selectedIndex = 0;
			for (let i = 3; i < colorChildren.length; i++) {
				colorChildren.eq(i).hide();
			}
		} else if (designVal === 'heart js') {
			colorChildren.show();
			color[0].selectedIndex = 3;
			for (let i = 0; i < 3; i++) {
				colorChildren.eq(i).hide();
			}
		} else {
			colorChildren.show();
			color[0].selectedIndex = 0;
		}
	});
}

tShirtInfo();

/*
 * when activity options are clicked:
 * Adds or subtracts the from the total.
 * Disables the checkboxes and puts a strike through
 * the text of a corresponding checkbox for any events
 * that confilct with the selected options.
 */
function activityRegister() {
	const activities = $('.activities').children().children();

	let total = 0;
	let clickCount = 0;
	let totalHTML = $('<label></label>');

	activities.on('change', function(e) {
		// Main Conference
		if (e.target.checked && e.target.name === 'all') {
			total += 200;
			clickCount += 1;
			activities.parent().not('#all').addClass('strike');
			activities.not('[name="all"]').attr("disabled", true);
		} else if (!e.target.checked && e.target.name === 'all') {
			total -= 200;
			clickCount -= 1;
			activities.parent().not('#all').removeClass('strike');
			activities.not('[name="all"]').attr("disabled", false);
		}
		// js-frameworks
		if (e.target.checked && e.target.name === 'js-frameworks') {
			total += 100;
			clickCount += 1;
			// disable all
			$('#all').addClass('strike');
			$('[name="all"]').attr('disabled', true);
			// disable express
			$('#express').addClass('strike');
			$('[name="express"]').attr('disabled', true);
		} else if (!e.target.checked && e.target.name === 'js-frameworks') {
			total -= 100;
			clickCount -= 1;
			// enable express
			$('#express').removeClass('strike');
			$('[name="express"]').attr('disabled', false);
		}

		// js-libs
		if (e.target.checked && e.target.name === 'js-libs') {
			total += 100;
			clickCount += 1;
			// disable all
			$('#all').addClass('strike');
			$('[name="all"]').attr('disabled', true);
			// disable express
			$('#node').addClass('strike');
			$('[name="node"]').attr('disabled', true);
		} else if (!e.target.checked && e.target.name === 'js-libs') {
			total -= 100;
			clickCount -= 1;
			// enable express
			$('#node').removeClass('strike');
			$('[name="node"]').attr('disabled', false);
		}

		// express
		if (e.target.checked && e.target.name === 'express') {
			total += 100;
			clickCount += 1;
			// disable all
			$('#all').addClass('strike');
			$('[name="all"]').attr('disabled', true);
			// disable express
			$('#js-frameworks').addClass('strike');
			$('[name="js-frameworks"]').attr('disabled', true);
		} else if (!e.target.checked && e.target.name === 'express') {
			total -= 100;
			clickCount -= 1;
			// enable express
			$('#js-frameworks').removeClass('strike');
			$('[name="js-frameworks"]').attr('disabled', false);
		}

		// node
		if (e.target.checked && e.target.name === 'node') {
			total += 100;
			clickCount += 1;
			// disable all
			$('#all').addClass('strike');
			$('[name="all"]').attr('disabled', true);
			// disable express
			$('#js-libs').addClass('strike');
			$('[name="js-libs"]').attr('disabled', true);
		} else if (!e.target.checked && e.target.name === 'node') {
			total -= 100;
			clickCount -= 1;
			// enable express
			$('#js-libs').removeClass('strike');
			$('[name="js-libs"]').attr('disabled', false);
		}

		// build-tools
		if (e.target.checked && e.target.name === 'build-tools') {
			total += 100;
			clickCount += 1;
			// disable all
			$('#all').addClass('strike');
			$('[name="all"]').attr('disabled', true);
		} else if (!e.target.checked && e.target.name === 'build-tools') {
			total -= 100;
			clickCount -= 1;
		}

		// npm
		if (e.target.checked && e.target.name === 'npm') {
			total += 100;
			clickCount += 1;
			// disable all
			$('#all').addClass('strike');
			$('[name="all"]').attr('disabled', true);
		} else if (!e.target.checked && e.target.name === 'npm') {
			total -= 100;
			clickCount -= 1;
		}

		if (clickCount === 0) {
			$('#all').removeClass('strike');
			$('[name="all"]').attr('disabled', false);
		}

		totalHTML.text('Total: $' + total);
		$('.activities').append(totalHTML);
	})
}

activityRegister();

