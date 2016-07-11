/**
 * Created by Mergen on 11.07.2016.
 */
/* Created by Mergen*/
var scene, camera, renderer;
var boxGeometry, boxMesh, boxMaterial;

init();

function init() {
    scene = new THREE.Scene();
    initMaterials();
    initMeshes();
    initCamera();
    initLights();
    initRenderer();
}

function initMaterials() {
    boxMaterial = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
}

function initMeshes() {
    boxGeometry = new THREE.BoxGeometry( 1, 1, 1 );
    boxMesh = new THREE.Mesh( boxGeometry, boxMaterial );
    scene.add( boxMesh );
}

function initCamera() {
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    camera.position.z = 5;
}

function initLights() {
}

function initRenderer() {
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setClearColor( 0xffffff );

    container = document.getElementById( 'three' );
    document.body.appendChild( container );
    renderer.setSize( 200, 200 );
    container.appendChild( renderer.domElement );

}

function animation() {
    boxMesh.rotation.x += 0.02;
    boxMesh.rotation.y += 0.02;
}

function render() {
    requestAnimationFrame( render );
    animation();
    renderer.render(scene, camera);
}

render();