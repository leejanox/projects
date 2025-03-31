import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGLTF, useScroll } from '@react-three/drei'

export const FLOOR_HEIGHT = 2.3;
export const NB_FLOORS = 3;

function Office(props) {
    const { nodes, materials} = useGLTF('/WawaOffice.glb')
    const groupref = useRef<THREE.Mesh|null>(null)
    const tl = useRef(null);
    const livraryRef = useRef<THREE.Mesh|null>(null)
    const atticRef = useRef<THREE.Mesh|null>(null)

    const scroll = useScroll();

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

export default Office