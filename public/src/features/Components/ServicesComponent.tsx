import { IconDeviceMobile, IconHospital, IconReportAnalytics, IconReportSearch, IconVaccineBottle } from "@tabler/icons-react";

const ServicesComponent = () => {

    const FeatureJSON=[
        {
            label:'Custom Healthcare Software Development',
            icon:<IconHospital stroke={2} style={{ width: '50px', height: '50px' }} />,
            description:'Tailored software solutions that meet the unique needs of healthcare providers.'
        },
        {
            label:'Telemedicine Solutions',
            icon:<IconVaccineBottle stroke={2} style={{ width: '50px', height: '50px' }}/>,
            description:'Secure and user-friendly platforms for virtual consultations, improving access to care.'
        },
        {
            label:'Electronic Health Records (EHR)',
            icon:<IconReportSearch stroke={2} style={{ width: '50px', height: '50px' }}/>,
            description:'Integrated EHR systems that enhance patient data management and interoperability.'
        },
        {
            label:'Mobile Health Applications',
            icon:<IconDeviceMobile stroke={2} style={{ width: '50px', height: '50px' }}/>,
            description:'Engaging mobile apps for patients and providers that promote health management on-the-go.'
        },
        {
            label:'Healthcare Data Analytics',
            icon:<IconReportAnalytics stroke={2} style={{ width: '50px', height: '50px' }}/>,
            description:'Advanced analytics tools to drive insights and improve decision-making.'
        }
    ]
    return (
        <>
            <section className="block_1">
                <div className="container">
                    <article className="text-center">
                        <div className="display-2">How can we help you?</div>
                        {/* <p className="centerTxt">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.
                        </p> */}
                    </article>
                    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                           {FeatureJSON?.map((x,index)=>(
                             <div className="col" key={index} >
                             <div className="feature">
                                 <div className="feature-icon d-inline-flex align-items-center justify-content-center mb-3">
                                     {x.icon}
                                 </div>
                                 <h3>{x.label}</h3>
                                 <p>
                                 {x.description}
                                 </p>
                             </div>
                         </div>
                           ))}
                          
                    </div>
                </div>
            </section>
        </>
    );
}

export default ServicesComponent;
