const scenes = {
scene1: {
    title: "Kitchen",
    hfov:110,
    pitch:0,
    yaw:0,
    type:"equirectangular",
    panorama:
    "assets/test360images/centeredPanorama.jpg",
    hotSpots:[// specifically for waypoints to next scene not to be confused with points in info.js
        {
            pitch:0,
            yaw:0,
            type:"scene",
            text:"Walk to LEGO room",
            sceneId:"scene2"
        }
    ]
},

// preorient pitch and yaw every hotspot (make the centreline the next hotspot) to make the code simpler since all images arent matched to the degree
scene2: {
    title:"LEGO Room",
    hfov:110,
    pitch:10,
    yaw:50,
    type:"equirectangular",
    panorama:
    "assets/test360images/centeredPanorama2.jpg",
    hotSpots:[]
}
};