$(document).ready(function(){





// Тач для карусели

	$(".carousel").swipe( {
		swipeLeft: function() {
			$(this).carousel("next");
		},
		swipeRight: function() {
			$(this).carousel("prev");
		},
		allowPageScroll: "horizontal"
	});


// Настройки каунтера

// здесь нужная дата в формате гггг-мм-дд чч:мм:сс
  var deadline='2018-01-04 10:00:00';


  $('.countdown').downCount({
    date: deadline,
  },
  function(){
     /* действие после завершения таймера */
    alert("Время истекло!");
  });






});





