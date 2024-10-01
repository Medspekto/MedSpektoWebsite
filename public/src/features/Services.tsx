import AdvtCardComponent from "./Components/advtCardComponent";
import CustomersComponent from "./Components/CustomersComponent";
import Footer from "./Footer/footer";
import ServicesComponent from "./Components/ServicesComponent";
import TestimonialsComponent from "./Components/TestimonialsComponent";
import HeaderComponent from "./Components/HeaderComponent";

const Services = () => {
    return (
      <>
        <HeaderComponent title={'Services'} subTitle={'We provide a wide range of Services'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue. Aliquam ornare hendrerit augue.'}/>
        <ServicesComponent/>
        <CustomersComponent/>
        <TestimonialsComponent/>
        <AdvtCardComponent/>
        <Footer/>
        
      </>
    );
  };
  
  export default Services;
  