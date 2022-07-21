import Logo from '../files/images/logo.svg'
import {Link} from "react-router-dom";

function Navbar(){
    return <div className={'siteNav'}>
        <header className={'container'}>
            <div className="site-logo">
                <Link to={'/'}>
                    <img src={Logo} alt="Atlas-logo"/>
                </Link>
            </div>
            <div className="site-menu">
                <ul className={'menu-list'}>
                    <li><Link to={'/'}>Trending</Link></li>
                    <li><Link to={'/'}>Resources</Link></li>
                    <li><Link to={'/'}>Nearby</Link></li>
                    <li><Link to={'/'}>Hackathons</Link></li>
                    <li><Link to={'/'}>FAQ</Link></li>
                    <li className={'download-link'}><Link to={'/'}>Downlaod App</Link></li>
                </ul>
            </div>
        </header>
    </div>
}
export default Navbar