/* Resize */
function heightFrontPage(){
    var pageH = $("html").height();
    var trackPackage = $('.track-package').height();
    var businessCustomers = $('.business-customers').height();
    var header = $('.body-layout').height();

    if(pageH > 768) {
        if($('section').is('.track-package')) {
            var resultH = pageH - trackPackage - header;
        } else {
//            var resultH = pageH - businessCustomers - header;
        }

        $('.main-img').height(resultH).width('auto');
    }
}

$(window).load(function () {
    heightFrontPage();
    //submenu();
});

$(window).resize(function () {
    heightFrontPage();
});

$(window).trigger('resize');


//google map
function initialize() {
    var myOptions = {
        zoom: 5,
        center: new google.maps.LatLng(49.040770, 12.074807),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
        styles: styles
    }
    var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);

    setMarkers(map, clouds);
}
var clouds = [
    ['Germany', 50.0518413,10, 10.2203837, 3],
    ['Netherlands', 52.366624, 4.894385, 2],
    ['Ukraine', 50.439127, 30.520599, 1]
];


function setMarkers(map, locations) {
    var image = new google.maps.MarkerImage('../img/design/map.png',
        new google.maps.Size(42, 59));
    for (var i = 0; i < locations.length; i++) {
        var cloud = locations[i];
        var myLatLng = new google.maps.LatLng(cloud[1], cloud[2], cloud[3]);
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            icon: image
        });
    }
}
var styles = [{"featureType":"landscape","elementType":"all","stylers":[{"color":"#e7e7e8"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#bcbebf"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#c2c7bd"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#b3cee0"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#bcbebf"}]}];


if($('div').is('#map-canvas')) {
    initialize();
}



/*
 $.stellar.positionProperty.move_gor = {
 setTop: function($el, newTop, originalTop) {
 $el.css({
 'left': $el.hasClass('move_gor') ? originalTop - newTop : 0
 });
 },
 setLeft: function($el, newLeft, originalLeft) {
 $el.css('left', newLeft);
 }
 };
 $.stellar({
 verticalOffset: 0,
 horizontalScrolling: false,
 positionProperty: 'move_gor'
 });*/

// mobile menu

$('.mobile_item span').click(function() {
    $('.nav-list').css('transition','none');
    if($('.nav-list').is(':visible')) {
        $('.nav-list').slideUp(function() {
            $('.mobile_item').removeClass('mobile_item--active');
        });
    } else {
        $('.mobile_item').addClass('mobile_item--active');
        $('.nav-list').slideDown();
    }
});

// mobile submenu
/*
 function submenu() {
 if($('.menu').is(':hidden')) {
 $('.nav-list .active').parent('.nav-item').prepend('<span class="icon icon-key_2"></span>');
 } else {

 }
 }
 */

// scroll anchor

$('.menu__link').on('click', function() {
    var scrollAnchor = $(this).attr('data-scroll');
    var scrollPoint = $('[data-anchor="' + scrollAnchor + '"]').offset().top - 112;

    $('body, html').animate({
        scrollTop: scrollPoint
    }, 300);

    return false;

});


$(window).scroll(function() {
    var found = 0;
    var windscroll = $(window).scrollTop() + 112;

    $('[data-anchor]').each(function(i) {
        if (windscroll >= $(this).position().top && windscroll <= ($(this).outerHeight() + $(this).position().top)) {
            $('.menu__link.active').removeClass('active');
            $('.menu__link').eq(i).addClass('active');
            found = 1;
        }

        if (!found) {
            $('.menu__link.active').removeClass('active');
        }
    });
}).scroll();
// image resize
/*
 if($(".main-img").length != 0) {
 $(".main-img").backstretch("img/content/main_img.jpg");
 }
 */

//popup__switcher
if($(".popup__switcher").length != 0) {
    $('.popup__switcher-box').on('click', function() {
        $('.popup__switcher-box.active').removeClass('active');
        $(this).addClass('active');
    });
}

//popup
$('.address-info__plus .plus-style').on('click', function() {
    $('.popup').show();
});
$('.popup__close').on('click', function() {
    $('.popup').hide();
});
$('.popup__bg').on('click', function() {
    $('.popup').hide();
});

//account-type

/*
$('.account-type__box').on('click', function() {
    $('.account-type__box.active').removeClass('active');
    $(this).toggleClass('active');
});
*/


// phones mask
$("#phone").mask("+999 (99) 999-99-99");




