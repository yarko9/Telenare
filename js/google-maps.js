function initMap() {
    const homePosition = {lat: 47.625447, lng: -122.339359};
    const airportPosition = {lat: 47.628447, lng: -122.342359};
    const trainPosition = {lat: 47.624447, lng: -122.335359}
    let opt = {
        center: {lat:47.626500, lng:-122.339359},
        zoom: 16,
        disableDefaultUI: true,
                styles: [
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#e9e9e9"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f5f5f5"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 29
                },
                {
                    "weight": 0.2
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 18
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f5f5f5"
                },
                {
                    "lightness": 21
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#dedede"
                },
                {
                    "lightness": 21
                }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "saturation": 36
                },
                {
                    "color": "#333333"
                },
                {
                    "lightness": 40
                }
            ]
        },
        {
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f2f2f2"
                },
                {
                    "lightness": 19
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#fefefe"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#fefefe"
                },
                {
                    "lightness": 17
                },
                {
                    "weight": 1.2
                }
            ]
        }
    ]
    };

    let iconTrain = {
        url:"https://image.flaticon.com/icons/svg/60/60812.svg",
        scaledSize: new google.maps.Size(50,50),
        origin: new google.maps.Point(0,0),
        anchor: new google.maps.Point(0,0)
    };

    let iconHouse = {
        url:"https://image.flaticon.com/icons/svg/25/25694.svg",
        scaledSize: new google.maps.Size(50,50),
        origin: new google.maps.Point(0,0),
        anchor: new google.maps.Point(0,0)
    };
    

    let iconAirport = {
        url:"https://image.flaticon.com/icons/svg/723/723955.svg",
        scaledSize: new google.maps.Size(50,50),
        origin: new google.maps.Point(0,0),
        anchor: new google.maps.Point(0,0)
    };

    let currentMap = new google.maps.Map(document.getElementById("map-current"), opt);

    const markerHouse = new google.maps.Marker({
        position: homePosition,
        map: currentMap,
        title: "This property",

        icon: iconHouse
    });

    const markerAirport = new google.maps.Marker({
        position: airportPosition,
        map: currentMap,
        title: "Seattle Airport",

        icon: iconAirport
    });
   
    const markerTrainstation = new google.maps.Marker({
        position: trainPosition,
        map: currentMap,
        title: "Seattle Trainstation",

        icon: iconTrain
    });

    const info = new google.maps.InfoWindow({
        content: '<p>THIS PROPERTY</p>'
    });

    markerHouse.addListener("click", function() {
        info.open(currentMap, markerHouse);
    })

    let panorama = new google.maps.StreetViewPanorama(
        document.getElementById('pano'), {
            position: homePosition,
            pov: {
                heading: 34,
                pitch: 10
            },
            linksControl: false,
            panControl: false,
            addressControl: false,
            enableCloseButton: false,
            zoomControl: false,
            fullScreenControl: false,
            enableCloseButton: false,
            addressControlOptions: {
            position: google.maps.ControlPosition.BOTTOM_CENTER
            }
        });
        currentMap.setStreetView(panorama);
    
    const houseCoordinates = {
        house1: {lat: 47.613000, lng: -122.342335},
        house2: {lat: 47.614447, lng: -122.348359},
        house3: {lat: 47.615447, lng: -122.350359},
        house4: {lat: 47.616447, lng: -122.344359}
    }

    const houseInfo = {
        house1: '<h3>$3.600.000</h3><p>2131 2nd Ave Seattle, WA 98121</p> ',
        house2: '<h3>$4.600.000</h3><p>4561 1nd Ave Seattle, WA 98121</p> ',
        house3: '<h3>$5.600.000</h3><p>2710 5nd Ave Seattle, WA 98121</p> ',
        house4: '<h3>$6.600.000</h3><p>9746 7nd Ave Seattle, WA 98121</p> '
    }

    const options = {
        center: {lat: 47.615000, lng: -122.346335},
        zoom: 16,
        disableDefaultUI: true,
                styles: [
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#e9e9e9"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f5f5f5"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 29
                },
                {
                    "weight": 0.2
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 18
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f5f5f5"
                },
                {
                    "lightness": 21
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#dedede"
                },
                {
                    "lightness": 21
                }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "saturation": 36
                },
                {
                    "color": "#333333"
                },
                {
                    "lightness": 40
                }
            ]
        },
        {
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f2f2f2"
                },
                {
                    "lightness": 19
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#fefefe"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#fefefe"
                },
                {
                    "lightness": 17
                },
                {
                    "weight": 1.2
                }
            ]
        }
    ]
    };

    let proposedMap = new google.maps.Map(document.getElementById("map-otherhouses"), options);

    const markerHouse1 = new google.maps.Marker({
        position: houseCoordinates.house1,
        map: proposedMap,
        title: "3.600.000",
        icon: iconHouse
    });

    const markerHouse2 = new google.maps.Marker({
        position: houseCoordinates.house2,
        map: proposedMap,
        title: "$ 4.600.000",
        icon: iconHouse
    });
   
    const markerHouse3 = new google.maps.Marker({
        position: houseCoordinates.house3,
        map: proposedMap,
        title: "$ 5.600.000",
        icon: iconHouse
    });

    const markerHouse4 = new google.maps.Marker({
        position: houseCoordinates.house4,
        map: proposedMap,
        title: "$ 6.600.000",
        icon: iconHouse
    });

    let info1 = new google.maps.InfoWindow({
        content: houseInfo.house1
    });

    markerHouse1.addListener("click", function() {
        info1.open(proposedMap, markerHouse1);
    });

    let info2 = new google.maps.InfoWindow({
        content: houseInfo.house2
    });

    markerHouse2.addListener("click", function() {
        info2.open(proposedMap, markerHouse2);
    });

    let info3 = new google.maps.InfoWindow({
        content: houseInfo.house3
    });

    markerHouse3.addListener("click", function() {
        info3.open(proposedMap, markerHouse3);
    });

    let info4 = new google.maps.InfoWindow({
        content: houseInfo.house4
    });

    markerHouse4.addListener("click", function() {
        info4.open(proposedMap, markerHouse4);
    });
}