import { useGLTF, useTexture } from "@react-three/drei"
import { useEffect } from "react";
import * as THREE from "three"

export default function Town() {

    const {nodes,materials,scene} = useGLTF('src/assets/winter_terrain_02_gltf/scene.gltf');
    const mapTexture = useTexture('src/assets/winter_terrain_02_gltf/textures/Background_baseColor.jpeg');

    useEffect(()=>{
        if(materials.Background){
            (materials.Background as THREE.MeshStandardMaterial).map = mapTexture;
            (materials.Background as THREE.MeshStandardMaterial).needsUpdate = true;
        }
    },[mapTexture,materials]);

    console.log("nodes: ", nodes);
    console.log("materials: ", materials);
    console.log("scene: ", scene);

  return (
    <>
        {nodes?.Fairytale_Garden_Background_0 && materials?.Background && (
            <mesh geometry={(nodes.Fairytale_Garden_Background_0 as THREE.Mesh).geometry} material={materials.Background} />
        )}
    </>
  )
}

/*
            {(()=>{
                console.log("nodes: ", nodes);
                console.log("materials: ", materials); 
                console.log("scene: ", scene);
                return null;
            })()}

            <pre>
                nodes: {JSON.stringify(nodes, null,2)}{'\n'}
                material: {JSON.stringify(materials, null,2)}{'\n'}
                scene: {JSON.stringify(scene, null,2)}
            </pre>
*/
