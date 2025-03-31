import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Suspense, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { OrbitControls, PerspectiveCamera, useTexture } from '@react-three/drei';

function Points({...props}) {
    const texture = useTexture('circle.png');  // 텍스처 직접 로드
    const bufferRef = useRef<THREE.BufferAttribute|null>(null);
    const geometryRef = useRef<THREE.BufferGeometry|null>(null);
    const [time, setTime] = useState(0);

    const frequency = 0.002;
    const amplitude = 3;
    const pointCount = 100;
    const sep = 3;

    // graph 함수는 useCallback을 사용하여 최적화
    const graph = useCallback((x: number, y: number) => {
        return Math.sin(frequency * (x ** 2 + y ** 2 + time)) * amplitude;
    }, [time, frequency]);  // 의존성 배열 수정

    // positions는 useMemo를 사용하여 초기화
    const positions = useMemo(() => {
        let positionsArray = [];
        for(let i = 0; i < pointCount; i++) {
            for(let ii = 0; ii < pointCount; ii++) {
                let x = sep * (i - pointCount / 2);
                let y = sep * (ii - pointCount / 2);
                let z = graph(x, y);
                positionsArray.push(x, y, z);
            }
        }
        return new Float32Array(positionsArray);
    }, [pointCount, sep, graph, time]); // time을 의존성 배열에 추가

    useEffect(() => {
        return () => {
            if (geometryRef.current) {
                geometryRef.current.dispose();
            }
            texture.dispose();
        };
    }, [texture]);

    useFrame(() => {
        setTime(prevTime => prevTime + 5);
    });

    return (
        <points {...props}>
            <bufferGeometry ref={geometryRef} attach="geometry">
                <bufferAttribute
                    attach="attributes-position"
                    ref={bufferRef}
                    args={[positions, 3]}
                />
            </bufferGeometry>
            <pointsMaterial 
                attach="material"
                map={texture}
                color={0x00AAFF}
                size={0.5}
                sizeAttenuation
                transparent={false}
                alphaTest={0.5}
                opacity={1.0}
            />
        </points>
    );
};

function CameraControls({...props}) {

    const { camera, gl: { domElement } } = useThree();

    useEffect(()=>{
        camera.lookAt(new THREE.Vector3(0,0,-100));
        camera.updateProjectionMatrix();
    },[camera]);

    return <OrbitControls camera={camera} domElement={domElement} {...props}/>
}

function AnimationCanvas(){
    return(
        <Canvas
            camera={{position:[-50,30,-40],fov:45}}
            style={{height:'100vh'}}
        >
            <CameraControls/>
            <axesHelper/>
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