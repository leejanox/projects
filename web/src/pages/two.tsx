import { OrbitControls, useGLTF, useHelper } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import '@styles/two.scss'
import * as THREE from 'three'
import { RefObject, useMemo, useRef } from 'react'
//import { PLYLoader } from 'three/examples/jsm/Addons.js'

/*const Plymodel = () => {

    //const { scene } = useLoader -> ply 를 구조 분해 할당 하려 하면 undefined 뜸
    //scene 대신에 geometry 직접 할당
    const geo = useLoader(PLYLoader, '@assets/models/Lucy100k.ply') //web/src/assets/models/Lucy100k.ply

    const PM = useMemo(()=> {
        const material = new THREE.MeshStandardMaterial({
            color: '#ffffff',
            flatShading: true,
            roughness: 0.5,
            metalness: 0.5
        });
        return new THREE.Mesh(geo, material);
    },[geo]);

    return <primitive object={PM}/>
}*/


function Trump({...props}){

    const {scene} = useGLTF('src/assets/models/tronald_dump_proto_series.glb');

    const Model = useMemo(()=>scene,[scene]);

    const trumpRef = useRef<THREE.Object3D|null>(null);
    //const scaleRef = useRef(0.05);

   /* useFrame((state,delta)=>{

        if(trumpRef.current){
            if(scaleRef.current >0.01){
                scaleRef.current = Math.max(scaleRef.current - delta* 0.5,0.01);
                trumpRef.current.scale.set(scaleRef.current,scaleRef.current,scaleRef.current);
            };
        };

        //const time = state.clock.getElapsedTime();
        //const radius = 7;

        //state.camera.position.x = Math.cos(time)*radius;
        //state.camera.position.z = Math.sin(time)*radius;
        //state.camera.lookAt(0,0,0);
    })
    */
    //scale={scaleRef}
    return <primitive ref={trumpRef} object={Model}  {...props}/>
}
//            <OrbitControls minDistance={2} maxDistance={10} maxPolarAngle={Math.PI/2} target0={[0,1,0]}/>

function Spot({...props}) {

    //<spotLight ref={spotLightRef} args={[0xffffff,100,50,window.innerWidth/window.innerHeight,0.2,2]} position={[0,10,0]} castShadow={true}/>
        //spotlight
        const spotLightRef = useRef<THREE.SpotLight|null>(null);
        useHelper(spotLightRef as unknown as RefObject<THREE.Object3D>,THREE.SpotLightHelper);

        return <spotLight ref={spotLightRef} {...props}/>
};

function CameraMove(){
    
    //const cameraRef = useRef<THREE.PerspectiveCamera|undefined>(undefined);
    useFrame((state)=>{
        //if(!cameraRef.current) return;

        const time = state.clock.getElapsedTime();
        const duration = 4;
        const progress = Math.min(time/duration,1);

        const theta = progress * Math.PI * 2; //PI = 180
        const radius = THREE.MathUtils.lerp(7,3,progress); // lerp = 부드럽게 변화 -> 선형보강법인지 뭔지 암튼 나도 모름;

        //카메라 위치 변환
        const x = radius * Math.cos(theta);
        const z = radius * Math.sin(theta);
        const y = THREE.MathUtils.lerp(4,2,progress);

        state.camera.position.set(x,y,z);
        state.camera.lookAt(0,0,0);
    })

    return null;
};

const Two = () => {

  return (
    <>
     <div className="container">
        <Canvas camera={{position:[7,4,1], fov:75 , aspect:window.innerWidth/window.innerHeight, near:0.1, far:100}}>
            <CameraMove/>
            <OrbitControls enableZoom={false} enableRotate={false} />
            <axesHelper scale={10}/>

            <hemisphereLight args={[0xffffff,0x8d8d8d, 0.15]}/>

            <Spot classname='top' position={[7,10,0]} angle={Math.PI/4} lightcolor='aliceblue' intensity={80} distance={50} decay={2.4}/>

            <Trump position={[0,0,0]} rotation-y={THREE.MathUtils.degToRad(70)} scale={0.012} castShadow={true}
                onClick={(e:React.MouseEvent)=>alert('your fired!')}
            />

            <mesh position={[0,-0.01,0]} rotation-x={THREE.MathUtils.degToRad(-90)} receiveShadow={true}>
                <planeGeometry args={[100,100]}/>
                <meshLambertMaterial color={0xbcbcbc}/>
            </mesh>
        </Canvas>
     </div>
    </>
  )
}

export default Two