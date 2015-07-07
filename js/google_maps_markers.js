/**
 * tabs description object
 *
 * @author    Yurii Kozak <yurakozak92@gmail.com>
 * @copyright 2015 cosmonova
 *
 */

var googleMapsMarkers = googleMapsMarkers || {};

googleMapsMarkers = {
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

    getMap: function (mapID, xchoord, ychoord, gzoom) {
        var wthis = this;
        var ts = wthis.selectors;





        gmarkers = [];
                var map = new google.maps.Map(document.getElementById(mapID), {
                    center: new google.maps.LatLng(xchoord, ychoord),
                    zoom: gzoom
                });

                    /*var infowindow = new google.maps.InfoWindow();
                    infowindow.setContent(
                        finalContent
                    );*/



        google.maps.event.addDomListener(window, "resize", function () {
            var center = map.getCenter();
            google.maps.event.trigger(map, "resize");
            map.setCenter(center);
        });


        map.set('styles', [
            {"featureType":"landscape",
                "elementType":"all",
                "stylers":[{"color":"#e7e7e8"}]},
            {"featureType":"road.highway",
                "elementType":"geometry",
                "stylers":[{"color":"#bcbebf"}]},
            {"featureType":"poi.park",
                "elementType":"geometry.fill",
                "stylers":[{"color":"#c2c7bd"}]},
            {"featureType":"water",
                "elementType":"geometry.fill",
                "stylers":[{"color":"#b3cee0"}]},
            {"featureType":"road.arterial",
                "elementType":"geometry",
                "stylers":[{"color":"#bcbebf"}]}]);




    }
    /*
     * print places to html page
     * @param places - array with places data
     * @param wthis - reference to individuals object
     * */
    /*<a href="javascript:google.maps.event.trigger(gmarkers[i],'click');">Open Info Windowi</a>*/
 };
