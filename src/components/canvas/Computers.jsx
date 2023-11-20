/* eslint-disable react/no-unknown-property */
import  {Suspense, useEffect,  useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';
// import gsap from 'gsap';


const Computers = ({ isMobile }) => {
  //import model
  const computer = useGLTF('./satelite/satelite.gltf');


  return (
    <group>
    <mesh>
      <hemisphereLight args={['#fb08a2', '#000000', 2]}  position={[0,3,0]} groundColor="blue"/>
      <pointLight 
      intensity={5}
      color={'#2e0ee6'}
      position={[3,0,0]} />
      <pointLight 
      intensity={5}
      color={'#fe0000'}
      position={[0,1,0]} />
      <pointLight 
      intensity={2}
      color={'#a310e7'}
      position={[3,-1.2,-0.2]}
       />
      <pointLight 
      intensity={2}
      color={'#9add15'}
      position={[3,-1,0.2]}
       />
      <pointLight 
      intensity={2}
      color={'#f60e0e'}
      position={[3,-1.4,0.2]}
      lookAt={[0, 0, 0]}
       />
      <primitive 
       object={computer.scene}
       scale={isMobile ? 0.0010 : 0.25}
       position={isMobile ? [0, -3, -2.2] : [0.55, -3.30, -1]}
       rotation={[0.80, 1.4, -0.80]}
       />
       <ambientLight 
       intensity={1.5}
       color={'#d9b00c'}
       position={[0,0,0]}
       />
    </mesh>
    </group>
  )
}

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width:500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches); 
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange); 
    }
  }, []);

  return (
    <Canvas 
    frameloop='demand' 
    shadows 
    camera={{position: [28,3,5], fov: 25}}
    gl={{preserveDrawingBuffer:true}}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls 
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputerCanvas