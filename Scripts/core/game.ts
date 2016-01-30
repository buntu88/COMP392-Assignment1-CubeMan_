/// <reference path="_reference.ts"/>

// MAIN GAME FILE

// THREEJS Aliases
import Scene = THREE.Scene;
import Renderer = THREE.WebGLRenderer;
import PerspectiveCamera = THREE.PerspectiveCamera;
import BoxGeometry = THREE.BoxGeometry;
import CubeGeometry = THREE.CubeGeometry;
import PlaneGeometry = THREE.PlaneGeometry;
import SphereGeometry = THREE.SphereGeometry;
import Geometry = THREE.Geometry;
import AxisHelper = THREE.AxisHelper;
import LambertMaterial = THREE.MeshLambertMaterial;
import MeshBasicMaterial = THREE.MeshBasicMaterial;
import Material = THREE.Material;
import Mesh = THREE.Mesh;
import Object3D = THREE.Object3D;
import SpotLight = THREE.SpotLight;
import PointLight = THREE.PointLight;
import AmbientLight = THREE.AmbientLight;
import Control = objects.Control;
import GUI = dat.GUI;
import Color = THREE.Color;
import Vector3 = THREE.Vector3;
import Face3 = THREE.Face3;
import Point = objects.Point;
import CScreen = config.Screen;

//Custom Game Objects
import gameObject = objects.gameObject;

