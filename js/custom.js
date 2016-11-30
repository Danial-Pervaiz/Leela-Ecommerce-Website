
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


// inner OrderLists on products page

$('.innerOrderLists li').on('click', function(){
	$(this).addClass('active').siblings().removeClass('active');
});
$('#unOrderedLists .itemsListsCategory').on('click', function(){
	$(this).siblings().children('ol').slideUp();
	$(this).children('.innerOrderLists').slideDown();
});

// price filter slider 


 $( "#slider-range" ).slider({
  range: true,
  min: 0,
  max: 500,
  values: [ 75, 300 ],
  slide: function( event, ui ) {
    $( "#amount" ).text( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
  }
});
$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
  " - $" + $( "#slider-range" ).slider( "values", 1 ) );