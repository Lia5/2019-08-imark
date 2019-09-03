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
    if(jQuery('.services__reviews-slider').length) {
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
    }

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
    /*slider*/
    if(jQuery('.services__reviews-slider').length) {
        $('.services__reviews-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        arrows: true,
        dots: false,
        prevArrow: '<div class="arrow-prev"></div>',
        nextArrow: '<div class="arrow-next"></div>',
        responsive: [{
            breakpoint: 1240,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
        // prevArrow: '<div class="arrow-prev"><svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.3536 4.35355C15.5488 4.15829 15.5488 3.84171 15.3536 3.64645L12.1716 0.464466C11.9763 0.269204 11.6597 0.269204 11.4645 0.464466C11.2692 0.659728 11.2692 0.976311 11.4645 1.17157L14.2929 4L11.4645 6.82843C11.2692 7.02369 11.2692 7.34027 11.4645 7.53553C11.6597 7.7308 11.9763 7.7308 12.1716 7.53553L15.3536 4.35355ZM0 4.5H15V3.5H0V4.5Z"/></svg></div>',
        // nextArrow: '<div class="arrow-next"><svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.3536 4.35355C15.5488 4.15829 15.5488 3.84171 15.3536 3.64645L12.1716 0.464466C11.9763 0.269204 11.6597 0.269204 11.4645 0.464466C11.2692 0.659728 11.2692 0.976311 11.4645 1.17157L14.2929 4L11.4645 6.82843C11.2692 7.02369 11.2692 7.34027 11.4645 7.53553C11.6597 7.7308 11.9763 7.7308 12.1716 7.53553L15.3536 4.35355ZM0 4.5H15V3.5H0V4.5Z"/></svg></div>'
        });
    }    
    /*fix menu*/
    var navPos, navPosEnd, winPos, navHeight;
    
    function refreshVar() {
      try {
        navPos = '1';
        navPosEnd = $('.footer').offset().top;
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


});

//team btn more details
$('.team .mark-btn').click(function(e) {
    e.preventDefault();
    $(this).parents('.team__item').find('.team__columns').addClass('active');
    $(this).hide();
});

//scroll animation dots
jQuery(window).scroll(function(){
    var $sections = $('.section_scroll');
    $sections.each(function(i,el){
        var top  = $(el).offset().top-100;
        var bottom = top +$(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');
        if( scroll > top && scroll < bottom){
            $('.nav-dots a.active').removeClass('active');
            $('.nav-dots a[href="#'+id+'"]').addClass('active');
        }
    })
});

$(".nav-dots").on("click","a", function (event) {
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 800);
});

