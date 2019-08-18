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
   

});



document.addEventListener('DOMContentLoaded', function(){
//menu
    var menu = document.querySelector('.menu-toggle');
    menu.addEventListener('click', function(){
        var nav = document.querySelector('.main-menu');
        nav.classList.toggle('active');
        var navGamb = document.querySelector('.menu-toggle');
        navGamb.classList.toggle('active');
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
