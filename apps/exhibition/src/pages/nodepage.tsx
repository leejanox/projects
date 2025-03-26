import GenerateParticle from "@components/generateParticle"
import { Canvas } from "@react-three/fiber"

function NodePage() {
  return (
    <Canvas camera={{position:[4,2,5],fov:50,aspect:window.innerWidth/window.innerHeight,near:0.1,far:1000}}>
      <GenerateParticle/>
    </Canvas>
  )
}

export default NodePage