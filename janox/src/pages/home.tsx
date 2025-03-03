import BannerNike from '@components/banners/bannerNike'
import L from '@components/links/link'
import SocialLink from '@components/links/social-link'
import '@css/home.scss'

const Home = () => {

    const menu = {
        home: 'Home',
        login: 'Login',
        signUp: 'Sign Up',
        threeJs: 'Three.js'
    }

    return (
        <div className="main-bg">
            <div className="container">
                <div className="text">
                    <h2>My <span> Name </span> is</h2>
                    <h1>KIM . GO . EUN</h1>
                </div>
                <menu className="menu">
                    {Object.values(menu).map((item, index)=>(
                        <L key={index} to={item.toLowerCase()}>{item.toUpperCase()}</L>
                    ))}
                </menu>
                <div className="content">
                    content
                </div>
                <div className="footer">
                    <p>© 2021 Kim Go Eun. All rights reserved.</p>
                    <SocialLink/>
                </div>
            </div>
        </div>
    )
}

export default Home