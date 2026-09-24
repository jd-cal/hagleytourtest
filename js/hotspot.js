const params = new URLSearchParams(window.location.search);
const startScene = params.get("scene") || "scene1";
const viewer = pannellum.viewer('viewer', {
    default: {
        firstScene: startScene,
        sceneFadeDuration: 2000
    },
    scenes: scenes
});

// Load information for the starting room for roominfo button
updateInfo(startScene);


function changeScene(event, args) {
    const currentPitch = viewer.getPitch();
    const currentYaw = viewer.getYaw();
    viewer.loadScene(
        args.scene,
        currentPitch,
        currentYaw
    );
    updateInfo(args.scene);
}
