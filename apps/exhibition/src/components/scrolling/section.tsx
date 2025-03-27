import { createContext, useContext, useRef } from "react";
import state from "./state";
import { useFrame, useThree } from "@react-three/fiber";
import { lerp } from "three/src/math/MathUtils.js";
import * as THREE from "three";

const offsetContext = createContext(0);

interface SectionProps {
    children: React.ReactNode;
    offset: number;
    factor?: number;
    props: any;
}

function Section({children,offset,factor}:SectionProps,{...props}){

    const {offset: parentOffset, sectionHeight, aspect} = useSection();
    const ref = useRef<THREE.Group>(null);

    offset = offset !== undefined ? offset : parentOffset;
    factor = factor !== undefined ? factor : 1;
    useFrame(()=>{
        if(ref.current){
            const currentY = ref.current.position.y;
            const currentTop = (state.top.current ?? 0)/aspect;
            ref.current.position.y = lerp(currentY,(currentTop/state.zoom) * factor,0.1);
        };
    });
    return (
        <offsetContext.Provider value={offset}>
            <group {...props} position={[0,-sectionHeight * offset * factor,0]}>
                <group ref={ref}>
                    {children}
                </group>
            </group>
        </offsetContext.Provider>
    );
}

function useSection(){
    const { section, pages, zoom } = state; //5,5,1
    const {size,viewport} = useThree();
    const offset = useContext(offsetContext);
    const viewportWidth = viewport.width;
    const viewportHeight = viewport.height;
    const canvasWidth = viewportWidth * zoom;
    const canvasHeight = viewportHeight * zoom;
    const mobile = size.width < 700;
    const margin = canvasWidth * (mobile ? 0.2 : 0.1);
    const contentMaxWidth = canvasWidth * (mobile ? 0.8 : 0.6);
    const sectionHeight = canvasHeight * ((pages -1)/(section -1));
    const aspect = size.height/viewportHeight;
    return {
        offset,
        section,
        pages,
        zoom,
        size,
        viewport,
        offsetContext,
        viewportWidth,
        viewportHeight,
        canvasWidth,
        canvasHeight,
        mobile,
        margin,
        contentMaxWidth,
        sectionHeight,
        aspect
    };
};

export { Section, useSection };