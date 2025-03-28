import React from "react"
import Header from "@components/layouts/header"
import Footer from "@components/layouts/footer"

function MainLayout({children}:{children:React.ReactNode}) {
  return (
    <div className="container" style={{display:'flex',flexDirection:'column',height:'100vh'}}>
      <Header/>
      <div className="content" style={{flexGrow:'1'}}>
        {children}
      </div>
      <Footer/>
    </div>
  )
}

export default MainLayout