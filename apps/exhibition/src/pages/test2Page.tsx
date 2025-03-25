import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"


const Test2Page = () => {
  return (
    <Canvas shadows camera={{position:[15,25,15],fov:25,aspect:window.innerWidth/window.innerHeight,near:0.1,far:1000}}>
        <OrbitControls makeDefault maxPolarAngle={Math.PI/2} minPolarAngle={0} autoRotate autoRotateSpeed={0.5}/>

        
    </Canvas>
  )
}

export default Test2Page