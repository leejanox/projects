//import './header.scss'

import { L1 } from "@components/UI/link"

function Header() {
  return (
    <header style={{width:'100%',backgroundColor:'#030303',color:'#f3f3f3'}}>
      <div 
        className="header-inner" 
        style={{display:'flex',flexDirection:'column'}}
      >
        <div 
          className="header-inner-a"
          style={{display:'flex',justifyContent:'flex-end',width:'inherit',padding:'0.5rem 2rem',fontSize:'0.7rem'}}
        >
          <nav>
            <ul 
              style={{display:'flex',flexDirection:'row',gap:'1rem'}}
            >
              <li><L1 to={{pathname:'/login',search:'?q=login'}} target="_blank" onClick={(e)=> {e.preventDefault(); console.log('Login_Link_Clicked')}}>Login</L1></li>
              <li><L1 to='#' target="_blank" onClick={(e)=>{e.preventDefault(); console.log('Signup_Link_Clicked')}}>SignUp</L1></li>
              <li><L1 to='#' target="_self" replace onClick={(e)=>{e.preventDefault(); alert('Open_Guide_Template!')}}>Guide</L1></li>
              <li><L1 to='#' target="_blank" onClick={(e)=>{e.preventDefault(); alert('Frequently_Asked_Questions')}}>FAQ</L1></li>
            </ul>
          </nav>
        </div>
        <div 
          className="headr-inner-b"
          style={{backgroundColor:'#f3f3f3',color:'#030303',display:'flex',width:'inherit',flexDirection:'row',justifyContent:'space-between',padding:'0.5rem 2rem 0.5rem',borderBottom:'1px solid #a3a3a3'}}
        >
          <h1 
            className="logo"
            style={{color:'#a3a3a3',fontSize:'2rem',fontWeight:'bold',padding:'0.2rem 0.6rem',fontStyle:'italic',letterSpacing:'0.2rem'}}
          >
            Koshing
          </h1>
          <nav style={{marginTop:'0.3rem'}}>
            <ul 
              style={{display:'flex',flexDirection:'row',gap:'1rem',fontSize:'1rem'}}
            >
              <li>home</li>
              <li>services</li>
              <li>description</li>
              <li>notice</li>
              <li>report</li>
              <li>cases</li>
            </ul>
          </nav>
          <menu >
            <ul 
              style={{display:'flex',flexDirection:'row',gap:'1rem',marginTop:'0.3rem'}}
            >
              <li>.</li>
              <li>
                ENG
                <span style={{visibility:'hidden'}}>KOR</span>
              </li>
              <li style={{transform:'rotate(90deg)', fontWeight:'600'}}>|||</li>
            </ul>
          </menu>
        </div>
      </div>
    </header>
  )
}

export default Header