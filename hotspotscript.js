// js script for panorama navigation like google maps through hotspot buttons might redo later with clickable floors instead
const params = new URLSearchParams(window.location.search);
const startScene = params.get("scene") || "scene1";
const viewer = pannellum.viewer('viewer', {
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
                    "pitch": 0, //position of the hotspot next scene button
                    "yaw": 0,
                    "type": "scene",
                    "text": "walk to next scene", 
                    "clickHandlerFunc": changeScene,
                    "clickHandlerArgs": {
                        "scene": "scene2"// next scene label
                    }
                }
            ]
        },
        "scene2" : {
            "title": "second image",
            "hfov": 110,
            "pitch": 10, //the pitch and yaw of the scene when selected from map.html instead of through the hotspot
            "yaw": 50,
            "type": "equirectangular",
            "panorama": "assets/360images/centeredPanorama2.jpg",
            "hotSpots": [] // next room refer to line 20 for reference
        }
    }
});

//function to record the current pitch and yaw and apply it to the next scene
function changeScene(event, args) {
    const currentPitch = viewer.getPitch();
    const currentYaw = viewer.getYaw();
    viewer.loadScene(
        args.scene,
        currentPitch,
        currentYaw
    );
}