import { useRef ,useLayoutEffect} from 'react'
import * as THREE from 'three'
import { useGLTF, useScroll } from '@react-three/drei'
import { useFrame} from '@react-three/fiber'
import gsap from 'gsap'

export const FLOOR_HEIGHT = 2.3;
export const NB_FLOORS = 3;

export default function Office(props) {
    const { nodes, materials} = useGLTF('/WawaOffice.glb')
    const groupref = useRef<THREE.Mesh|null>(null)
    const tl = useRef(null); //타임라인 -> gsap 사용시 애니메이션 타임라인 생성해 useRef로 관리
    const livraryRef = useRef<THREE.Mesh|null>(null)
    const atticRef = useRef<THREE.Mesh|null>(null)

    const scroll = useScroll();

    useFrame(() => {
        if(tl.current){
            //scroll.offset = 0~1사이 값(스크롤 진행도) , duration = 전체 타임라인 길이 , seek = 애니메이션 특정 시점으로 점프
            tl.current.seek(scroll.offset * tl.current.duration());
        }
    });
    
    useLayoutEffect(() => {
        if(tl.current) return; // 타임라인이 이미 존재하면 리턴
        tl.current = gsap.timeline(); // gsap 타임라인 생성


    }, []);

  return (
    <group
        {...props}
        name='WawaOffice'
        dispose={null}
        ref={groupref}
        position={[0.5,-1,-1]}
        rotation={[0, -Math.PI / 3, 0]}
    >
        <mesh geometry={(nodes['01_office'] as THREE.Mesh).geometry} material={materials['01']} />
        <group position={[0,2.11,-2.23]}>
            <group ref={livraryRef}>
                <mesh geometry={(nodes['02_library'] as THREE.Mesh).geometry} material={materials['02']} />
            </group>
        </group>
        <group position={[-1.97,4.23,-2.2]}>
            <group ref={atticRef}>
                <mesh geometry={(nodes['03_attic'] as THREE.Mesh).geometry} material={materials['03']} />
            </group>
        </group>
    </group>
  );
}

useGLTF.preload('/WawaOffice.glb')