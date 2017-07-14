const environment = {
    googleApiKey: 'AIzaSyAEttjBB1G8pb7dJDiniQMCXnlt6p55daI'
};

const $ = jQuery.noConflict();

var map;
var positions = [{ "ShopId": 3, "PharmacyUnitId": 0, "PharmacyId": 3, "IsPharmacy": true, "PharmacyName": "TestPharmacyId", "Name": "TestPharmacyId", "Address": "Munkemaen 220, 5270,  ", "VatNo": "12341234123", "Phone": null, "Fax": null, "Email": null, "Status": 1, "Latitude": 55.4319572, "Longitude": 10.3924017, "OpeningHours": [{ "DayOfWeek": "Mandag", "OpeningHours": "Lukket" }, { "DayOfWeek": "Tirsdag", "OpeningHours": "Lukket" }, { "DayOfWeek": "Onsdag", "OpeningHours": "Lukket" }, { "DayOfWeek": "Torsdag", "OpeningHours": "06:00 - 18:15" }, { "DayOfWeek": "Fredag", "OpeningHours": "Lukket" }, { "DayOfWeek": "Lørdag", "OpeningHours": "Lukket" }, { "DayOfWeek": "Søndag", "OpeningHours": "Lukket" }], "IconInactive": "/images/shopicon.png", "IconActive": "/images/shopicon-active.png", "SpecialRemarks": null, "HasSpecialRemarks": false }, { "ShopId": 8, "PharmacyUnitId": 0, "PharmacyId": 8, "IsPharmacy": true, "PharmacyName": "Anders' Apotek æøå 123", "Name": "Anders' Apotek æøå 123", "Address": "Vestergade 1, 5000 Odense C", "VatNo": "99999999", "Phone": "12 34 56 78", "Fax": null, "Email": "atr@hesehus.dk", "Status": 1, "Latitude": 55.39667, "Longitude": 10.3891134, "OpeningHours": [{ "DayOfWeek": "Mandag", "OpeningHours": "08:00 - 17:00" }, { "DayOfWeek": "Tirsdag", "OpeningHours": "Lukket" }, { "DayOfWeek": "Onsdag", "OpeningHours": "09:00 - 16:00" }, { "DayOfWeek": "Torsdag", "OpeningHours": "Lukket" }, { "DayOfWeek": "Fredag", "OpeningHours": "Lukket" }, { "DayOfWeek": "Lørdag", "OpeningHours": "Lukket" }, { "DayOfWeek": "Søndag", "OpeningHours": "Lukket" }], "IconInactive": "/images/shopicon.png", "IconActive": "/images/shopicon-active.png", "SpecialRemarks": null, "HasSpecialRemarks": false }, { "ShopId": 17, "PharmacyUnitId": 0, "PharmacyId": 17, "IsPharmacy": true, "PharmacyName": "PharmaNet Pharmacy", "Name": "PharmaNet Pharmacy", "Address": "Englandsgade 24, 5000 Odense C", "VatNo": "12312", "Phone": null, "Fax": null, "Email": null, "Status": 1, "Latitude": 55.3914528, "Longitude": 10.42101, "OpeningHours": [{ "DayOfWeek": "Mandag", "OpeningHours": "Lukket" }, { "DayOfWeek": "Tirsdag", "OpeningHours": "Lukket" }, { "DayOfWeek": "Onsdag", "OpeningHours": "Lukket" }, { "DayOfWeek": "Torsdag", "OpeningHours": "Lukket" }, { "DayOfWeek": "Fredag", "OpeningHours": "Lukket" }, { "DayOfWeek": "Lørdag", "OpeningHours": "Lukket" }, { "DayOfWeek": "Søndag", "OpeningHours": "Lukket" }], "IconInactive": "/images/shopicon.png", "IconActive": "/images/shopicon-active.png", "SpecialRemarks": null, "HasSpecialRemarks": false }, { "ShopId": 19, "PharmacyUnitId": 0, "PharmacyId": 19, "IsPharmacy": true, "PharmacyName": "A-apotek test 1", "Name": "A-apotek test 1", "Address": "Englandsgade 24, 5000 Odense C", "VatNo": "12345678", "Phone": "53577315", "Fax": "12345678", "Email": "cnh@hesehus.dk", "Status": 1, "Latitude": 55.4088058, "Longitude": 10.3817, "OpeningHours": [{ "DayOfWeek": "No such weekday", "OpeningHours": "Lukket" }, { "DayOfWeek": "Mandag", "OpeningHours": "Lukket" }, { "DayOfWeek": "Tirsdag", "OpeningHours": "Lukket" }, { "DayOfWeek": "Onsdag", "OpeningHours": "Lukket" }, { "DayOfWeek": "Torsdag", "OpeningHours": "Lukket" }, { "DayOfWeek": "Fredag", "OpeningHours": "Lukket" }, { "DayOfWeek": "Lørdag", "OpeningHours": "Lukket" }, { "DayOfWeek": "Søndag", "OpeningHours": "Lukket" }], "IconInactive": "/images/shopicon.png", "IconActive": "/images/shopicon-active.png", "SpecialRemarks": null, "HasSpecialRemarks": false }, { "ShopId": 20, "PharmacyUnitId": 0, "PharmacyId": 20, "IsPharmacy": true, "PharmacyName": "aa - test apotek 2", "Name": "aa - test apotek 2", "Address": "Sct.Mikkelsgade 24 1., 4200 Slagelse", "VatNo": "12345678", "Phone": "53577315", "Fax": "12345678", "Email": "cnh@hesehus.dk", "Status": 1, "Latitude": 55.4065247, "Longitude": 11.3500586, "OpeningHours": [{ "DayOfWeek": "Mandag", "OpeningHours": "Lukket" }, { "DayOfWeek": "Tirsdag", "OpeningHours": "Lukket" }, { "DayOfWeek": "Onsdag", "OpeningHours": "Lukket" }, { "DayOfWeek": "Torsdag", "OpeningHours": "Lukket" }, { "DayOfWeek": "Fredag", "OpeningHours": "Lukket" }, { "DayOfWeek": "Lørdag", "OpeningHours": "Lukket" }, { "DayOfWeek": "Søndag", "OpeningHours": "Lukket" }], "IconInactive": "/images/shopicon.png", "IconActive": "/images/shopicon-active.png", "SpecialRemarks": null, "HasSpecialRemarks": false }, { "ShopId": 4, "PharmacyUnitId": 0, "PharmacyId": 4, "IsPharmacy": true, "PharmacyName": "Claus test", "Name": "Claus test", "Address": "Englandsgade 10 Odense, 5000 Odense C", "VatNo": "12341234", "Phone": "12341234", "Fax": "12341234", "Email": "c@c.dk", "Status": 1, "Latitude": 55.4042053, "Longitude": 10.341073, "OpeningHours": [{ "DayOfWeek": "Mandag", "OpeningHours": "08:00 - 17:00" }, { "DayOfWeek": "Tirsdag", "OpeningHours": "08:00 - 17:00" }, { "DayOfWeek": "Onsdag", "OpeningHours": "08:00 - 17:00" }, { "DayOfWeek": "Torsdag", "OpeningHours": "08:00 - 15:00" }, { "DayOfWeek": "Fredag", "OpeningHours": "Lukket" }, { "DayOfWeek": "Lørdag", "OpeningHours": "Lukket" }, { "DayOfWeek": "Søndag", "OpeningHours": "08:00 - 16:00" }], "IconInactive": "/images/shopicon.png", "IconActive": "/images/shopicon-active.png", "SpecialRemarks": null, "HasSpecialRemarks": false }, { "ShopId": 1, "PharmacyUnitId": 0, "PharmacyId": 1, "IsPharmacy": true, "PharmacyName": "Hesehus Apotek", "Name": "Hesehus Apotek", "Address": "Englandsgade 24, 5000 Odense C", "VatNo": "10203040", "Phone": "20304050", "Fax": "40506070", "Email": "info@hesehus.dk", "Status": 1, "Latitude": 55.4088058, "Longitude": 10.3817, "OpeningHours": [{ "DayOfWeek": "Mandag", "OpeningHours": "06:00 - 16:00" }, { "DayOfWeek": "Tirsdag", "OpeningHours": "06:00 - 16:00" }, { "DayOfWeek": "Onsdag", "OpeningHours": "06:00 - 16:00" }, { "DayOfWeek": "Torsdag", "OpeningHours": "06:00 - 16:00" }, { "DayOfWeek": "Fredag", "OpeningHours": "06:00 - 16:00" }, { "DayOfWeek": "Lørdag", "OpeningHours": "08:00 - 18:00" }, { "DayOfWeek": "Søndag", "OpeningHours": "08:00 - 18:00" }], "IconInactive": "/images/shopicon.png", "IconActive": "/images/shopicon-active.png", "SpecialRemarks": "Special remarks for hesehus apotek", "HasSpecialRemarks": true }, { "ShopId": 21, "PharmacyUnitId": 0, "PharmacyId": 21, "IsPharmacy": true, "PharmacyName": "aa - test apotek 3", "Name": "aa - test apotek 3", "Address": "Englandsgade 24, 5200 Oden", "VatNo": "12345678", "Phone": "53577315", "Fax": "12345678", "Email": "cnh@hesehus.dk", "Status": 1, "Latitude": 55.4088058, "Longitude": 10.3817, "OpeningHours": [{ "DayOfWeek": "Mandag", "OpeningHours": "Lukket" }, { "DayOfWeek": "Tirsdag", "OpeningHours": "Lukket" }, { "DayOfWeek": "Onsdag", "OpeningHours": "Lukket" }, { "DayOfWeek": "Torsdag", "OpeningHours": "Lukket" }, { "DayOfWeek": "Fredag", "OpeningHours": "Lukket" }, { "DayOfWeek": "Lørdag", "OpeningHours": "Lukket" }, { "DayOfWeek": "Søndag", "OpeningHours": "Lukket" }], "IconInactive": "/images/shopicon.png", "IconActive": "/images/shopicon-active.png", "SpecialRemarks": null, "HasSpecialRemarks": false }, { "ShopId": 10, "PharmacyUnitId": 10, "PharmacyId": 8, "IsPharmacy": false, "PharmacyName": "Anders' Apotek æøå 123", "Name": "Apoteksudsalg Anders", "Address": "Tarupvej 100, 5210 Odense NV", "VatNo": "44444444", "Phone": "12345678", "Fax": null, "Email": "atr@hesehus.dk", "Status": 1, "Latitude": 55.4129639, "Longitude": 10.3377571, "OpeningHours": [{ "DayOfWeek": "Mandag", "OpeningHours": "Lukket" }, { "DayOfWeek": "Tirsdag", "OpeningHours": "Lukket" }, { "DayOfWeek": "Onsdag", "OpeningHours": "Lukket" }, { "DayOfWeek": "Torsdag", "OpeningHours": "Lukket" }, { "DayOfWeek": "Fredag", "OpeningHours": "Lukket" }, { "DayOfWeek": "Lørdag", "OpeningHours": "10:00 - 12:00" }, { "DayOfWeek": "Søndag", "OpeningHours": "Lukket" }], "IconInactive": "/images/shopicon_small.png", "IconActive": "/images/shopicon-active_small.png", "SpecialRemarks": null, "HasSpecialRemarks": false }, { "ShopId": 24, "PharmacyUnitId": 24, "PharmacyId": 20, "IsPharmacy": false, "PharmacyName": "aa - test apotek 2", "Name": "test apotek 2 udleveringssted", "Address": "Junghansvej 2, 6000 Kolding", "VatNo": "12345678", "Phone": "53577315", "Fax": null, "Email": "cnh@hesehus.dk", "Status": 1, "Latitude": 55.47999, "Longitude": 9.456244, "OpeningHours": [{ "DayOfWeek": "Mandag", "OpeningHours": "05:00 - 18:00" }, { "DayOfWeek": "Tirsdag", "OpeningHours": "05:00 - 18:00" }, { "DayOfWeek": "Onsdag", "OpeningHours": "05:00 - 18:00" }, { "DayOfWeek": "Torsdag", "OpeningHours": "05:00 - 18:00" }, { "DayOfWeek": "Fredag", "OpeningHours": "05:00 - 18:00" }, { "DayOfWeek": "Lørdag", "OpeningHours": "05:00 - 18:00" }, { "DayOfWeek": "Søndag", "OpeningHours": "05:00 - 18:00" }], "IconInactive": "/images/shopicon_small.png", "IconActive": "/images/shopicon-active_small.png", "SpecialRemarks": null, "HasSpecialRemarks": false }, { "ShopId": 2, "PharmacyUnitId": 2, "PharmacyId": 1, "IsPharmacy": false, "PharmacyName": "Hesehus Apotek", "Name": "Fælles domicil udlevering", "Address": "Englandsgade 22, 5000 Odense C", "VatNo": "90807060", "Phone": "70605040", "Fax": "30281928", "Email": "info@domicilfa.dk", "Status": 1, "Latitude": 55.40865, "Longitude": 10.3818207, "OpeningHours": [{ "DayOfWeek": "Mandag", "OpeningHours": "Lukket" }, { "DayOfWeek": "Tirsdag", "OpeningHours": "Lukket" }, { "DayOfWeek": "Onsdag", "OpeningHours": "Lukket" }, { "DayOfWeek": "Torsdag", "OpeningHours": "Lukket" }, { "DayOfWeek": "Fredag", "OpeningHours": "Lukket" }, { "DayOfWeek": "Lørdag", "OpeningHours": "Lukket" }, { "DayOfWeek": "Søndag", "OpeningHours": "Lukket" }], "IconInactive": "/images/shopicon_small.png", "IconActive": "/images/shopicon-active_small.png", "SpecialRemarks": null, "HasSpecialRemarks": false }];

