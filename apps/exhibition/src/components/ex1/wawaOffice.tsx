import { useGLTF } from "@react-three/drei"
import { useMemo } from "react";
import * as THREE from "three"

const WaWaOffice = ({...props}) => {

    const { nodes, materials } = useGLTF('/WawaOffice.glb');

    const office = useMemo(()=>{

        return <mesh geometry={(nodes['01_office'] as THREE.Mesh).geometry} material={materials['01']}/>
    },[nodes,materials]);

    const library = useMemo(()=>{
        return <mesh geometry={(nodes['02_library'] as THREE.Mesh).geometry} material={materials['02']} position={[0,2.11,-2.23]}/>
    },[nodes,materials]);

    const attic = useMemo(()=>{
        return <mesh geometry={(nodes['03_attic'] as THREE.Mesh).geometry} material={materials['03']} position={[-1.97,4.23,-2.2]}/>
    },[nodes,materials]);

  return ()=>{
    <group {...props} dispose={null}>
        {office}
        {library}
        {attic}
    </group>
  }
}

export default WaWaOffice