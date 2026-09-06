const sceneInfo = {
    scene1: {
        name: "Kitchen",
        description:
            "A kitchenette area inside Wainuku.",
        points: [
            {
                name: "Light Switch",
                description: "Information about the light switch.",
                pitch: 0,//contains position of the hotspot in the scene (x for pitch ,y for yaw), this is used to display information about the hotspot when clicked
                yaw: 90
            },
            {
                name: "Kitchen Area",
                description: "Information about this part of the kitchen.",
                pitch: 0,
                yaw: -45
            }
        ]
    },
    scene2: {
        name: "LEGO Room",
        description:
            "A creative learning space.",
        points: [
            {
                name: "LEGO Display",
                description: "Information about the LEGO learning area.",

                pitch: 5,
                yaw: 120
            }
        ]
    }
};
//func for update info panel for viewer variable in hotspot.js
function updateInfo(sceneID) {
    const scene = sceneInfo[sceneID];
    document.getElementById("roomName").textContent =
        scene.name;
    document.getElementById("roomDescription").textContent =
        scene.description;
    const pointButtons =
        document.getElementById("pointButtons");
    pointButtons.innerHTML = "";
    if (scene.points) {
        scene.points.forEach(point => {
            const button =
                document.createElement("button");
            button.textContent = point.name;
            button.className = "pointButton";
            button.addEventListener("click", function() {
                viewer.lookAt(
                    point.pitch,
                    point.yaw,
                    1000
                );
            });
            pointButtons.appendChild(button);
        });
    }
}