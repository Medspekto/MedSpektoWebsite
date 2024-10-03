import { useLocation } from 'react-router-dom';
import logo from '../../assets/img/MedSpekto_logo.png'
const Navbar = () => {
    const location = useLocation();
    return (
        <>
            <nav className="navbar navbar-expand-lg py-4 main_nav">
                <div className="container-fluid g-0">
                    <a className="navbar-brand pt-4" href="/" style={{ marginLeft: '-14px' }}>
                        <img src={logo} style={{ width: '259px' }} />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ height: '100px' }}>
                        <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
                            <li className="nav-item">
                                <a className={`nav-link active ${location.pathname === '/' ? 'highlight':''}`}  aria-current="page" href="/" >Home</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${location.pathname === '/about' ? 'highlight':''}`} href="about" >About</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${location.pathname === '/services' ? 'highlight':''}`} href="services" >Services</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link  ${location.pathname === '/contact' ? 'highlight':''}`} href='contact'  >Contact</a>
                            </li>
                           
                            {/* <li className='nav-item'>
                                <a className="btn_Contact d-inline-flex w-auto nav-link active" aria-current="page" >Request Quote</a>
                            </li> */}
                        </ul>
                    </div>
                    
                </div>
            </nav>
        </>
    );
}

export default Navbar;
