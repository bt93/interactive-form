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