function initMap() {
    let myCenter = new google.maps.LatLng(56.2386986, 10.6137411);
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: myCenter
    });

    let markers = [];

    for (let i = 0; i < positions.length; i++) {

        let shop = positions[i];

        let marker = new window.google.maps.Marker({
            position: new window.google.maps.LatLng(shop.Latitude, shop.Longitude),
            title: shop.Name,
            shopId: shop.ShopId
        });

        shop.googleMarker = marker;
        markers.push(marker);
        marker.setMap(map);
        marker.infowindow = new window.google.maps.InfoWindow({
            content: shop.Name
        });

        window.google.maps.event.addListener(marker.infowindow, 'closeclick', function () {
            marker.setIcon(shop.IconInactive);
        });

        let openWindow = () => {
            // attempt to close all markers
            for (var j = 0; j < markers.length; j++) {
                markers[j].infowindow.close();
            }

            marker.infowindow.open(map, marker);
        }

        window.google.maps.event.addListener(marker, 'click', openWindow);
        shop.openWindow = openWindow;
    }
}

function searchMap() {
    var searchterm = $('#searchinput').val();

    let googleSearch = () => findLocationBySearchTerm(searchterm, (response) => {
        if (response.zeroResults) {
            console.log("zero results");
        } else {
            var lat = response.lat();
            var lng = response.lng();
            var R = 6371; // radius of earth in km
            var distances = [];
            var closest = -1;
            for (var i = 0; i < positions.length; i++) {
                var mlat = positions[i].Latitude;
                var mlng = positions[i].Longitude;
                var dLat = rad(mlat - lat);
                var dLong = rad(mlng - lng);
                var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                    Math.cos(rad(lat)) * Math.cos(rad(lat)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
                var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                var d = R * c;
                distances[i] = d;
                if (closest == -1 || d < distances[closest]) {
                    closest = i;
                }

                //var orgPos = new google.maps.LatLng({ lat: response.lat(), lng: response.lng() });
                //var closest = new google.maps.LatLng({ lat: positions[closest].Latitude, lng: positions[closest].Longitude });

                //zoomToBound(orgPos, closest);

                zoom({lat: positions[closest].Latitude, lng: positions[closest].Longitude});
            }
        }
    });

    googleSearch(searchterm);
}

function rad(x) { return x * Math.PI / 180; }

function findLocationBySearchTerm(searchTerm, callback, countryCode = 'dk', zoomLevel = 14) {
    var geocoder = new google.maps.Geocoder();
    codeAddress(map, geocoder, searchTerm + " " + countryCode, callback);
}

function codeAddress(map, geocoder, address, callback) {
    geocoder.geocode({ "address": address }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            var position = results[0].geometry.location;
            map.setCenter(position);
            map.setZoom(map.getZoom() + 1);
            callback(position);
        } else {
            if (status === 'ZERO_RESULTS') {
                callback({
                    zeroResults: true
                });
            }
        }
    });
}

function zoomToBound(position, closest) {
    var bounds = new google.maps.LatLngBounds();
    bounds.extend(position);
    bounds.extend(closest);
    map.fitBounds(bounds);
}

function zoom(position, zoomLevel = 14) {
    zoomToPosition(map, position, zoomLevel);
}

function zoomToPosition(map, position, zoomLevel) {
    map.setCenter(position);

    if (typeof zoomLevel !== "undefined") {
        map.setZoom(zoomLevel);
        location.hash = "";
        location.hash = "googleMap";
    }

};