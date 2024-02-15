import React from 'react';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
           
          </div>
        </div>
      </div>
      <footer className="footer-01">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
              <h2 className="footer-heading">hospitale taher sfar mahdia</h2>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
             
            </div>
            <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
              <h2 className="footer-heading">Latest </h2>
              <div className="block-21 mb-4 d-flex">
                <a className="img mr-4 rounded" style={{ backgroundImage: "url(images/image_1.jpg)" }}></a>
                <div className="text">
                  <h3 className="heading"><a href="#"></a></h3>
                  <div className="meta">
                    <div><a href="#"><span className="icon-calendar"></span> </a></div>
                    <div><a href="#"><span className="icon-person"></span> </a></div>
                    <div><a href="#"><span className="icon-chat"></span></a></div>
                  </div>
                </div>
              </div>
              <div className="block-21 mb-4 d-flex">
                <a className="img mr-4 rounded" style={{ backgroundImage: "url(images/image_2.jpg)" }}></a>
                <div className="text">
                  <h3 className="heading"><a href="#"></a></h3>
                  <div className="meta">
                    <div><a href="#"><span className="icon-calendar"></span></a></div>
                    <div><a href="#"><span className="icon-person"></span> </a></div>
                    <div><a href="#"><span className="icon-chat"></span> </a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 pl-lg-5 mb-4 mb-md-0">
              <h2 className="footer-heading">Quick Links</h2>
              <ul className="list-unstyled">
                <li><a href="#" className="py-2 d-block">Home</a></li>
                <li><a href="#" className="py-2 d-block">About</a></li>
                <li><a href="#" className="py-2 d-block">Services</a></li>
                <li><a href="#" className="py-2 d-block">Contact</a></li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
              <h2 className="footer-heading">Nos Cordonnées</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li><span className="icon ion-ios-pin"></span><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                  <li><a href="#"><span className="icon ion-ios-call"></span><span className="text">+2 392 3929 210</span></a></li>
                  <li><a href="#"><span className="icon ion-ios-send"></span><span className="text">info@yourdomain.com</span></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-12 text-center">
              <p className="copyright">
                Copyright &copy; {new Date().getFullYear()} All rights reserved | 
               
              </p>
            </div>
          </div>
        </div>
      </footer>
     
    </div>
  );
}

export default Footer;
