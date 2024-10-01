import AdvtCardComponent from "./Components/advtCardComponent";
import CustomersComponent from "./Components/CustomersComponent";
import Footer from "./Footer/footer";
import ServicesComponent from "./Components/ServicesComponent";
import TestimonialsComponent from "./Components/TestimonialsComponent";
import HeaderComponent from "./Components/HeaderComponent";

const Services = () => {
  const title='Services';
  const subTitle='We provide a wide range of Services';
  const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue. Aliquam ornare hendrerit augue.';
    return (
      <>
        <HeaderComponent title={title} subTitle={subTitle} description={description}/>
        <ServicesComponent/>
        <CustomersComponent/>
        <TestimonialsComponent/>
        <AdvtCardComponent/>
        <Footer/>
        
      </>
    );
  };
  
  export default Services;
  