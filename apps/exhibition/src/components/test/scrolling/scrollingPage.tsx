import Header from "@components/header/header"
import { Suspense } from "react"


const ScrollingPage = () => {
  return (
    <div className="scrolling">
        <Header/>
        <Suspense fallback={<div>Loading...</div>}>
        </Suspense>
    </div>
  )
}

export default ScrollingPage