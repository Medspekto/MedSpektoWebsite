import toast, { Toaster } from "react-hot-toast";
import { ContactForm } from "../types/contactform";
import ContactFormComponent from "./Components/contactFormComponent";
import HeaderComponent from "./Components/HeaderComponent"
import { useCreateEnquiryMutation, useGetOrganizationQuery } from "../api/enquiryApiHandler";

const Contact=()=>{
    const title = 'Contact Us';
    const subTitle = '';
    const description = '';
    const [addEnquiryContact]=useCreateEnquiryMutation();
    const{data:Organization}=useGetOrganizationQuery({});
    const handleSubmit=async(formData:ContactForm)=>{
        const findOrg = Organization?.data?.find((x: { name: string; })=>x.name === 'MedSpekto');
        const obj={
            "name":formData?.name,
            "email":formData?.email,
            "message":formData?.message,
            "orgId":findOrg?.id
        }
        const addEnquiry = await addEnquiryContact(obj).unwrap();
        if(addEnquiry){
            toast.success('Enquiry Created Successfully !');
            location.reload();
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