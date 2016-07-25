/**
 * Created by Mergen on 25.07.2016.
 */
var windowWidth, windowHeight;

window.addEventListener("resize", setPositions);

setPositions()

function setPositions() {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;

    $("#incipanorama").width(windowWidth + "px").height(windowHeight + "px");

    $("#plans").css('left', windowWidth - 420 + "px");
}

$( function() {
    $( "#accordion" ).accordion();
} );

pannellum.viewer('incipanorama', {
    "default": {
        "autoLoad": true,
        "firstScene": "antre",
        "author": "Başkent 360",
        "sceneFadeDuration": 1000
    },

    "scenes": {
        "antre": {
            "title": "Antre",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "img/antre.jpg",
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 100,
                    "type": "scene",
                    "text": "Salon",
                    "sceneId": "salon"
                },

                {
                    "pitch": -5,
                    "yaw": -105,
                    "type": "scene",
                    "text": "Mutfak",
                    "sceneId": "mutfak"
                },

                {
                    "pitch": -8,
                    "yaw": 4,
                    "type": "scene",
                    "text": "Oda 1",
                    "sceneId": "oda1"
                },

                {
                    "pitch": -4,
                    "yaw": 2,
                    "type": "scene",
                    "text": "Oda 2",
                    "sceneId": "oda2"
                },

                {
                    "pitch": -2,
                    "yaw": -3,
                    "type": "scene",
                    "text": "Kış Bahçesi",
                    "sceneId": "kis"
                },

                {
                    "pitch": -2,
                    "yaw": -8,
                    "type": "scene",
                    "text": "Yatak Odası",
                    "sceneId": "yatak"
                },

                {
                    "pitch": -7,
                    "yaw": -10,
                    "type": "scene",
                    "text": "Banyo",
                    "sceneId": "banyo"
                }


            ]
        },

        "salon": {
            "title": "Salon",
            "hfov": 110,
            "yaw": 5,
            "type": "equirectangular",
            "panorama": "img/salon.jpg",
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": -110,
                    "type": "scene",
                    "text": "Antre",
                    "sceneId": "antre",
                    "targetYaw": -23,
                    "targetPitch": 2
                }
            ]
        },

        "mutfak": {
            "title": "Mutfak",
            "hfov": 110,
            "yaw": 5,
            "type": "equirectangular",
            "panorama": "img/mutfak.jpg",
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": -120,
                    "type": "scene",
                    "text": "Antre",
                    "sceneId": "antre",
                    "targetYaw": -23,
                    "targetPitch": 2
                }
            ]
        },

        "oda1": {
            "title": "Oda 1",
            "hfov": 110,
            "yaw": 25,
            "type": "equirectangular",
            "panorama": "img/oda_1.jpg",
            "hotSpots": [
                {
                    "pitch": -5,
                    "yaw": -70,
                    "type": "scene",
                    "text": "Antre",
                    "sceneId": "antre",
                    "targetYaw": -23,
                    "targetPitch": 2
                }
            ]
        },

        "oda2": {
            "title": "Oda 2",
            "hfov": 110,
            "yaw": 5,
            "type": "equirectangular",
            "panorama": "img/oda_2.jpg",
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": -173,
                    "type": "scene",
                    "text": "Antre",
                    "sceneId": "antre",
                    "targetYaw": -23,
                    "targetPitch": 2
                }
            ]
        },

        "kis": {
            "title": "Kış Bahçesi",
            "hfov": 110,
            "yaw": 5,
            "type": "equirectangular",
            "panorama": "img/kis_bahcesi.jpg",
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": -70,
                    "type": "scene",
                    "text": "Antre",
                    "sceneId": "antre",
                    "targetYaw": -23,
                    "targetPitch": 2
                }
            ]
        },

        "yatak": {
            "title": "Yatak Odası",
            "hfov": 110,
            "yaw": 5,
            "type": "equirectangular",
            "panorama": "img/yatak_odasi.jpg",
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 60,
                    "type": "scene",
                    "text": "Antre",
                    "sceneId": "antre",
                    "targetYaw": -23,
                    "targetPitch": 2
                }
            ]
        },

        "banyo": {
            "title": "Banyo",
            "hfov": 110,
            "yaw": 5,
            "type": "equirectangular",
            "panorama": "img/banyo.jpg",
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 137,
                    "type": "scene",
                    "text": "Antre",
                    "sceneId": "antre",
                    "targetYaw": -23,
                    "targetPitch": 2
                }
            ]
        }
    }
});