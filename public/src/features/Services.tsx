import ComponentAdvtCard from "./Components/ComponentadvtCard";
import ComponentCustomers from "./Components/ComponentCustomers";
import Footer from "./Footer/footer";
import Navbar from "./Navbar/navbar"
import ComponentServices from "./Components/ComponentServices";
import ComponentTestimonials from "./Components/ComponentTestimonials";

const Services = () => {
    return (
      <>
        <div className="header_section ">
            <div className="container pb-5">
            <Navbar/>
              <div className="row ">
                {/* Full width header content */}
                <div className="col-md-12 text-center header_content">
                  <h1 className="display-4">Services</h1>
                  <p className="lead">We provide a wide range of Services</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue. Aliquam ornare hendrerit augue.
                  </p>
                </div>
              </div>
            </div>
        </div>
        <ComponentServices/>
        <ComponentCustomers/>
        <ComponentTestimonials/>
        <ComponentAdvtCard/>
        <Footer/>
        
      </>
    );
  };
  
  export default Services;
  