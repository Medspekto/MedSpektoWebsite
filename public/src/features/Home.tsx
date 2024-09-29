import ComponentCustomers from "./Components/ComponentCustomers";
import Navbar from "./Navbar/navbar";
import ComponentServices from "./Components/ComponentServices";
import ComponentPortfolio from "./Components/ComponentPortfolio";
import ComponentTeams from "./Components/ComponentTeams";
import ComponentTestimonials from "./Components/ComponentTestimonials";
import Footer from "./Footer/footer";
import ComponentAdvtCard from "./Components/ComponentadvtCard";
import { useLocation } from "react-router-dom";

const Home = () => {
    const location = useLocation();
    console.log(location)
    return (
        <>
            <div className="hero_section">
                <div className="container pb-5">
                    <Navbar />
                    <aside className="center">
                        <h4 className="my-4">Transforming Healthcare Through Innovative Software Solutions</h4>
                        <div className="display-1 mb-4" style={{ lineHeight: '60px' }}>
                           <div>Transforming Healthcare Through Innovative Software Solutions</div>
                        </div>
                        <div className="row">
                            <div className="col-md-5 mb-4">
                                <div className="row-gap-lg d-grid">
                                    <p>
                                    Empowering Providers and Patients with Cutting-Edge Technology
                                    </p>
                                    <div>
                                        <span className="btn_theme mt-2 mb-5 d-inline-flex w-auto">Get Started</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
            <ComponentServices/>
            <ComponentPortfolio/>
            <ComponentCustomers/>
            <ComponentTestimonials/>
            <ComponentTeams/>
            <ComponentAdvtCard/>
            <Footer/>
        </>
    );
};

export default Home;
