import * as THREE from 'three'
import { Points, PointMaterial } from "@react-three/drei";
import { useEffect, useRef , useMemo } from 'react';

function Particles(){

    const geometryRef = useRef<THREE.BufferGeometry>(null);
    const materialRef = useRef<THREE.PointsMaterial>(null);

    const particlesCount = 500;

    //위치 데이터 = [x1,y1,z1,x2,y2,z2,x3,y3,z3,...] -> Float32Array
    //flatMap : [[1,2,3],[4,5,6]] -> [1,2,3,4,5,6]
    //인덱스 데이터 = [0,1,2,3,4,5,6,7,8,...] -> Uint16Array
    const positions = useMemo(()=>(
        new Float32Array(
            new Array(particlesCount)
            .fill(0)
            .flatMap(()=>[
                Math.random() * 5 - 2.5, //x
                Math.random() * 5 - 2.5, //y
                Math.random() * 5 - 2.5, //z
            ])
        ))
    ,[particlesCount]);
    
    //dipose
    useEffect(()=>{

        console.log('particle mounted');
        console.log(positions.slice(0,10));

        if(geometryRef.current){
            geometryRef.current.setAttribute(
                'position',
                new THREE.BufferAttribute(positions,3)
            );
        };

        return ()=>{
            if(geometryRef.current){
                console.log('geometry dispose');
                geometryRef.current?.dispose();
            };
            if(materialRef.current){
                console.log('material dispose');
                materialRef.current?.dispose();
            };
        };
    },[]);

    return (
        <Points>
            <bufferGeometry ref={geometryRef} attach={'geometry'}>
                <bufferAttribute
                    attach={'attributes-position'}
                    args={[positions,3,false]} //포지션 배열, 3차원공간위치 , 정규화 여부
                />
            </bufferGeometry>
            <PointMaterial
                ref={materialRef}
                attach={'material'}
                color={0xffffff}
                size={0.1}
                sizeAttenuation={true} //점의 크기가 카메라 거리에 영향
                depthWrite={false} //깊이값 사용 x -> 뒤에있는 점이 앞에있는 점을 가리지 않음
                transparent={true} //재질이 투명하게 처라 , opacity 속성 사용가능
            />
        </Points>
    );
};

function GenerateParticle() {
  return (
    <Particles/>
  )
}

export default GenerateParticle