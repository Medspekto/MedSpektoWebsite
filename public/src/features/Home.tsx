import CustomersComponent from "./Components/CustomersComponent";
import Navbar from "./Navbar/navbar";
import ServicesComponent from "./Components/ServicesComponent";
import PortfolioComponent from "./Components/PortfolioComponent";
import TeamsComponent from "./Components/TeamsComponent";
import TestimonialsComponent from "./Components/TestimonialsComponent";
import Footer from "./Footer/footer";
import AdvtCardComponent from "./Components/advtCardComponent";

const Home = () => {
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
            <ServicesComponent/>
            <PortfolioComponent/>
            <CustomersComponent/>
            <TestimonialsComponent/>
            <TeamsComponent/>
            <AdvtCardComponent/>
            <Footer/>
        </>
    );
};

export default Home;
