import GenerateParticle from "@components/test/generateParticle"
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber"

function NodePage() {
  return (
    <Canvas 
      onCreated={({gl})=>{
        gl.setClearColor(0x111111);
      }}
      camera={{position:[0,0,5],fov:50,aspect:window.innerWidth/window.innerHeight,near:0.1,far:1000}}
      >
      <OrbitControls/>
      <axesHelper scale={10}/>
      <GenerateParticle/>
    </Canvas>
  )
}

export default NodePage