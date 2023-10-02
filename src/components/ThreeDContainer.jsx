import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { ObjectLoader, Scene } from "three";
import { useEffect, useState } from "react";

export default function ThreeDContainer({ position, source, scale }) {
  //   const group = useRef();
  //   useFrame(() => {
  //     group.current.rotation.y += 0.005;
  //   });
  const [scene, setScene] = useState();
  useEffect(() => {
    const loader = new ObjectLoader();
    const scene = new Scene();
    loader.load("/processor.json", (obj) => {
      scene.add(obj);
    });
    setScene(scene);
  }, []);
  return (
    <Canvas camera={{ position }} shadows>
      <ambientLight intensity={25} />
      <primitive object={scene} position={position} scale={scale} />
      <OrbitControls target={[0, 1, 0]} />
    </Canvas>
  );
}
