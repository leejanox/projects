
import { Canvas, useFrame } from '@react-three/fiber';
import '@styles/animStyles.scss';
import * as THREE from 'three';
import { useGLTF, useHelper } from '@react-three/drei';
import { RefObject, Suspense, useMemo, useRef } from 'react';


const Buger = () => {
    const { scene , animations } =useGLTF('src/assets/models/burger.glb');

    //모델 useMemo로 불필요한 렌더링 방지
    const burger = useMemo(()=> scene, [scene]);

    const mixer = useMemo(()=>{

        if(animations.length > 0) {
            //THREE.AnimationMixer -> 모델 애니메이션 재생
            const newMixer = new THREE.AnimationMixer(scene);
            animations.forEach((clip) => {
                //애니메이션 클립이 있을 경우 재생
                newMixer.clipAction(clip).play();
            });

            return newMixer;
        };

        return null;
    },[animations, scene]);

    useFrame((_,delta)=>{
        if(mixer) mixer.update(delta);
    });

    return <primitive object={burger}/>
};

const DirectionalLight = () => {
    
    const lightRef = useRef<THREE.DirectionalLight|null>(null);

    useHelper(lightRef as unknown as RefObject<THREE.Object3D>,THREE.DirectionalLightHelper);

    return <directionalLight ref={lightRef} args={[0xFF8400,1.3]} position={[500,500,500]}/>
};


const AnimScroll = () => {


  return (
    <Canvas className='canvas'
        camera={ {position:[0,0,13], fov: 75 , aspect:window.innerWidth/window.innerHeight, near:0.1, far:1000}}>
        <ambientLight intensity={1.3}/>
        <DirectionalLight/>

        <Suspense fallback={null}>
            <Buger/>
        </Suspense>
    </Canvas>
  );
};

export default AnimScroll;