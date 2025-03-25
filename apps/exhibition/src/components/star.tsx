import { useGLTF } from "@react-three/drei"
import { useMemo } from "react";
import * as THREE from "three"

export default function Star() {

    const { nodes } = useGLTF('src/assets/glitch_star_gltf/scene.gltf')
    //console.log(nodes)

    const glassMaterial = useMemo(()=>{
        return new THREE.MeshPhysicalMaterial({
            transmission:1,
            roughness:0,
            thickness:0.5,
            ior:1.5,
            clearcoat:1,
            clearcoatRoughness:0,
            transparent:true,
            attenuationColor: new THREE.Color('#ffffff'),
            color:'#ffffff',
            opacity:1,
            side:THREE.DoubleSide,
        });
    },[]);

    return (
        <mesh geometry={(nodes.Object_4 as THREE.Mesh).geometry} material={glassMaterial}/>
    );
};
