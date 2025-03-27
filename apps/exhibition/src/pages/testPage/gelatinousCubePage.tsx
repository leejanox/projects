import { Environment, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
//import Star from "@components/star"
import GelatinousCube from "@components/test/gelatinousCube"

const TestPage = () => {
  return (
    <Canvas shadows camera={{position:[15,25,15],fov:25,aspect:window.innerWidth/window.innerHeight,near:0.1,far:1000}}>
      <ambientLight intensity={Math.PI}/>
      <OrbitControls makeDefault maxPolarAngle={Math.PI/2} minPolarAngle={0} autoRotate autoRotateSpeed={0.5}/>
      <Environment files={'src/assets/golden_gate_hills_4k.hdr'} background backgroundBlurriness={0.4}/>

      <group position={[0,0,0]}>
        <GelatinousCube/>
      </group>
    </Canvas>
  )
}

export default TestPage