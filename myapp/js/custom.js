$(function() {
    //lang 
    $(".lang__current").click(function (){
        $(".lang__wrap").addClass("active");

    });
    $(".lang__item").click(function (){
        var lang = $(this).text();
        $(".lang__current").text(lang);
        $(".lang__wrap").removeClass("active");
    }); 

    $(".nav-dots a").click(function (e){
        e.preventDefault();
        var $div = $(this).data('div');
        $('html, body').animate({
            scrollTop: $($div).offset().top
        }, 1000);
    });
    $(".scroll").click(function (e){
        e.preventDefault();
        var $div = $(this).data('div');
        $('html, body').animate({
            scrollTop: $($div).offset().top
        }, 1000);
    });

/*map*/
    function initMap() {
        var centerLatLng = new google.maps.LatLng( 50.445573, 30.495504);
        var mapOptions = {
            center: centerLatLng,
            zoom: 16,               // Зум по умолчанию. Возможные значения от 0 до 21
            navigationControlOptions: {
            style: google.maps.NavigationControlStyle.SMALL
            },
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        map.scrollwheel=true;
        map.setOptions({ mapTypeControl:true});
        var locations = [
            {
                title: 'iMARK',
                position: {lat: 50.445573, lng: 30.495504},
                icon: {
                    url: "img/icons/marker.svg",
                    scaledSize: new google.maps.Size(40, 47)
                }
            }
        ];
        locations.forEach( function( element ) {
            var marker = new google.maps.Marker({
                position: element.position,
                map: map,
                title: element.title,
                icon: element.icon,
            });
        });
       
    }
    google.maps.event.addDomListener(window, "load", initMap);
   

	function AnimActive() {
		$('*[data-anim]').each(function(e) {
			var dataName = $(this).attr('data-anim');
            var posit = $(this).offset().top - 400;
            if (dataName=="main") {
                var posit = $(this).offset().top - 10000;
            }
            if (dataName=="directionanimbtn1" || dataName=="directionanimbtn2" || dataName=="directionanimbtn3") {
                var posit = $(this).offset().top - 800;
            }

            // if ( window.innerWidth < 1341 || window.screen.width < 1341) {
            //     var posit = $(this).offset().top - 1000;
            //     if (dataName=="bioanim3") {
            //         var posit = $(this).offset().top - 800;
            //     }
            // }

			var windowPostition = $(window).scrollTop();

			if (windowPostition >= posit) {
				$('*[data-anim="'+ dataName + '"]').removeClass('anim');
				$('[data-anim="'+ dataName + '"]').addClass('anim');
			} else {

            }

		});
	};

	AnimActive();
	$(window).scroll(function() {
		AnimActive();
	});

	$(window).resize(function() {
		AnimActive();
    });
    
    /*fix menu*/
    var navPos, navPosEnd, winPos, navHeight;
    
    function refreshVar() {
      try {
        navPos = $('.header').offset().top;
        navPosEnd = $('.contacts').offset().top;
      } catch (e){}
      navHeight = $('.fix-menu').outerHeight(true);
    }
    refreshVar();
    $(window).resize(refreshVar);
  
    $('<div class="clone-fix-menu"></div>').insertBefore('.about').css('height', navHeight).hide();
      $(window).scroll(function() {
        winPos = $(window).scrollTop();
  
        if ((winPos >= navPos)&&(winPos <= navPosEnd) ) {
          $('.fix-menu').addClass('fixed shadow');  
        //   $('.clone-fix-menu').show();
        } else {
          $('.fix-menu').removeClass('fixed shadow');
        //   $('.clone-fix-menu').hide();
        }
      });
    
});



document.addEventListener('DOMContentLoaded', function(){
//menu
    var menu = document.querySelector('.menu-toggle');
    menu.addEventListener('click', function(){
        var nav = document.querySelector('.main-menu');
        nav.classList.toggle('active');
        var navGamb = document.querySelector('.menu-toggle');
        navGamb.classList.toggle('active');
        var navBody = document.querySelector('body');
        navBody.classList.toggle('activenav');
    });
//tabs
	// store tabs variable
	var myTabs = document.querySelectorAll("ul.header__tabs > li");
    function myTabClicks(tabClickEvent) {
		for (var i = 0; i < myTabs.length; i++) {
			myTabs[i].classList.remove("active");
		}
		var clickedTab = tabClickEvent.currentTarget;
		clickedTab.classList.add("active");
		tabClickEvent.preventDefault();
		var myContentPanes = document.querySelectorAll(".tab-pane");
		for (i = 0; i < myContentPanes.length; i++) {
			myContentPanes[i].classList.remove("active");
		}
        var anchorReference = tabClickEvent.target;
        console.log(anchorReference);
        var activePaneId = anchorReference.getAttribute("href");
        console.log(activePaneId);
        var activePane = document.querySelector(activePaneId);
        console.log(activePaneId);
		activePane.classList.add("active");
    }
    for (i = 0; i < myTabs.length; i++) {
		myTabs[i].addEventListener("click", myTabClicks)
	}





});
