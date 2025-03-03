import { useState } from "react"
import styled from "styled-components"


interface I_BtnProps {
    current?: number
    length?: number
}

const Btn = styled.button`
    background-color:transparent;
    border:none;
    color:aliceblue;
    font-size:1.5rem;
    cursor:pointer;
    `

export default function I_Btn(props: I_BtnProps) {

    const [current, setCurrent] = useState<number>(0)

  return (
    <div className="i-btn">
        <Btn className="prev" onClick={()=>setCurrent(current===0?0:current-1)}>{'<'}</Btn>
            <span style={{zIndex:10}}>{props.current}/{props.length}</span>
        <Btn className="next" onClick={()=>setCurrent(current===length?length:current+1)}>{'>'}</Btn>
    </div>
  )
}
