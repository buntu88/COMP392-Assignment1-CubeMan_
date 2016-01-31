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
var cube8: Mesh;
var cubeGeometry8:CubeGeometry;
var cubeMaterial8:LambertMaterial;
var cube9: Mesh;
var cubeGeometry9:CubeGeometry;
var cubeMaterial9:LambertMaterial;
var cube10: Mesh;
var cubeGeometry10:CubeGeometry;
var cubeMaterial10:LambertMaterial;
var cube11: Mesh;
var cubeGeometry11:CubeGeometry;
var cubeMaterial11:LambertMaterial;
var cube12: Mesh;
var cubeGeometry12:CubeGeometry;
var cubeMaterial12:LambertMaterial;
var cube13: Mesh;
var cubeGeometry13:CubeGeometry;
var cubeMaterial13:LambertMaterial;
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
    plane = new gameObject(
        new PlaneGeometry(19, 19, 1, 1),
        new LambertMaterial({ color: 0xffd480 }),
        0, 0, 0);

    plane.rotation.x = -0.5 * Math.PI;

    scene.add(plane);
    console.log("Added Plane Primitive to scene...");
    
    // //Add a Cube to the Scene

    cubeGeometry1 = new CubeGeometry(0.6,0.3,1.2);
	cubeMaterial1 = new LambertMaterial({color:0x000000, opacity:1});
	cube1 = new Mesh(cubeGeometry1, cubeMaterial1);
	cube1.castShadow = true;
    cube1.position.x = 0.5;
    cube1.position.y = 0.15;
    cube1.position.z = 0.3;
	xyz.add(cube1);


    cubeGeometry2 = new CubeGeometry(0.6,0.3,1.2);
	cubeMaterial2 = new LambertMaterial({color:0x000000, opacity:1});
	cube2 = new Mesh(cubeGeometry2, cubeMaterial2);
	cube2.castShadow = true;
    cube2.position.x = -0.5;
    cube2.position.y = 0.15;
    cube2.position.z = 0.3;
	xyz.add(cube2);

    
    cubeGeometry3 = new CubeGeometry(0.6,2,0.6);
	cubeMaterial3 = new LambertMaterial({color:0x4d3300, opacity:1});
	cube3 = new Mesh(cubeGeometry3, cubeMaterial3);
	cube3.castShadow = true;
    cube3.position.x = 0.5;
    cube3.position.y = 1.3;
    cube3.position.z = 0;
	xyz.add(cube3);


    cubeGeometry4 = new CubeGeometry(0.6,2,0.6);
	cubeMaterial4 = new LambertMaterial({color:0x4d3300, opacity:1});
	cube4 = new Mesh(cubeGeometry4, cubeMaterial4);
	cube4.castShadow = true;
    cube4.position.x = -0.5;
    cube4.position.y = 1.3;
    cube4.position.z = 0;
	xyz.add(cube4);    
    
    cubeGeometry5 = new CubeGeometry(2,0.3,1.2);
	cubeMaterial5 = new LambertMaterial({color:0x4d3300, opacity:1});
	cube5 = new Mesh(cubeGeometry5, cubeMaterial5);
	cube5.castShadow = true;
    cube5.position.x = 0;
    cube5.position.y = 2.45;
    cube5.position.z = 0.3;
	xyz.add(cube5);    

    
    
    cubeGeometry6 = new CubeGeometry(2,2,1.2);
	cubeMaterial6 = new LambertMaterial({color:0x99ccff, opacity:1});
	cube6 = new Mesh(cubeGeometry6, cubeMaterial6);
	cube6.castShadow = true;
    cube6.position.x = 0;
    cube6.position.y = 3.6;
    cube6.position.z = 0.3;
	xyz.add(cube6);  
    
    
    cubeGeometry7 = new CubeGeometry(1.5,0.4,0.4);
	cubeMaterial7 = new LambertMaterial({color:0x99ccff, opacity:1});
	cube7 = new Mesh(cubeGeometry7, cubeMaterial7);
	cube7.castShadow = true;
    cube7.position.x = 1.75;
    cube7.position.y = 4.4;
    cube7.position.z = 0;
	xyz.add(cube7);  
    
            
    cubeGeometry8 = new CubeGeometry(1.5,0.4,0.4);
	cubeMaterial8 = new LambertMaterial({color:0x99ccff, opacity:1});
	cube8 = new Mesh(cubeGeometry8, cubeMaterial8);
	cube8.castShadow = true;
    cube8.position.x = -1.75;
    cube8.position.y = 4.4;
    cube8.position.z = 0;
	xyz.add(cube8);  
    
    
    cubeGeometry9 = new CubeGeometry(0.6,0.6,0.6);
	cubeMaterial9 = new LambertMaterial({color:0xffcc99, opacity:1});
	cube9 = new Mesh(cubeGeometry9, cubeMaterial9);
	cube9.castShadow = true;
    cube9.position.x = 0;
    cube9.position.y = 4.9;
    cube9.position.z = 0;
	xyz.add(cube9); 
    
    
    cubeGeometry10 = new CubeGeometry(1.2,1.2,1.2);
	cubeMaterial10 = new LambertMaterial({color:0xffcc99, opacity:1});
	cube10 = new Mesh(cubeGeometry10, cubeMaterial10);
	cube10.castShadow = true;
    cube10.position.x = 0;
    cube10.position.y = 5.8;
    cube10.position.z = 0.2;
	xyz.add(cube10); 
        

    cubeGeometry11 = new CubeGeometry(0.1,0.1,0.01);
	cubeMaterial11 = new LambertMaterial({color:0x000000, opacity:1});
	cube11 = new Mesh(cubeGeometry11, cubeMaterial11);
	cube11.castShadow = true;
    cube11.position.x = 0.25;
    cube11.position.y = 6.1;
    cube11.position.z = 0.82;
	xyz.add(cube11); 
    
    cubeGeometry12 = new CubeGeometry(0.1,0.1,0.01);
	cubeMaterial12 = new LambertMaterial({color:0x000000, opacity:1});
	cube12 = new Mesh(cubeGeometry12, cubeMaterial12);
	cube12.castShadow = true;
    cube12.position.x = -0.25;
    cube12.position.y = 6.1;
    cube12.position.z = 0.82;
	xyz.add(cube12); 
    
    
    cubeGeometry13 = new CubeGeometry(0.3,0.02,0.01);
	cubeMaterial13 = new LambertMaterial({color:0x000000, opacity:1});
	cube13 = new Mesh(cubeGeometry13, cubeMaterial13);
	cube13.castShadow = true;
    cube13.position.x = 0;
    cube13.position.y = 5.5;
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
    spotLight.position.set(40,60,40);
    //spotLight.rotation.set(-0.71, -1.2,-0.44);
    spotLight.lookAt(new Vector3(0, 5.8, 0));
    spotLight.castShadow = true;
    scene.add(spotLight);
    console.log("Added a SpotLight Light to Scene");
    
    // add controls
    gui = new GUI();
    control = new Control(0.05, cubeMaterial1.color.getHex());
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
    gui.addColor(controlObject, 'color');
    
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

    
    
    // render using requestAnimationFrame
    requestAnimationFrame(gameLoop);
	xyz.material.color = new Color(control.color);
    xyz.rotation.y += control.rotationSpeed;
    
    // render the scene
    renderer.render(scene, camera);
}

// Setup default renderer
function setupRenderer(): void {
    renderer = new Renderer();
    renderer.setClearColor(0x555555, 1.0);
    renderer.setSize(CScreen.WIDTH, CScreen.HEIGHT);
    //renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    console.log("Finished setting up Renderer...");
}

// Setup main camera for the scene
function setupCamera(): void {
    camera = new PerspectiveCamera(45, config.Screen.RATIO, 0.1, 1000);
    //camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.x = 15;
    camera.position.y = 16;
    camera.position.z = 0;
    //camera.position.z = 17.98061;
    camera.lookAt(new Vector3(0, 0, 0));
    console.log("Finished setting up Camera...");
}
