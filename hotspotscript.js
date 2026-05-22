const params = new URLSearchParams(window.location.search);

const startScene = params.get("scene") || "scene1";

pannellum.viewer('viewer', {
    "default": {
        "firstScene": startScene,
        "sceneFadeDuration": 2000
    },
    "scenes": {
        "hotSpotDebug": true,
        "scene1": { // sceneId
            "title": "first image",
            "hfov": 110,
            "pitch": 0, // starting position of viewer 0, 0 for centre of image
            "yaw": 0,
            "type": "equirectangular",
            "panorama": "assets/360images/centeredPanorama.jpg",
            "hotSpots": [
                {
                    "pitch": 0,
                    "yaw": 0,
                    "type": "scene",
                    "text": "next scene",
                    "sceneId": "scene2" // next scene label
                }
            ]
        },
        "scene2" : {  
            "title": "second image",
            "hfov": 110,
            "pitch": 0, //whatever the hotspot pitch and yaw is to the prior image
            "yaw": 0,
            "type": "equirectangular",
            "panorama": "assets/360images/centeredPanorama2.jpg",
            "hotSpots": [] // next room refer to line 19
        },
    }
});
