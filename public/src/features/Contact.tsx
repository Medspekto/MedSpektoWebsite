import { ContactForm } from "../types/contactform";
import ContactFormComponent from "./Components/contactFormComponent";
import HeaderComponent from "./Components/HeaderComponent"

const Contact=()=>{
    const title = 'Contact Us';
    const subTitle = '';
    const description = '';
    const handleSubmit=(formData:ContactForm)=>{
        console.log(formData)
    }
    return(
        <>
        <HeaderComponent title={title} subTitle={subTitle} description={description}/>
        <ContactFormComponent onSubmit={(formData: ContactForm)=>{
              handleSubmit(formData)
            } }/>
        </>
    )
}
export default Contact