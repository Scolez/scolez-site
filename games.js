$('#toggle').click(function(){
	var value = $('#toggle').attr('value');
	$('#gameimage').toggle('fast');

	if(value == 'Hide Image'){
		$('#toggle').attr('value','Show Image');
	} else if (value == 'Show') {
		$('#toggle').attr('value','Hide Image');
	}
});
$('#toggle2').click(function(){
	var value = $('#toggle2').attr('value');
	$('#gameimage2').toggle('fast');

	if(value == 'Hide Image'){
		$('#toggle2').attr('value','Show Image');
	} else if (value == 'Show') {
		$('#toggle2').attr('value','Hide Image');
	}
});
$('#toggle3').click(function(){
	var value = $('#toggle3').attr('value');
	$('#gameimage3').toggle('fast');

	if(value == 'Hide Image'){
		$('#toggle3').attr('value','Show Image');
	} else if (value == 'Show') {
		$('#toggle3').attr('value','Hide Image');
	}
});
$('#toggle4').click(function(){
	var value = $('#toggle4').attr('value');
	$('#gameimage4').toggle('fast');

	if(value == 'Hide Image'){
		$('#toggle4').attr('value','Show Image');
	} else if (value == 'Show') {
		$('#toggle4').attr('value','Hide Image');
	}
});