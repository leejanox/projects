//import * as THREE from 'three'

import { Points, PointMaterial } from "@react-three/drei";

function Particles(){

    const particlesCount = 500;
    const particlesArray = new Array(particlesCount).fill(0).map(()=>({
        //중앙 [0,0,0] Math.random() : 0~1 , Math.random() * 5 -2.5 : -2.5 ~ 2.5
        position:[Math.random() * 5 - 2.5 , Math.random() *5 - 2.5, Math.random() * 5 - 2.5] as [number, number, number],
        color: Math.random() * 0xffffff,
        size: 0.01
    }));

    //위치 데이터 = [x1,y1,z1,x2,y2,z2,x3,y3,z3,...] -> Float32Array
    //flatMap : [[1,2,3],[4,5,6]] -> [1,2,3,4,5,6]
    //인덱스 데이터 = [0,1,2,3,4,5,6,7,8,...] -> Uint16Array
    const positions = new Float32Array(particlesArray.flatMap(p=>p.position));

    return (
        <Points>
            <bufferGeometry attach={'geometry'}>
                <bufferAttribute
                    attach={'position'}
                    args={[positions,3,false]} //포지션 배열, 3차원공간위치 , 정규화 여부
                />
            </bufferGeometry>
            <PointMaterial
                attach={'material'}
                color={0x333333}
                size={0.01}
                sizeAttenuation={true} //점의 크기가 카메라 거리에 영향
                depthWrite={false} //깊이값 사용 x -> 뒤에있는 점이 앞에있는 점을 가리지 않음
                transparent={true} //재질이 투명하게 처라 , opacity 속성 사용가능
            />
        </Points>
    );
};

function GenerateParticle() {
  return (
    <div>GenerateParticle</div>
  )
}

export default GenerateParticle