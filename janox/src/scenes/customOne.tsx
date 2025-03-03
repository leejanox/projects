import * as THREE from "three";
import { OrbitControls, SpotLight, useGLTF, useTexture } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function CustomOne() {

    const Model = useGLTF('src/assets/models/cute_spooky_cat.glb');

    Model.scene.traverse((child)=>{
        if(child instanceof THREE.Mesh) {
            child.castShadow = true;
            child.receiveShadow = true;
        };
    });

    const textures = useTexture({
        colors: 'src/assets/textures/colors.png',
        disturb: 'src/assets/textures/disturb.jpg',
        uvGrid: 'src/assets/textures/uv_grid_opengl.jpg'
    })    

        
    return (
        <Canvas camera={{ position: [7,4,1] , fov:50 , aspect:window.innerWidth/window.innerHeight , near:0.1 , far:100 }} style={{ background: 'black' }}>
            <OrbitControls minDistance={2} maxDistance={10} maxPolarAngle={Math.PI / 2} target={[0,1,0]}/>
            <hemisphereLight skyColor={0x87CEEB} groundColor={0x8B4513} intensity={1}/>
            <axesHelper scale={10}/>
            <primitive object={Model.scene} scale={1} position={[0,2,0]} rotation-y={[THREE.MathUtils.degToRad(-90),0,0]}/>
            <SpotLight color={0xffffff} position={[2.5,5,2.5]} angle={Math.PI/6} penumbra={1} decay={2} distance={0}/>

        </Canvas>
  )
}
