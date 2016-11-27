
// language dropdown small navigation
$('.options').hide();
$('.currencyOption').hide();

var dropDown = function(target, trigger){
	$(target).on('click', function(){
		$(trigger).slideToggle();
	});
}

dropDown('.select','.options');
dropDown('.currency','.currencyOption');

// $('.smallNavigation span').on('click', function(){
// 	if($(this).html() === 'FRENCH'){
// 		alert('FRENCH');
// 	}
// });
