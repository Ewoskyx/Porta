/* eslint-disable react/no-unknown-property */
import { Suspense, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";

const Satellite = () => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("./satelite/satelite.gltf");
  const { actions, names } = useAnimations(animations, group);
    
  console.log(names)
    useEffect(() => {
        actions[names[1]].reset().fadeIn(2).play();
        
    
    
    }, [])
    
  return (
    <group ref={group} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[Math.PI / 2, 0, -Math.PI]}>
          <group
            name="cefc42f0170f497597299ffee31d62c5fbx"
            rotation={[-Math.PI, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Satellite_Wing1"
                  position={[-1.289, 0.36, -0.005]}
                />
                <group
                  name="Satellite_Wing2"
                  position={[1.289, 0.36, -0.005]}
                />
                <group name="Satellite_Attachments" />
                <group name="Satellite_Body" />
                <group name="Satellite">
                  <group name="Object_9">
                    <primitive object={nodes._rootJoint} 
                    scale={0.3}
                    position={[0,0,1]}
                    rotation={[0,1,0]}
                    />
                    <group name="Object_11" position={[-1.289, 0.36, -0.005]} />
                    <group name="Object_13" position={[1.289, 0.36, -0.005]} />
                    <group name="Object_15" />
                    <group name="Object_17" />
                    <skinnedMesh
                     castShadow
                      name="Object_12"
                      geometry={nodes.Object_12.geometry}
                      material={materials.Satellite_Wings}
                      skeleton={nodes.Object_12.skeleton}
                      
                    />
                    <skinnedMesh
                    castShadow
                      name="Object_14"
                      geometry={nodes.Object_14.geometry}
                      material={materials.Satellite_Wings}
                      skeleton={nodes.Object_14.skeleton}
                     
                    />
                    <skinnedMesh
                    castShadow
                      name="Object_16"
                      geometry={nodes.Object_16.geometry}
                      material={materials.Satellite_Attachments}
                      skeleton={nodes.Object_16.skeleton}
                    />
                    <skinnedMesh
                    castShadow
                      name="Object_18"
                      geometry={nodes.Object_18.geometry}
                      material={materials.Satellite_Body}
                      skeleton={nodes.Object_18.skeleton}
                      
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

const SatelliteCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Suspense>
      <ambientLight intensity={0.5} />
      <directionalLight
        intensity={2}
        position={[-5, 5, 5]}
        castShadow
        shadow-mapSize={2048}
        shadow-bias={-0.0001}
      />
      <Satellite />
       
    </Canvas>
  );
};
export default SatelliteCanvas;
