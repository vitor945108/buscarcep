import Logo from '../../images/logo (2).png';
import './header.css';

function Header() {
    return(
        <header className="header-menu">
            <img src={Logo} alt='Logo' className="img-logo"/> 
            <h2>xmen</h2>
        </header>
    )
}

export default Header;