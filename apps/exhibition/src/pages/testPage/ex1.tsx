//scroll

import Office from "@components/ex1/office";
import { Overlay } from "@components/ex1/overlay";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber"
import { Suspense} from "react"
/*
function Box({...props}){

    const config =  {
        color:'#80ff99',
        emissive:'#030202',
        emissiveIntensity:0.5,
        roughness:0.5,
        metalness:0.5
    }

    const mat = useMemo(()=>{
        return new THREE.MeshStandardMaterial(config)
    },[config]);

    const geo = useMemo(()=>{
        return new THREE.BoxGeometry(1,1,1)
    },[]);

    const mesh = useMemo(()=>{
        return new THREE.Mesh(geo,mat);
    },[mat,geo])

    return <primitive object={mesh} {...props} />
}
*/

function Ex1() {

  return (
    <>
        <Suspense fallback={null}>
            <Canvas style={{height:'100vh'}} camera={{position:[2.3,1.5,2.3],fov:64}}>
                <ambientLight intensity={4} color={'white'}/>
                <axesHelper scale={10}/>
                <OrbitControls makeDefault enableZoom={false}/>
                <ScrollControls pages={3} damping={0.25}>
                    <Overlay/>
                    <Office/>
                </ScrollControls>
            </Canvas>
        </Suspense>
    </>
  )
}

export default Ex1