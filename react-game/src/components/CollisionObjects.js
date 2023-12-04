import * as THREE from "three";

import { useEffect, useRef } from "react";

function CollisionObjects() {
  const refContainer = useRef(null);
  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87ceeb);

    // CAMERA
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      20000,
    );

    camera.position.set(3, 5, 3);
    camera.lookAt(0, 0, 0);

    // RENDERER
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth / window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.shadowMap.enabled = true;
    //document.body.appendChild(renderer.domElement);
    refContainer.current &&
      refContainer.current.appendChild(renderer.domElement);

    // LIGHTS
    const ambient = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
    scene.add(ambient);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.3, 50);
    dirLight.position.set(1, 2, -1);
    scene.add(dirLight);
    dirLight.castShadow = true;

    /* ******************* */
    const cube1 = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshPhongMaterial({ color: 0xff0000 }),
    );
    cube1.position.set(3, 0, 0);
    cube1.castShadow = true;
    cube1.receiveShadow = true;

    // cube1 bounding box
    let cube1BB = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
    cube1BB.setFromObject(cube1);
    console.log(cube1BB);

    const cube2 = new THREE.Mesh(
      new THREE.BoxGeometry(-3, 1, 1),
      new THREE.MeshPhongMaterial({ color: 0xff0000 }),
    );
    cube2.position.set(3, 0, 0);
    cube2.castShadow = true;
    cube2.receiveShadow = true;

    // cube2 bounding box
    let cube2BB = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
    cube2BB.setFromObject(cube2);
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;
    var animate = function () {
      requestAnimationFrame(animate);
      cube1.rotation.x += 0.01;
      cube1.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
  }, []);
  return <div ref={refContainer}></div>;
}

export default CollisionObjects;
