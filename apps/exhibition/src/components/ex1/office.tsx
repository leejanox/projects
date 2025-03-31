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
    const tl = useRef<GSAPTimeline|null>(null); //타임라인 -> gsap 사용시 애니메이션 타임라인 생성해 useRef로 관리
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

        //수직 스크롤
        if(groupref.current){
            tl.current.to(
                groupref.current.position, //타겟
                {duration:2,y: -FLOOR_HEIGHT *(NB_FLOORS-1)} //y축으로 이동
            ),
            0 //시작 시점
        };

        //모델 회전
        if(groupref.current){
            tl.current.to(
                groupref.current.rotation, //타겟
                {duration:1,x:0,y: -Math.PI / 6,z:0}, //y축으로 회전
                0 //시작 시점
            );
            tl.current.to(
                groupref.current.rotation, //타겟
                {duration:1,x:0,y: -Math.PI / 3,z:0}, //y축으로 회전
                2 //시작 시점
            );
        };

        //모델 포지션
        if(groupref.current){
            tl.current.to(
                groupref.current.position, //타겟
                {duration:1,x:-1,z:2},
                0 //시작 시점
            );
            tl.current.to(
                groupref.current.position, //타겟
                {duration:1,x:1,z:2},
                2 //시작 시점
            );
        };

        //livrary 모델 포지션
        if(livraryRef.current){
            tl.current.from(
                livraryRef.current.position,
                {duration:0.5,x:-2},
                0.5
            );
            tl.current.from(
                livraryRef.current.rotation,
                {duration:0.5,y:-Math.PI/2},
                0
            );
        }

        //attic 모델 포지션
        if(atticRef.current){
            tl.current.from(
                atticRef.current.position,
                {duration:1.5,y:2},
                0
            );
            tl.current.from(
                atticRef.current.rotation,
                {duration:0.5,y:Math.PI/2},
                1
            );
            tl.current.from(
                atticRef.current.position,
                {duration:0.5,z:-2},
                1.5
            );
        };
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