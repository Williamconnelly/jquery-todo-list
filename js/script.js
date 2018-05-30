// Takes data from the input field and appends it to a waiting div 
var addListItem = function(e) {
	e.preventDefault();
	var formData = $("form").serializeArray();
	$(".to-do-list").append("<li><input type='checkbox'>" + " " + formData[0].value + "</li>");
	$("input")[0].value = "";
	$(".list-input").focus();
};
    
// Adds event listeners to the submit button for input and to the list items for deletion
$(document).ready(function() {
	$("form").submit(addListItem);
	$(".to-do-list").on("click", "input", function() {
		$(this).parent().remove();
		$(".list-input").focus();
	})
});