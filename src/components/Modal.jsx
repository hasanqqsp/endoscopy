import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { useFBX } from "@react-three/drei";
import { Stats, OrbitControls, Circle } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";

function ModalFull({ showModal, setShow, link }) {
  const fbx = useFBX("/CCC.fbx");
  const gltf = useLoader(GLTFLoader, "/scene.glb");
  return (
    <>
      <Modal show={showModal} fullscreen={true} onHide={() => setShow(false)}>
        <Modal.Body>
          <Modal.Header closeButton />
          {/* <iframe
            width="100%"
            style={{ height: `calc(90vh)` }}
            src="https://sketchfab.com/models/53a7784bdab34a21bb2510b03ec6c53f/embed?autospin=1&autostart=1"
            frameBorder="0"
            allowvr
            allowfullscreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            onmousewheel=""
            allow="fullscreen"
          ></iframe> */}
          <>
            <Canvas camera={{ position: [5.181, 3.694, -9.671] }} shadows>
              <ambientLight intensity={25} color={"ffffff"} />
              <primitive
                object={gltf.scene}
                position={[0, 3, 0]}
                scale={[0.03, 0.03, 0.03]}
              />

              <OrbitControls
                target={[0, 1, 0]}
                autoRotate={true}
                autoRotateSpeed={3}
              />

              <Stats />
            </Canvas>
          </>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalFull;
