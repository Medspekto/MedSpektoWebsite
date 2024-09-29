import Navbar from "./Navbar/navbar"

const About=()=>{
    return(
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
        </>
    )
}
export default About