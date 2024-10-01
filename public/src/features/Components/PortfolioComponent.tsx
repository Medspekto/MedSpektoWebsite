import ImageViewerComponent from "./ImageViewerComponent";

const PortfolioComponent = () => {
    return (
        <>
            <section className="block_2 bg-white">
                <div className="container">
                    <article className="text-center">
                        <div className="display-2">Portfolio</div>
                        <p className="centerTxt">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.
                        </p>
                    </article>
                    {/* <div className="row g-4 py-5 row-cols-1 row-cols-lg-4">
                        <figure className="col">
                            <ImageViewerComponent
                                ImageLink={"https://img.freepik.com/free-photo/medical-banner-with-doctor-wearing-goggles_23-2149611193.jpg?size=626&ext=jpg&ga=GA1.1.370974033.1727612112&semt=ais_hybrid"}
                                className={"w-100"} alt={"Portfolio 1"} />
                        </figure>
                        <figure className="col">
                            <ImageViewerComponent
                                ImageLink={"https://img.freepik.com/free-photo/medical-banner-with-doctor-patient_23-2149611238.jpg?size=626&ext=jpg&ga=GA1.1.370974033.1727612112&semt=ais_hybrid"}
                                className={"w-50"} alt={"Portfolio 2"} />
                        </figure>
                        <figure className="col">
                            <ImageViewerComponent
                                ImageLink={"https://img.freepik.com/free-photo/medical-banner-with-doctor-patient_23-2149611238.jpg?size=626&ext=jpg&ga=GA1.1.370974033.1727612112&semt=ais_hybrid"}
                                className={"w-75"} alt={"Portfolio 3"} />
                        </figure>
                        <figure className="col">
                            <ImageViewerComponent
                                ImageLink={"https://img.freepik.com/free-photo/medical-banner-with-doctor-patient_23-2149611238.jpg?size=626&ext=jpg&ga=GA1.1.370974033.1727612112&semt=ais_hybrid"}
                                className={"w-100"} alt={"Portfolio 4"} />
                        </figure>
                        <figure className="col">
                            <ImageViewerComponent
                                ImageLink={"https://websitedemos.net/agency-02/wp-content/uploads/sites/30/2020/06/portfolio1-300x300.jpg"}
                                className={"w-100"} alt={"Portfolio 5"} />
                        </figure>
                    </div> */}

<div className="row g-4 py-5 row-cols-1 row-cols-lg-4">
  <figure className="col">
    <ImageViewerComponent
      ImageLink="https://img.freepik.com/free-photo/medical-banner-with-doctor-wearing-goggles_23-2149611193.jpg"
      className="w-100"
      width="300px"
      height="200px"
    />
  </figure>
  <figure className="col">
    <ImageViewerComponent
      ImageLink="https://img.freepik.com/free-photo/medical-banner-with-doctor-patient_23-2149611238.jpg"
      className="w-100"
      width="300px"
      height="200px"
    />
  </figure>
  <figure className="col">
    <ImageViewerComponent
      ImageLink="https://websitedemos.net/agency-02/wp-content/uploads/sites/30/2020/06/portfolio1-300x300.jpg"
      className="w-100"
      width="300px"
      height="200px"
    />
  </figure>
  <figure className="col">
    <ImageViewerComponent
      ImageLink="https://img.freepik.com/free-photo/medical-banner-with-doctor-patient_23-2149611238.jpg"
      className="w-100"
      width="300px"
      height="200px"
    />
  </figure>
</div>


                    <article className="text-center">
                        <div className="btn_theme">EXPLORE MORE</div>
                    </article>
                </div>
            </section>
        </>
    );
}

export default PortfolioComponent;
