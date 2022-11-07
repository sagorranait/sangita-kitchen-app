import { FaFacebookF, FaTwitter, FaGithubAlt, FaInstagram, FaBehance } from "react-icons/fa";
import { Col, Container, Row } from 'react-bootstrap';
import GooglePlay from '../../assets/googleplay.png';
import AppStore from '../../assets/appstore.png';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
   <>
      <section id='footerArea'>
         <Container>
            <Row>
               <Col sm={12} md={6} lg={3} xl={3} xxl={3}>
                  <div className="footer-links">
                     <h2>HELP</h2>
                     <div className="links">
                        <Link to='/'>Delivery</Link>
                        <Link to='/'>Returns</Link>
                        <Link to='/'>FAQ</Link>
                        <Link to='/'>Track order</Link>
                        <Link to='/'>Blog</Link>
                     </div>
                  </div>
               </Col>
               <Col sm={12} md={6} lg={3} xl={3} xxl={3}>
                  <div className="footer-links">
                     <h2>SERVICE</h2>
                     <div className="links">
                        <Link to='/'>New arrivals</Link>
                        <Link to='/courses'>Trending now</Link>
                        <Link to='/blogs'>Top Sales</Link>
                        <Link to='/faq'>Recommended</Link>
                     </div>
                  </div>
               </Col>
               <Col sm={12} md={6} lg={3} xl={3} xxl={3}>
                  <div className="footer-links contact">
                     <h2>Contact Us</h2>
                     <div className="info">
                        <p>Call: <span>(405) 555-0128</span></p>
                        <p>Email: <span>hello@classicfood.com</span></p>
                     </div>
                     <div className="icons">
                        <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><FaFacebookF/></a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter/></a>
                        <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithubAlt/></a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram/></a>
                        <a href="https://www.behance.net" target="_blank" rel="noreferrer"><FaBehance/></a>
                     </div>
                  </div>
               </Col>
               <Col sm={12} md={6} lg={3} xl={3} xxl={3}>
                  <div className="footer-links social">
                     <h2>Download Our App</h2>
                     <div className="stores-img">
                        <img src={AppStore} alt="app-store" />
                        <img src={GooglePlay} alt="google-play" />
                     </div>
                  </div>
               </Col>
            </Row>
         </Container>
      </section>
      <section id="footerBottom">
         <Container>
            <Row>
               <Col sm={12} md={12} lg={12} xl={12} xxl={12}>
                  <div className="bottom-content text-center">
                     <p>&copy; All rights reserved. Made with love by <a href="https://www.facebook.com/sagorranait" target="_blank" rel="noreferrer">Sagor Rana</a></p>
                  </div>
               </Col>
            </Row>
         </Container>
      </section>
   </>
  )
}

export default Footer