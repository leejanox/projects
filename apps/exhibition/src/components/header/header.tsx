import { Link } from "react-router-dom";
import './header.scss';


export default function Header() {
  return (
    <header>
        <div className="header-inner">
            <div className="logo">logo</div>
            <nav>
                <ul>
                    <li>
                        <Link to='#'>discover</Link>
                    </li>
                    <li>
                        <Link to='#'>products</Link>
                    </li>
                    <li>
                        <Link to='#'>solutions</Link>
                    </li>
                    <li>
                        <Link to='#'>reach</Link>
                    </li>
                    <li className="btn">
                        <Link to='#'>order</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}
