import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

import CanvasLoader from '../Loader'

const Earth = () => {
  const earth = useGLTF('./satelite/scene.gltf')

  return <mesh>
     <hemisphereLight args={['#fb08a2', '#000000', 2]}  position={[0,3,0]} groundColor="blue"/>
    <primitive 
    object={earth.scene}
    scale={0.5}
    position={[0,2,0]}
    rotation-y={0}
  />
  </mesh>
};

const EarthCanvas = () => {
  return(
    <Canvas
    shadows
    frameloop="demand"
    gl={{preserveDrawingBuffer: true}}
    camera={{
      fov: 45,
      near: 0.1,
      far:200,
      position: [-4,3,6]
    }}
    
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Suspense>
      <Earth/>
    </Canvas>
  )
}
export default EarthCanvas;
