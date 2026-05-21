pannellum.viewer('viewer', {
    "default": {
        "firstScene": "scene1",
        "sceneFadeDuration": 1000
    },
    "scenes": {
        "scene1": {
            "title": "first image",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "assets/360images/blendedPanorama.png",
            "hotSpots": [
                {
                    "pitch": 5,
                    "yaw": -30,
                    "type": "scene",
                    "text": "Go to the Kitchen",
                    "sceneId": "scene2" // next scene label
                }
            ]
        },
        "scene2": {
            "title": "second image",
            "hfov": 110,
            "pitch": 0,
            "yaw": 180,
            "type": "equirectangular",
            "panorama": "assets/360images/blendedPanorama2.jpg",
            "hotSpots": [] // next room refer to line 14
        }
    }
});
