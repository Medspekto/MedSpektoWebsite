import img1 from '../../assets/img/Customers/1.svg';
import img2 from '../../assets/img/Customers/2.svg';
import img3 from '../../assets/img/Customers/3.svg';
import img4 from '../../assets/img/Customers/4.svg'
const CustomersComponent=()=>{
    return(
        <>
         <section className="py-8 bg-white">

<div className="container">
    <article className="text-center">
        <div className="display-2">Our Customers</div>
        <p className="centerTxt">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.​
        </p>
    </article>
   <div className="container">
                    <div className="row">
                      <div className="col-md-6 col-lg-3  ">
                        <div className="py-md-5 py-5 text-center">
                          <div className="mb-3">
                            <i className="fe fe-award fs-2 text-info"> </i>
                          </div>
                          <div className="lh-1">
                            <h2 className="mb-1"><img src={img1}/></h2>
                          </div>
                        </div>

                      </div>
                      <div className="col-md-6 col-lg-3  ">
                        <div className="py-md-5 py-5 text-center">
                          <div className="mb-3">
                            <i className="fe fe-users fs-2 text-warning"> </i>
                          </div>
                          <div className="lh-1">
                            <h2 className="mb-1"><img src={img2}/></h2>
                          </div>
                        </div>

                      </div>
                      <div className="col-md-6 col-lg-3  ">
                        <div className="py-md-5 py-5 text-center">
                          <div className="mb-3">
                            <i className="fe fe-tv fs-2 text-primary"> </i>
                          </div>
                          <div className="lh-1">
                            <h2 className="mb-1"><img src={img3}/></h2>
                          </div>
                        </div>

                      </div>
                      <div className="col-md-6 col-lg-3  ">
                        <div className="py-md-5 py-5 text-center">
                          <div className="mb-3">
                            <i className="fe fe-film fs-2 text-success"> </i>
                          </div>
                          <div className="lh-1">
                            <h2 className="mb-1"><img src={img4}/></h2>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
   
   </div>

</section>
        </>
    )
}
export default CustomersComponent;