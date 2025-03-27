import { useGLTF } from '@react-three/drei';
import { useMemo } from 'react';
import * as THREE from 'three'

export default function GelatinousCube() {

    const { nodes, materials } =useGLTF('src/assets/gelatinous_cube-transformed.glb');
    //console.log("nodes: ", nodes);
    //console.log("materials: ", materials);

    const materialConfig = {
        //samples:10,
        //resolutuin:2048,
        transmission:1,
        roughness:0,
        //thickness:0,
        thickness:0.5,
        //ior:2.1,
        ior:1.5,
        //chromaticAberration:0.12,
        //anisotropy:0.1,
        //distortion:0,
        //distortionScale:0.3,
        //temporalDistortion:0.5,
        clearcoat:1,
        clearcoatRoughness:0,
        //attenuationDistance:0.5,
        attenuationDistance:1,
        //attenuationColor:'#ffffff',
        attenuationColor: new THREE.Color('#ffffff'),
        transparent:true,
        color: new THREE.Color('white'),
        opacity:1,
        side:THREE.DoubleSide,
        //bg: '#ffffff'
    };

    const glassMaterial = useMemo(()=>{
        return new THREE.MeshPhysicalMaterial(materialConfig);
    },[]);

    return (
        <group>
            {/* 원래 geometry + 새로운 material */}
            <mesh 
                position={[-0.56,0.38,-0.11]}
                geometry={(nodes.cube1 as THREE.Mesh).geometry} 
                material={glassMaterial} 
            />
            <mesh 
                position={[-0.56,0.38,-0.11]}
                renderOrder={-100}
                geometry={(nodes.cube2 as THREE.Mesh).geometry} 
                material={materials.cube_mat} 
                //material-side={THREE.FrontSide} 
                castShadow 
            />
        </group>
    );
};
