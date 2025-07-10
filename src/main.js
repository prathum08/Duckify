import * as THREE from "three";
import { Renderer } from "./components/Renderer";
import {Camera} from "./components/Camera";
import { player } from "./components/Player";
import "./style.css";
import { initializeMap, map } from "./components/Map";

const scene = new THREE.Scene();
scene.add(player);
scene.add(map);

//Adding the Lights
const ambientLight = new THREE.AmbientLight();
scene.add(ambientLight);

//Direction Light
const dirLight = new THREE.DirectionalLight();
dirLight.position.set(-100 , -100 , 200);
scene.add(dirLight);

const camera = Camera();
scene.add(camera);

initializeGame();

function initializeGame(){
  initializeMap();
}

const render = Renderer();
scene.render(scene , camera);