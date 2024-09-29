import logo from '../../assets/img/logo1.png'
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg py-4 main_nav">
                <div className="container-fluid g-0">
                    <a className="navbar-brand pt-4" href="#" style={{ marginLeft: '-14px' }}>
                        <img src={logo} style={{ width: '259px' }} />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarScroll"
                        aria-controls="navbarScroll"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll" style={{ height: '100px' }}>
                        <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="about">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href='#'>Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href='#'>Meet us</a>
                            </li>
                           
                            <li className='nav-item'>
                                <a className="btn_Contact d-inline-flex w-auto nav-link active" aria-current="page" href='#'>Request Quote</a>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </nav>
        </>
    );
}

export default Navbar;
