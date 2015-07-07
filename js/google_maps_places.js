/**
 * tabs description object
 *
 * @author    Yurii Kozak <yurakozak92@gmail.com>
 * @copyright 2015 cosmonova
 *
 */

var googleMapsPlaces = googleMapsPlaces || {};

googleMapsPlaces = {
    /**
     * Selectors
     **/
    selectors: {
        mapClass:             ".mapInit",
        infowWrap:            ".infow-wrap",
        infowBody:            ".infow-body",
        infowTitle:           ".infow-title",
        infowPlaceName:       ".infow-place-name",
        infowAddress:         ".infow-place-formatted-address",
        infowPhoneNumber:     ".infow-place-formatted-phone-number",
        infowWebsite:         ".infow-website",
        gmStarsF:             ".gm-stars-f",
        infowUserTotalRating: ".infow-user-total-rating",
        infowPhoto:           ".infow-photo"
    },

    /**
     * Css
     */
    css: {
        width: "width"
    },

    /**
     * Attributes
     */
    attr: {
        id: "id",
        href:'href',
        src:'src'
    },

    getPlaces: function (mapID,gplaceID, xchoord, ychoord, gzoom) {
        var wthis = this;
        var ts = wthis.selectors;
        gmarkers = [];
                var map = new google.maps.Map(document.getElementById(mapID), {
                    center: new google.maps.LatLng(xchoord, ychoord),
                    zoom: gzoom
                });
                /*mapxPos = 0;
                mapyPos = 0;*/
                for(i = 0; i < gplaceID.length; i++) {
                    var request = {
                        placeId: gplaceID[i]
                    };
                    var infowindow = new google.maps.InfoWindow();
                    var service = new google.maps.places.PlacesService(map);
                    service.getDetails(request, function (place, status) {
                        if(status == google.maps.places.PlacesServiceStatus.OK) {
                            var marker = new google.maps.Marker({
                                map: map,
                                position: place.geometry.location,
                                title: place.name
                            });
                            /*mapxPos += place.geometry.location.A;
                            mapyPos += place.geometry.location.F;
                            map.setCenter({lat: mapxPos/gplaceID.length, lng: mapyPos/gplaceID.length});*/
                            gmarkers.push(marker);
                            var newInfowindow = $(wthis.selectors.infowWrap).clone();
                            newInfowindow.find(ts.infowTitle).html(place.name);
                            newInfowindow.find(ts.infowPlaceName).html(place.name);
                            newInfowindow.find(ts.infowAddress).html(place.formatted_address);
                            newInfowindow.find(ts.infowPhoneNumber).html(place.formatted_phone_number);
                            newInfowindow.find(ts.infowWebsite).attr(wthis.attr.href,place.website).text(place.website);
                            newInfowindow.find(ts.gmStarsF).css(wthis.css.width,65*place.rating/5);
                            newInfowindow.find(ts.infowUserTotalRating).attr(wthis.attr.href,place.url).text(place.user_ratings_total + " reviews");
                            if (place.photos){newInfowindow.find(ts.infowPhoto).attr(wthis.attr.src,place.photos[0].getUrl({'maxHeight': 200}))}
                            var finalContent = newInfowindow.html();
                            google.maps.event.addListener(marker, 'click', function () {
                                infowindow.setContent(
                                    finalContent
                                );
                                infowindow.open(map, this);
                            });
                        }
                    });
                }

        google.maps.event.addDomListener(window, "resize", function () {
            var center = map.getCenter();
            google.maps.event.trigger(map, "resize");
            map.setCenter(center);
        });
    }
    /*
     * print places to html page
     * @param places - array with places data
     * @param wthis - reference to individuals object
     * */
    /*<a href="javascript:google.maps.event.trigger(gmarkers[i],'click');">Open Info Windowi</a>*/
 };
