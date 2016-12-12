
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

// iconToggle Switcher Mens Section line 275 in HTML

function activeState(mainContainer, className){
  $(mainContainer).on('click', function(e){
    e.preventDefault();
    $(this).addClass(className).siblings().removeClass(className);
  });
}
activeState('.itemToggleSwitcher li','activeState');
activeState('.pagination li', 'activateCurrentPagination');


// customized colors on single products
$('.singleProperty div').on('click', function(){
  $(this).css({
    'border':'1px solid #ddd'
  });
  $(this).children('i').show().end().css({
    'padding-top':'10px'
  });
});

// number of items selection in single detail page

var count = 1;

$('#decrement').on('click', function(){
  count -= count;
  $('#numberOfItems').val( count );
});
$('#increment').on('click', function(){
  count++;
  $('#numberOfItems').val( count );
});

// create current item in single product page

$('#CurrentListItemActivator li').on('click', function(e){
  e.preventDefault();
  $(this).addClass('activeItem').siblings().removeClass('activeItem');
});