var scene: Scene;
var renderer: Renderer;
var camera: PerspectiveCamera;
var axes: AxisHelper;
var cube1: Mesh;
var plane: Mesh;
var sphere: Mesh;
var ambientLight: AmbientLight;
var spotLight: SpotLight;
var control: Control;
var gui: GUI;
var stats: Stats;
var step: number = 0;
var cubeGeometry1:CubeGeometry;
var cubeMaterial1:LambertMaterial;
var cube2: Mesh;
var cubeGeometry2:CubeGeometry;
var cubeMaterial2:LambertMaterial;
var cube3: Mesh;
var cubeGeometry3:CubeGeometry;
var cubeMaterial3:LambertMaterial;
var cube4: Mesh;
var cubeGeometry4:CubeGeometry;
var cubeMaterial4:LambertMaterial;
var cube5: Mesh;
var cubeGeometry5:CubeGeometry;
var cubeMaterial5:LambertMaterial;
var cube6: Mesh;
var cubeGeometry6:CubeGeometry;
var cubeMaterial6:LambertMaterial;
var cube7: Mesh;
var cubeGeometry7:CubeGeometry;
var cubeMaterial7:LambertMaterial;
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
    plane = new gameObject(
        new PlaneGeometry(16, 16, 1, 1),
        new LambertMaterial({ color: 0xe79b61 }),
        0, 0, 0);

    plane.rotation.x = -0.5 * Math.PI;

    scene.add(plane);
    console.log("Added Plane Primitive to scene...");
    
    // //Add a Cube to the Scene
    // cubeMaterial = new LambertMaterial({color:0x00ff00});
    // cubeGeometry = new CubeGeometry(2, 2, 2);
    // cube = new Mesh(cubeGeometry, cubeMaterial);
    // cube.castShadow = true;
    // cube.receiveShadow = true;
    //     cube.position.x = 0.5;
    //  cube.position.y = 1;
    //   cube.position.z = 0;

    
    // scene.add(cube);
    // console.log("Added Cube Primitive to scene...");
    
    // var xyz = new Object3D();
    cubeGeometry1 = new CubeGeometry(0.6,2,0.6);
	cubeMaterial1 = new LambertMaterial({color:0x00ff00, opacity:0.5});
	cube1 = new Mesh(cubeGeometry1, cubeMaterial1);
	cube1.castShadow = true;
    cube1.position.x = 0.5;
    cube1.position.y = 1;
    cube1.position.z = 0;

	xyz.add(cube1);

	//scene.add(cube1);

    
    	cubeGeometry2 = new CubeGeometry(0.3,1,0.3);
	 cubeMaterial2 = new LambertMaterial({color:0x00ff00, opacity:0.5});
	cube2 = new Mesh(cubeGeometry2, cubeMaterial2);
	cube2.castShadow = true;
    cube2.position.x = -0.5;
     cube2.position.y = 1;
      cube2.position.z = 0;
 
	xyz.add(cube2);
 
	//scene.add(cube2);
 
    
	console.log("Added Cube Primative to scene...");
    
	
    // //Add a Cube to the Scene
	cubeGeometry3 = new CubeGeometry(2, 2, 2);
	 cubeMaterial3 = new LambertMaterial({color:0x00ff00, opacity:0.5});
	cube3= new Mesh(cubeGeometry3, cubeMaterial3);
	cube3.castShadow = true;
        cube3.position.x = 0;
     cube3.position.y = 3;
      cube3.position.z = 0;
 
	xyz.add(cube3);
 
	//scene.add(cube3);
 
	console.log("Added Cube Primative to scene...");
    
    // //Add a Cube to the Scene
	cubeGeometry4 = new CubeGeometry(0.6, 0.6, 0.6);
	 cubeMaterial4 = new LambertMaterial({color:0x00ff00, opacity:0.5});
	cube4= new Mesh(cubeGeometry4, cubeMaterial4);
	cube4.castShadow = true;
        cube4.position.x = 0;
     cube4.position.y = 4.3;
      cube4.position.z = 0;
 
	xyz.add(cube4);
 
	//scene.add(cube4);
 
	console.log("Added Cube Primative to scene...");
    
        // //Add a Cube to the Scene
	cubeGeometry5 = new CubeGeometry(1.2, 1.2, 1.2);
	 cubeMaterial5 = new LambertMaterial({color:0x00ff00, opacity:0.5});
	cube5= new Mesh(cubeGeometry5, cubeMaterial5);
	cube5.castShadow = true;
        cube5.position.x = 0;
     cube5.position.y = 5.1;
      cube5.position.z = 0;
 
	xyz.add(cube5);
 
	//scene.add(cube5);
 
	console.log("Added Cube Primative to scene...");
    
            // //Add a Cube to the Scene
	cubeGeometry6 = new CubeGeometry(1.2, 0.4, 0.4);
	 cubeMaterial6 = new LambertMaterial({color:0x00ff00, opacity:0.5});
	cube6= new Mesh(cubeGeometry6, cubeMaterial6);
	cube6.castShadow = true;
        cube6.position.x = 1.6;
     cube6.position.y = 3.5;
      cube6.position.z = 0;
 
	xyz.add(cube6);
 
	//scene.add(cube6);
 
	console.log("Added Cube Primative to scene...");
            
            // //Add a Cube to the Scene
	cubeGeometry7 = new CubeGeometry(1.2, 0.4, 0.4);
	 cubeMaterial7 = new LambertMaterial({color:0x00ff00, opacity:0.5});
	cube7= new Mesh(cubeGeometry7, cubeMaterial7);
	cube7.castShadow = true;
    cube7.position.x = -1.6;
    cube7.position.y = 3.5;
    cube7.position.z = 0;
 
	xyz.add(cube7);
	console.log("Added Cube Primative to scene...");
    scene.add(xyz);
 
	//scene.add(cube7);
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

function onResize(): void {
    camera.aspect = CScreen.RATIO;
    //camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    //renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setSize(CScreen.WIDTH, CScreen.HEIGHT);
}

function addControl(controlObject: Control): void {
    gui.add(controlObject, 'rotationSpeed',-0.5,0.5);
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
function gameLoop(): void {
    stats.update();

    xyz.rotation.y += control.rotationSpeed;
    
    // render using requestAnimationFrame
    requestAnimationFrame(gameLoop);
	
    // render the scene
    renderer.render(scene, camera);
}

// Setup default renderer
function setupRenderer(): void {
    renderer = new Renderer();
    renderer.setClearColor(0xEEEEEE, 1.0);
    renderer.setSize(CScreen.WIDTH, CScreen.HEIGHT);
    //renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    console.log("Finished setting up Renderer...");
}

// Setup main camera for the scene
function setupCamera(): void {
    camera = new PerspectiveCamera(45, config.Screen.RATIO, 0.1, 1000);
    //camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.x = 0.6;
    camera.position.y = 16;
    camera.position.z = -20.5;
    camera.lookAt(new Vector3(0, 0, 0));
    console.log("Finished setting up Camera...");
}
