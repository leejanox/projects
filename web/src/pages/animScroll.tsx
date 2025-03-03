
import { Canvas, useFrame } from '@react-three/fiber'
import '@styles/animStyles.scss'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { Suspense, useMemo } from 'react'


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
        }

        return null;
    },[animations, scene]);

    useFrame((_,delta)=>{
        if(mixer) mixer.update(delta);
    })

    return <primitive object={burger}/>
}


const AnimScroll = () => {

  return (
    <Canvas className='canvas'
        camera={ {position:[0,0,13], fov: 75 , aspect:window.innerWidth/window.innerHeight, near:0.1, far:1000}}>
        <ambientLight intensity={1.3}/>
        <directionalLight args={[0xffffff,1.3]} position={[500,500,500]}/>

        <Suspense fallback={null}>
            <Buger/>
        </Suspense>
    </Canvas>
  )
}

export default AnimScroll