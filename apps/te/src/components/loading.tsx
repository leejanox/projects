import { useEffect, useState } from "react";
import "./index.scss";

function ProgressBar({duration}) {
    //drei 제공 loading 상태 
    //const {progress,total,loaded,item,active} = useProgress(); -> 퍼센트 , 전체 아이템 수 , 로드된 아이템 수 , 현재 로드중인 아이템 경로, 로딩중인지 여부(boolean)
    // drei 에서 제공하는 <Html> 컴포넌트 사용 -> 캔버스 위에 띄우는 거라 바에 패딩, 배경, 그림자 넣으면 더 잘보임

    return <div className="progressbar" style={{"--duration":`${duration}s`} as React.CSSProperties}/>;
}

function Typing({text}) {
    const [displayText, setDisplayText] = useState<string|null>("");
    const [textIndex, setTextIndex] = useState<number>(0);

    useEffect(()=>{
        if(textIndex > text.length) return;
        const timeout = setTimeout(()=>{
            setDisplayText((prev)=>(prev + text.charAt(textIndex)));
            setTextIndex((prev)=>prev +1);
        }, 100);

        return ()=> clearTimeout(timeout);
    },[text,textIndex]);

    return <>{displayText}</>
}

export const Loading = () => {
    
  return (
    <div className="loading">
        <h1>
            <Typing text="AI SW..." />
        </h1>
        <ProgressBar duration={20}/>
    </div>
  )
}
