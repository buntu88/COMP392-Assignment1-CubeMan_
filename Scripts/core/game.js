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
var cube11;
var cubeGeometry11;
var cubeMaterial11;
var cube12;
var cubeGeometry12;
var cubeMaterial12;
var cube13;
var cubeGeometry13;
var cubeMaterial13;
var xyz = new Object3D;
function init() {
    // Instantiate a new Scene object
    scene = new Scene();
    setupRenderer(); // setup the default renderer
    setupCamera(); // setup the camera
    // add an axis helper to the scene
    axes = new AxisHelper(15);
    scene.add(axes);
    console.log("Added Axis Helper to scene...");
    //Add a Plane to the Scene
    plane = new gameObject(new PlaneGeometry(19, 19, 1, 1), new LambertMaterial({ color: 0xffd480 }), 0, -3, 0);
    plane.rotation.x = -0.5 * Math.PI;
    scene.add(plane);
    console.log("Added Plane Primitive to scene...");
    //Add a Shoes to the Scene
    cubeGeometry1 = new CubeGeometry(0.6, 0.3, 1.2);
    cubeMaterial1 = new LambertMaterial({ color: 0x000000, opacity: 1 });
    cube1 = new Mesh(cubeGeometry1, cubeMaterial1);
    cube1.castShadow = true;
    cube1.position.x = 0.5;
    cube1.position.y = 0.15 - 3;
    cube1.position.z = 0.3;
    xyz.add(cube1);
    cubeGeometry2 = new CubeGeometry(0.6, 0.3, 1.2);
    cubeMaterial2 = new LambertMaterial({ color: 0x000000, opacity: 1 });
    cube2 = new Mesh(cubeGeometry2, cubeMaterial2);
    cube2.castShadow = true;
    cube2.position.x = -0.5;
    cube2.position.y = 0.15 - 3;
    cube2.position.z = 0.3;
    xyz.add(cube2);
    //Add a Pants to the Scene
    cubeGeometry3 = new CubeGeometry(0.6, 2, 0.6);
    cubeMaterial3 = new LambertMaterial({ color: 0x4d3300, opacity: 1 });
    cube3 = new Mesh(cubeGeometry3, cubeMaterial3);
    cube3.castShadow = true;
    cube3.position.x = 0.5;
    cube3.position.y = 1.3 - 3;
    cube3.position.z = 0;
    xyz.add(cube3);
    cubeGeometry4 = new CubeGeometry(0.6, 2, 0.6);
    cubeMaterial4 = new LambertMaterial({ color: 0x4d3300, opacity: 1 });
    cube4 = new Mesh(cubeGeometry4, cubeMaterial4);
    cube4.castShadow = true;
    cube4.position.x = -0.5;
    cube4.position.y = 1.3 - 3;
    cube4.position.z = 0;
    xyz.add(cube4);
    cubeGeometry5 = new CubeGeometry(2, 0.3, 1.2);
    cubeMaterial5 = new LambertMaterial({ color: 0x4d3300, opacity: 1 });
    cube5 = new Mesh(cubeGeometry5, cubeMaterial5);
    cube5.castShadow = true;
    cube5.position.x = 0;
    cube5.position.y = 2.45 - 3;
    cube5.position.z = 0.3;
    xyz.add(cube5);
    //Add a Shirt to the Scene
    cubeGeometry6 = new CubeGeometry(2, 2, 1.2);
    cubeMaterial6 = new LambertMaterial({ color: 0x99ccff, opacity: 1 });
    cube6 = new Mesh(cubeGeometry6, cubeMaterial6);
    cube6.castShadow = true;
    cube6.position.x = 0;
    cube6.position.y = 3.6 - 3;
    cube6.position.z = 0.3;
    xyz.add(cube6);
    cubeGeometry7 = new CubeGeometry(1.5, 0.4, 0.4);
    cubeMaterial7 = new LambertMaterial({ color: 0x99ccff, opacity: 1 });
    cube7 = new Mesh(cubeGeometry7, cubeMaterial7);
    cube7.castShadow = true;
    cube7.position.x = 1.75;
    cube7.position.y = 4.4 - 3;
    cube7.position.z = 0;
    xyz.add(cube7);
    cubeGeometry8 = new CubeGeometry(1.5, 0.4, 0.4);
    cubeMaterial8 = new LambertMaterial({ color: 0x99ccff, opacity: 1 });
    cube8 = new Mesh(cubeGeometry8, cubeMaterial8);
    cube8.castShadow = true;
    cube8.position.x = -1.75;
    cube8.position.y = 4.4 - 3;
    cube8.position.z = 0;
    xyz.add(cube8);
    //Add a Neck to the Scene
    cubeGeometry9 = new CubeGeometry(0.6, 0.6, 0.6);
    cubeMaterial9 = new LambertMaterial({ color: 0xffcc99, opacity: 1 });
    cube9 = new Mesh(cubeGeometry9, cubeMaterial9);
    cube9.castShadow = true;
    cube9.position.x = 0;
    cube9.position.y = 4.9 - 3;
    cube9.position.z = 0;
    xyz.add(cube9);
    //Add a Head to the Scene
    cubeGeometry10 = new CubeGeometry(1.2, 1.2, 1.2);
    cubeMaterial10 = new LambertMaterial({ color: 0xffcc99, opacity: 1 });
    cube10 = new Mesh(cubeGeometry10, cubeMaterial10);
    cube10.castShadow = true;
    cube10.position.x = 0;
    cube10.position.y = 5.8 - 3;
    cube10.position.z = 0.2;
    xyz.add(cube10);
    //Add a Eyes to the Scene  
    cubeGeometry11 = new CubeGeometry(0.1, 0.1, 0.01);
    cubeMaterial11 = new LambertMaterial({ color: 0x000000, opacity: 1 });
    cube11 = new Mesh(cubeGeometry11, cubeMaterial11);
    cube11.castShadow = true;
    cube11.position.x = 0.25;
    cube11.position.y = 6.1 - 3;
    cube11.position.z = 0.82;
    xyz.add(cube11);
    cubeGeometry12 = new CubeGeometry(0.1, 0.1, 0.01);
    cubeMaterial12 = new LambertMaterial({ color: 0x000000, opacity: 1 });
    cube12 = new Mesh(cubeGeometry12, cubeMaterial12);
    cube12.castShadow = true;
    cube12.position.x = -0.25;
    cube12.position.y = 6.1 - 3;
    cube12.position.z = 0.82;
    xyz.add(cube12);
    //Add a Mouth to the Scene
    cubeGeometry13 = new CubeGeometry(0.3, 0.02, 0.01);
    cubeMaterial13 = new LambertMaterial({ color: 0x000000, opacity: 1 });
    cube13 = new Mesh(cubeGeometry13, cubeMaterial13);
    cube13.castShadow = true;
    cube13.position.x = 0;
    cube13.position.y = 5.5 - 3;
    cube13.position.z = 0.82;
    xyz.add(cube13);
    scene.add(xyz);
    console.log("Added Cube Primative to scene...");
    // Add an AmbientLight to the scene
    ambientLight = new AmbientLight(0x222222);
    scene.add(ambientLight);
    console.log("Added an Ambient Light to Scene");
    // Add a SpotLight to the scene
    spotLight = new SpotLight(0xffffff);
    spotLight.position.set(40, 60 - 3, 40);
    //spotLight.rotation.set(-0.71, -1.2,-0.44);
    spotLight.lookAt(new Vector3(0, 5.8 - 3, 0));
    spotLight.castShadow = true;
    scene.add(spotLight);
    console.log("Added a SpotLight Light to Scene");
    // add controls
    gui = new GUI();
    control = new Control(0.00, 0.00, 0.00, cubeMaterial9.color.getHex(), cubeMaterial7.color.getHex(), cubeMaterial4.color.getHex(), cubeMaterial1.color.getHex(), cubeMaterial13.color.getHex());
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
    gui.add(controlObject, 'rotationSpeedx', -0.5, 0.5);
    gui.add(controlObject, 'rotationSpeedy', -0.5, 0.5);
    gui.add(controlObject, 'rotationSpeedz', -0.5, 0.5);
    gui.addColor(controlObject, 'skinColor');
    gui.addColor(controlObject, 'shirtColor');
    gui.addColor(controlObject, 'pantColor');
    gui.addColor(controlObject, 'bootColor');
    gui.addColor(controlObject, 'eyesColor');
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
    // render using requestAnimationFrame
    requestAnimationFrame(gameLoop);
    xyz.rotation.x += control.rotationSpeedx;
    xyz.rotation.y += control.rotationSpeedy;
    xyz.rotation.z += control.rotationSpeedz;
    cube1.material.color = new Color(control.bootColor);
    cube2.material.color = new Color(control.bootColor);
    cube3.material.color = new Color(control.pantColor);
    cube4.material.color = new Color(control.pantColor);
    cube5.material.color = new Color(control.pantColor);
    cube6.material.color = new Color(control.shirtColor);
    cube7.material.color = new Color(control.shirtColor);
    cube8.material.color = new Color(control.shirtColor);
    cube9.material.color = new Color(control.skinColor);
    cube10.material.color = new Color(control.skinColor);
    cube11.material.color = new Color(control.eyesColor);
    cube12.material.color = new Color(control.eyesColor);
    cube13.material.color = new Color(control.eyesColor);
    // render the scene
    renderer.render(scene, camera);
}
// Setup default renderer
function setupRenderer() {
    renderer = new Renderer();
    renderer.setClearColor(0x555555, 1.0);
    renderer.setSize(CScreen.WIDTH, CScreen.HEIGHT);
    //renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    console.log("Finished setting up Renderer...");
}
// Setup main camera for the scene
function setupCamera() {
    camera = new PerspectiveCamera(45, config.Screen.RATIO, 0.1, 1000);
    //camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.x = 0;
    camera.position.y = 16 - 3;
    camera.position.z = 15;
    //camera.position.z = 17.98061;
    camera.lookAt(new Vector3(0, 0 - 3, 0));
    console.log("Finished setting up Camera...");
}
//# sourceMappingURL=game.js.map