import { Col, Container, Row } from 'react-bootstrap';
import BeefSamosas from '../../assets/instagram/beef-samosas.jpg';
import ChickenCurry from '../../assets/instagram/chicken-curry.jpg';
import GulabJamun from '../../assets/instagram/gulab-jamun.jpg';
import { FiInstagram } from "react-icons/fi";
import './Instagram.css';

const Instagram = () => {
  return (
    <section id='instagramArea'>
      <Container>
         <Row>
            <Col sm={12} md={6} lg={3} xl={3} xxl={3}>
               <div className="followed-link">
                  <p>Follow us on Instagram</p>
                  <h2>@classic_food</h2>
                  <button className='kitchen-btn'><FiInstagram/> Follow instagram</button>
               </div>
            </Col>
            <Col sm={12} md={6} lg={3} xl={3} xxl={3}>
               <div className="instagram-img text-center">
                  <img src={GulabJamun} alt="GulabJamun" />
               </div>
            </Col>
            <Col sm={12} md={6} lg={3} xl={3} xxl={3}>
               <div className="instagram-img text-center">
                  <img src={BeefSamosas} alt="BeefSamosas" />
               </div>
            </Col>
            <Col sm={12} md={6} lg={3} xl={3} xxl={3}>
               <div className="instagram-img text-center">
                  <img src={ChickenCurry} alt="ChickenCurry" />
               </div>
            </Col>
         </Row>
      </Container>
    </section>
  )
}

export default Instagram