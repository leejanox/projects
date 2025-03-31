import { Scroll, useScroll } from "@react-three/drei"
import { useState } from "react";

const Section = ({children}) => {
    return(
        <section style={{display:'flex',flexDirection:'column',justifyContent:'center',padding:'10px'}}>
            <div className="1">
                <div className="2">
                    <div className="3">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    )
}

export const Overlay = () => {

    const scroll = useScroll();
    const [opacityFirstSection,setOpacityFirstSection] = useState(1);
    const [opacitySecondSection,setOpacitySecondSection] = useState(1);
    const [opacityThirdSection,setOpacityThirdSection] = useState(1);

  return (
    <Scroll html>
        <div className="container" style={{width:'100%',height:'100vh'}}>
            <Section>
                <h1 style={{fontSize:'28px'}}>Hello</h1>
                <p >Welcome to my beautiful portfolio</p>
                <p >I know:</p>
                <ul >
                    <li>🧑‍💻 How to code</li>
                    <li>🧑‍🏫 How to learn</li>
                    <li>📦 How to deliver</li>
                </ul>
                <p >↓</p>
            </Section>
            <Section>
                <h1 >
                    Here are my skillsets 🔥
                </h1>
                <p>PS: I never test</p>
                <p>
                    <b>Frontend 🚀</b>
                </p>
                <ul>
                    <li>ReactJS</li>
                    <li>React Native</li>
                    <li>VueJS</li>
                    <li>Tailwind</li>
                </ul>
                <p>
                    <b>Backend 🔬</b>
                </p>
                <ul>
                    <li>NodeJS</li>
                    <li>tRPC</li>
                    <li>NestJS</li>
                    <li>PostgreSQL</li>
                </ul>
                <p >↓</p>
            </Section>
            <Section>
                <h1>
                    🤙 Call me maybe?
                </h1>
                <p>
                    I'm very expensive but you won't regret it
                </p>
                <p>
                    📞 <a href="tel:(+42) 4242-4242-424242">(+42) 4242-4242-424242</a>
                </p>
            </Section>
        </div>
    </Scroll>
  )
}
