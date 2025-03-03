import '@css/nikepage.scss'
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
//import AlphaFly_1 from '@assets/images/nike/ALPHAFLY_1.png'

const TestPage = () => {

  return (
    <>
      <Canvas camera={{position:[0,5,5], fov: 75 , aspect: window.innerWidth / window.innerHeight, near: 0.1, far: 1000}} style={{height: '100vh', width: '100%' , backgroundColor: 'black' , overflow: 'hidden'}}>
        <ambientLight intensity={5}/>
        <OrbitControls/>
          <axesHelper scale={10}/>
          <mesh position={[0,2,2]} scale={1}>
            <boxGeometry args={[1,1,1]}/>
            <meshStandardMaterial color='red'/>
          </mesh>
      </Canvas>
    </>
  );
}

export default TestPage

/*

    <div className="test-container">
      <img src={AlphaFly_1} alt="Nike AlphaFly 1" />
      <div className='indicator'>
      </div>
    </div>
     */