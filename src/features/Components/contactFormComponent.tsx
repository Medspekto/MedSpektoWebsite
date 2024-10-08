import { IconMail, IconMap2, IconPhone } from "@tabler/icons-react";
import { useState } from "react";
import { ContactForm } from "../../types/contactform";
interface ContactProps{
    onSubmit:(formData:ContactForm)=>void;
}
const ContactFormComponent:React.FC<ContactProps> = ({onSubmit}) => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        validateForm();
    };

   

    const validateForm = () => {
        const newErrors = { name: '', email: '', message: '' };
        let isValid = true;

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
            isValid = false;
        } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
            newErrors.name = 'Name should contain only letters';
            isValid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is not valid';
            isValid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
            isValid = false;
        } else if (formData.message.length < 10) {
            newErrors.message = 'Message should be at least 10 characters long';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit=()=>{
        if (validateForm()) {
            const isvalidform={
                ...formData,
            }
            onSubmit(isvalidform);
           
        }
    }


    return (
        <>
            <style>
                {`
                .contact-section {
                    padding: 40px 20px;
                    background-color: #f1f3fb;
                }

                .containers {
                    display: flex;
                    justify-content: space-between;
                    max-width: 1100px;
                    margin: 0 auto;
                    background-color: #fff;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                    flex-wrap: wrap;
                }

                .form-wrapper, .map-wrapper, .contact-details {
                    flex: 1;
                    margin-right: 20px;
                }

                .form-wrapper {
                    max-width: 45%;
                }

                .map-wrapper {
                    max-width: 50%;
                }

                .contact-details {
                    max-width: 35%;
                }

                h2 {
                    font-size: 24px;
                    color: #333;
                    margin-bottom: 20px;
                }

                form {
                    display: flex;
                    flex-direction: column;
                }

                input, textarea {
                    padding: 15px;
                    margin-bottom: 15px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    font-size: 16px;
                }

                button {
                    padding: 15px;
                    background-color: #ec3e5e;
                    color: #fff;
                    border: none;
                    cursor: pointer;
                    font-size: 16px;
                    border-radius: 5px;
                    transition: background-color 0.3s;
                }

                button:hover {
                    background-color: #ec3e5e;
                }

                .map-wrapper iframe {
                    width: 100%;
                    border-radius: 5px;
                }

                .contact-details {
                    color: #333;
                }

                .contact-details p {
                    margin-bottom: 10px;
                }

                .contact-details p i {
                    margin-right: 10px;
                }

                .toll-free {
                    font-weight: bold;
                    color: #ec3e5e;
                }

                @media screen and (max-width: 768px) {
                    .containers {
                        flex-direction: column;
                    }

                    .form-wrapper, .map-wrapper, .contact-details {
                        max-width: 100%;
                        margin-right: 0;
                        margin-bottom: 20px;
                    }
                }
                `}
            </style>
            <section className="contact-section">
                <div className="containers">
                    <div className="form-wrapper">
                        <h2>Request Free Consultation</h2>
                            <input type="text" placeholder="Your name" name="name" value={formData.name} onChange={handleChange} required />
                            {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
                            <input type="email" placeholder="Your email" name="email" value={formData.email} onChange={handleChange} required />
                            {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
                            <textarea placeholder="Your message" required name="message" value={formData.message} onChange={handleChange} />
                            {errors.message && <span style={{ color: 'red' }}>{errors.message}</span>}
                            <div>
                            <button  onClick={handleSubmit}>Submit</button>
                            </div>

                    </div>
                  
                    <div className="contact-details">
                        <h2>Get In Touch</h2>
                        <div className="contact-info">
                            <h4><strong>Reach Us</strong></h4>
                            <p><IconMap2/>&nbsp;123/B, Route 66, Downtown, Washington, DC 20004, US</p>
                            <p><IconMail/>&nbsp;info@example.com</p>
                            <p><IconPhone/> +1 987-654-3210</p>
                            <p style={{fontWeight:'bold'}}>Call us Toll Free</p>
                            <p className="toll-free">1-800-1234-567</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactFormComponent;
