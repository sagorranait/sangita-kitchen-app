import { Col, Container, Row } from 'react-bootstrap'
// brand images
import InDepth from '../../assets/brands/in-depth-logo.png';
import National from '../../assets/brands/national-logo.png';
import Sentinal from '../../assets/brands/sentinal-logo.png';
import DelMar from '../../assets/brands/del-mar-logo.png';
import OrSale from '../../assets/brands/or-sale-logo.png';
import Higher from '../../assets/brands/higher-logo.png';

import './Brands.css';

const Brands = () => {
  return (
    <section id='brands'>
      <Container>
         <Row>
            <Col sm={12} md={2} lg={2} xl={2} xxl={2}>
               <div className='brand text-center'>
                  <img src={InDepth} alt="in-depth" />
               </div>
            </Col>
            <Col sm={12} md={2} lg={2} xl={2} xxl={2}>
               <div className='brand text-center'>
                  <img src={National} alt="National" />
               </div>
            </Col>
            <Col sm={12} md={2} lg={2} xl={2} xxl={2}>
               <div className='brand text-center'>
                  <img src={Sentinal} alt="Sentinal" />
               </div>
            </Col>
            <Col sm={12} md={2} lg={2} xl={2} xxl={2}>
               <div className='brand text-center'>
                  <img src={DelMar} alt="DelMar" />
               </div>
            </Col>
            <Col sm={12} md={2} lg={2} xl={2} xxl={2}>
               <div className='brand text-center'>
                  <img src={OrSale} alt="OrSale" />
               </div>
            </Col>
            <Col sm={12} md={2} lg={2} xl={2} xxl={2}>
               <div className='brand text-center'>
                  <img src={Higher} alt="Higher" />
               </div>
            </Col>
         </Row>
      </Container>
    </section>
  )
}

export default Brands