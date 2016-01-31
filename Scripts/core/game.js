/// <reference path="_reference.ts"/>
// MAIN GAME FILE
// THREEJS Aliases
var Scene = THREE.Scene;
var Renderer = THREE.WebGLRenderer;
var PerspectiveCamera = THREE.PerspectiveCamera;
var BoxGeometry = THREE.BoxGeometry;
var CubeGeometry = THREE.CubeGeometry;
var PlaneGeometry = THREE.PlaneGeometry;
var SphereGeometry = THREE.SphereGeometry;
var Geometry = THREE.Geometry;
var AxisHelper = THREE.AxisHelper;
var LambertMaterial = THREE.MeshLambertMaterial;
var MeshBasicMaterial = THREE.MeshBasicMaterial;
var Material = THREE.Material;
var Mesh = THREE.Mesh;
var Object3D = THREE.Object3D;
var SpotLight = THREE.SpotLight;
var PointLight = THREE.PointLight;
var AmbientLight = THREE.AmbientLight;
var Control = objects.Control;
var GUI = dat.GUI;
var Color = THREE.Color;
var Vector3 = THREE.Vector3;
var Face3 = THREE.Face3;
var Point = objects.Point;
var CScreen = config.Screen;
//Custom Game Objects
var gameObject = objects.gameObject;
var scene;
var renderer;
var camera;
var axes;
var cube1;
var plane;
var sphere;
var ambientLight;
var spotLight;
var control;
var gui;
var stats;
var step = 0;
var cubeGeometry1;
var cubeMaterial1;
var cube2;
var cubeGeometry2;
var cubeMaterial2;
var cube3;
var cubeGeometry3;
var cubeMaterial3;
var cube4;
var cubeGeometry4;
var cubeMaterial4;
var cube5;
var cubeGeometry5;
var cubeMaterial5;
var cube6;
var cubeGeometry6;
var cubeMaterial6;
var cube7;
var cubeGeometry7;
var cubeMaterial7;
var cube8;
var cubeGeometry8;
var cubeMaterial8;
var cube9;
var cubeGeometry9;
var cubeMaterial9;
var cube10;
var cubeGeometry10;
var cubeMaterial10;
var xyz = new Object3D;
function init() {
    // Instantiate a new Scene object
    scene = new Scene();
    setupRenderer(); // setup the default renderer
    setupCamera(); // setup the camera
    // add an axis helper to the scene
    axes = new AxisHelper(10);
    scene.add(axes);
    console.log("Added Axis Helper to scene...");
    //Add a Plane to the Scene
    plane = new gameObject(new PlaneGeometry(16, 16, 1, 1), new LambertMaterial({ color: 0xe79b61 }), 0, 0, 0);
    plane.rotation.x = -0.5 * Math.PI;
    scene.add(plane);
    console.log("Added Plane Primitive to scene...");
    // //Add a Cube to the Scene
    cubeGeometry1 = new CubeGeometry(0.6, 0.3, 1.2);
    cubeMaterial1 = new LambertMaterial({ color: 0x00ff00, opacity: 1 });
    cube1 = new Mesh(cubeGeometry1, cubeMaterial1);
    cube1.castShadow = true;
    cube1.position.x = 0.5;
    cube1.position.y = 0.15;
    cube1.position.z = 0.3;
    xyz.add(cube1);
    cubeGeometry2 = new CubeGeometry(0.6, 0.3, 1.2);
    cubeMaterial2 = new LambertMaterial({ color: 0x00ff00, opacity: 1 });
    cube2 = new Mesh(cubeGeometry2, cubeMaterial2);
    cube2.castShadow = true;
    cube2.position.x = -0.5;
    cube2.position.y = 0.15;
    cube2.position.z = 0.3;
    xyz.add(cube2);
    cubeGeometry3 = new CubeGeometry(0.6, 2, 0.6);
    cubeMaterial3 = new LambertMaterial({ color: 0x00ff00, opacity: 1 });
    cube3 = new Mesh(cubeGeometry3, cubeMaterial3);
    cube3.castShadow = true;
    cube3.position.x = 0.5;
    cube3.position.y = 1.3;
    cube3.position.z = 0;
    xyz.add(cube3);
    cubeGeometry4 = new CubeGeometry(0.6, 2, 0.6);
    cubeMaterial4 = new LambertMaterial({ color: 0x00ff00, opacity: 1 });
    cube4 = new Mesh(cubeGeometry4, cubeMaterial4);
    cube4.castShadow = true;
    cube4.position.x = -0.5;
    cube4.position.y = 1.3;
    cube4.position.z = 0;
    xyz.add(cube4);
    cubeGeometry5 = new CubeGeometry(2, 0.3, 1.2);
    cubeMaterial5 = new LambertMaterial({ color: 0x00ff00, opacity: 1 });
    cube5 = new Mesh(cubeGeometry5, cubeMaterial5);
    cube5.castShadow = true;
    cube5.position.x = 0;
    cube5.position.y = 2.45;
    cube5.position.z = 0.3;
    xyz.add(cube5);
    cubeGeometry6 = new CubeGeometry(2, 2, 1.2);
    cubeMaterial6 = new LambertMaterial({ color: 0x00ff00, opacity: 1 });
    cube6 = new Mesh(cubeGeometry6, cubeMaterial6);
    cube6.castShadow = true;
    cube6.position.x = 0;
    cube6.position.y = 3.6;
    cube6.position.z = 0.3;
    xyz.add(cube6);
    cubeGeometry7 = new CubeGeometry(0.4, 1.8, 0.4);
    cubeMaterial7 = new LambertMaterial({ color: 0x00ff00, opacity: 1 });
    cube7 = new Mesh(cubeGeometry7, cubeMaterial7);
    cube7.castShadow = true;
    cube7.position.x = 1.2;
    cube7.position.y = 3.7;
    cube7.position.z = 0;
    xyz.add(cube7);
    cubeGeometry8 = new CubeGeometry(0.4, 1.8, 0.4);
    cubeMaterial8 = new LambertMaterial({ color: 0x00ff00, opacity: 1 });
    cube8 = new Mesh(cubeGeometry8, cubeMaterial8);
    cube8.castShadow = true;
    cube8.position.x = -1.2;
    cube8.position.y = 3.7;
    cube8.position.z = 0;
    xyz.add(cube8);
    cubeGeometry9 = new CubeGeometry(0.6, 0.6, 0.6);
    cubeMaterial9 = new LambertMaterial({ color: 0x00ff00, opacity: 1 });
    cube9 = new Mesh(cubeGeometry9, cubeMaterial9);
    cube9.castShadow = true;
    cube9.position.x = 0;
    cube9.position.y = 4.9;
    cube9.position.z = 0;
    xyz.add(cube9);
    cubeGeometry10 = new CubeGeometry(1.2, 1.2, 1.2);
    cubeMaterial10 = new LambertMaterial({ color: 0x00ff00, opacity: 1 });
    cube10 = new Mesh(cubeGeometry10, cubeMaterial10);
    cube10.castShadow = true;
    cube10.position.x = 0;
    cube10.position.y = 5.8;
    cube10.position.z = 0.2;
    xyz.add(cube10);
    scene.add(xyz);
    console.log("Added Cube Primative to scene...");
    // Add an AmbientLight to the scene
    ambientLight = new AmbientLight(0x090909);
    scene.add(ambientLight);
    console.log("Added an Ambient Light to Scene");
    // Add a SpotLight to the scene
    spotLight = new SpotLight(0xffffff);
    spotLight.position.set(5.6, 23.1, 5.4);
    spotLight.rotation.set(-0.8, 42.7, 19.5);
    spotLight.castShadow = true;
    scene.add(spotLight);
    console.log("Added a SpotLight Light to Scene");
    // add controls
    gui = new GUI();
    control = new Control(0.05);
    addControl(control);
    // Add framerate stats
    addStatsObject();
    console.log("Added Stats to scene...");
    document.body.appendChild(renderer.domElement);
    gameLoop(); // render the scene	
    window.addEventListener('resize', onResize, false);
}
function onResize() {
    camera.aspect = CScreen.RATIO;
    //camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    //renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setSize(CScreen.WIDTH, CScreen.HEIGHT);
}
function addControl(controlObject) {
    gui.add(controlObject, 'rotationSpeed', -0.5, 0.5);
}
function addStatsObject() {
    stats = new Stats();
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);
}
// Setup main game loop
function gameLoop() {
    stats.update();
    xyz.rotation.y += control.rotationSpeed;
    // render using requestAnimationFrame
    requestAnimationFrame(gameLoop);
    // render the scene
    renderer.render(scene, camera);
}
// Setup default renderer
function setupRenderer() {
    renderer = new Renderer();
    renderer.setClearColor(0xEEEEEE, 1.0);
    renderer.setSize(CScreen.WIDTH, CScreen.HEIGHT);
    //renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    console.log("Finished setting up Renderer...");
}
// Setup main camera for the scene
function setupCamera() {
    camera = new PerspectiveCamera(45, config.Screen.RATIO, 0.1, 1000);
    //camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.x = 0.6;
    camera.position.y = 16;
    camera.position.z = -20.5;
    camera.lookAt(new Vector3(0, 0, 0));
    console.log("Finished setting up Camera...");
}
//# sourceMappingURL=game.js.map