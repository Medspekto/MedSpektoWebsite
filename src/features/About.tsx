import AdvtCardComponent from "./Components/advtCardComponent";
import HeaderComponent from "./Components/HeaderComponent";
import Footer from "./Footer/footer";

const About = () => {
  const title = 'About';
  const subTitle ='Welcome to MedSpekto';
  const description ='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue. Aliquam ornare hendrerit augue.';
  return (
    <>
      <HeaderComponent title={title} subTitle={subTitle} description={description}/>
      <div className="card-section container">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <h3>Who Are We</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <h3>Our Mission</h3>
              <p>
                Ut elit tellus, luctus nec ullamcorper mattis, pulvinar. Etiam
                erat lectus, finibus eget commodo quis, tincidunt eget leo.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <h3>What We Do</h3>
              <ul>
                <li>UI/UX Design</li>
                <li>Website Development</li>
                <li>Marketing</li>
                <li>Social Media</li>
                <li>eCommerce Store</li>
                <li>Tech Support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 6-D Process Section */}
      <div className="process-section container mt-5">
        <h2 className="text-center">Our 6-D Process</h2>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="process-step" >
              <h3>Discover</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="process-step">
              <h3>Define</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="process-step" >
              <h3>Design</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="process-step" >
              <h3>Develop</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="process-step" >
              <h3>Deploy</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="process-step" >
              <h3>Deliver</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
      <AdvtCardComponent/>
      <Footer/>
      
    </>
  );
};

export default About;
