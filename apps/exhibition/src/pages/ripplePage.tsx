//import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { Suspense, useMemo } from 'react';
import { OrbitControls, useTexture } from '@react-three/drei';

function Points({...props}){

    //const texture = useTexture('/circle.png');
    const texture = useMemo(()=>{
       return useTexture('circle.png'); 
    },[]);

    const pointCount = 100;
    const sep = 3;
    let positions = useMemo(()=>{
        let positions = [];
        for(let i = 0; i<pointCount; i++){
            for(let ii = 0; ii<pointCount; ii++){
                let x = sep * (i - pointCount /4);
                let y = sep * (ii - pointCount /4);
                let z = 0;
                positions.push(x,y,z);
            };
        };
        return new Float32Array(positions);
    },[pointCount,sep]);

    return(
        <points {...props}>
            <bufferGeometry attach={'geometry'}>
                <bufferAttribute
                    attach={'attributes-position'}
                    args={[positions,3]} //포지션 배열, 3차원공간위치,정규화여부
                />
            </bufferGeometry>
            <pointsMaterial 
                attach={'material'}
                map={texture}
                color={0x00AAFF}
                size={0.5}
                sizeAttenuation
                transparent={false}
                alphaTest={0.5}
                opacity={1.0}
            />
        </points>
    )
}

function AnimationCanvas(){
    return(
        <Canvas
            camera={{position:[-100,100,-40],fov:75}}
            style={{height:'100vh'}}
        >
            <OrbitControls/>
            <axesHelper scale={10}/>
            <Suspense fallback={null}>
                <Points 
                    position={[0,0,-100]}
                    rotation={[Math.PI/2,0,Math.PI/4]}
                />
            </Suspense>
        </Canvas>
    )
}

const RipplePage = () => {
  return (
    <div className="anim">
        <Suspense fallback={<div>Loading...</div>}>
            <AnimationCanvas/>
        </Suspense>
    </div>
  );
};

export default RipplePage