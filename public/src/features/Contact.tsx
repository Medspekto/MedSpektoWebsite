import toast, { Toaster } from "react-hot-toast";
import { ContactForm } from "../types/contactform";
import ContactFormComponent from "./Components/contactFormComponent";
import HeaderComponent from "./Components/HeaderComponent"
import { useCreateEnquiryMutation } from "../api/enquiryApiHandler";

const Contact=()=>{
    const title = 'Contact Us';
    const subTitle = '';
    const description = '';
    const [addEnquiryContact]=useCreateEnquiryMutation();
    const handleSubmit=async(formData:ContactForm)=>{
        const obj={
            "name":formData?.name,
            "email":formData?.email,
            "message":formData?.message,
            "orgId":"7e2dfa5f-761c-4da5-93a1-b587881590a4"
        }
        const addEnquiry = await addEnquiryContact(obj).unwrap();
        if(addEnquiry){
            toast.success('Data Submitted Successfully!')
        }


    }
    return(
        <>
        <Toaster position="top-right" reverseOrder={false}/>
        <HeaderComponent title={title} subTitle={subTitle} description={description}/>
        <ContactFormComponent onSubmit={(formData: ContactForm)=>{
              handleSubmit(formData)
            } }/>
        </>
    )
}
export default Contact