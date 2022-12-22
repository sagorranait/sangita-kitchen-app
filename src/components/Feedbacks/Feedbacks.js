import { useState } from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import './Feedbacks.css';

function Feedbacks() {
   const [sliderIndex, setSliderIndex] = useState(0);

  const handleSelectSlider = (selectedIndex, e) => {
   setSliderIndex(selectedIndex);
  };

  return (
    <div className='feedback-area'>
      <Container>
         <Row>
            <Col sm={12} md={12} lg={12} xl={12} xxl={12}>
               <div className="content">
                  <h2>Customer Feedbacks</h2>
                  <div className="feedbacks">
                  <Carousel variant="dark" activeIndex={sliderIndex} onSelect={handleSelectSlider}>
                  <Carousel.Item>
                        <div className="feedback">
                           <div className="student-img">
                              <img src="https://imgs.search.brave.com/Zy2f9Do5VCFB8RD0X2dszYxd2J3tH_80GG1M2oPQx3U/rs:fit:332:498:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vNzM2/eC9iNC83Yy85My9i/NDdjOTMxNjNmNDU1/YzBmY2NmZWFlMWJl/YjhlMTc4Ni5qcGc" alt="Liam Noah" />
                           </div>
                           <h3>Liam Noah</h3>
                           <p>World's best-tasted food, I have ever tried. recommended.</p>
                        </div>
                     </Carousel.Item>
                     <Carousel.Item>
                        <div className="feedback">
                           <div className="student-img">
                              <img src="https://imgs.search.brave.com/UAorp1fMPuP6m-DmMpGCTZKWPTmiiKnhF5ILbXUxllQ/rs:fit:800:600:1/g:ce/aHR0cHM6Ly9laG9u/YW1pLmJsb2IuY29y/ZS53aW5kb3dzLm5l/dC9tZWRpYS8yMDE2/LzAyL2RpdGNoLXRo/aXMtbWFuLXphcHBl/ci10by1pbmNyZWFz/ZS12aXJpbGl0eS04/MDB4NjAwLmpwZw" alt="Rakib Hasan" />
                           </div>
                           <h3>Rakib Hasan</h3>
                           <p>Kacchi Biriyani is the best. Recommended for EveryOne.</p>
                        </div>
                     </Carousel.Item>
                     <Carousel.Item>
                        <div className="feedback">
                           <div className="student-img">
                              <img src="https://imgs.search.brave.com/gmFcJeDxfEhlm4Ni1_1V8kdusPx_PDG9t6m1JMLFYok/rs:fit:464:370:1/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vcGhvdG9z/L2ZsaXJ0aW5nLXNl/bmlvci1tYW4td2Vh/cmluZy1ibGFjay1m/ZWRvcmEtaGF0LXBp/Y3R1cmUtaWQ1MzQw/NDQxMjM_az02Jm09/NTM0MDQ0MTIzJnM9/MTcwNjY3YSZ3PTAm/aD1wejBHdTZVVXBt/ZWpJWlZTaU9DNXdy/ZVhVOHZFWkdiX0hQ/TTU0M3c4R1ZnPQ" alt="Oliver Elijah" />
                           </div>
                           <h3>Oliver Elijah</h3>
                           <p>World best Mishti Doi. Everyone should try this. I will recommend this to my Friends.</p>
                        </div>
                     </Carousel.Item>
                  </Carousel>
                  </div>
               </div>
            </Col>
         </Row>
      </Container>
    </div>
  )
}

export default Feedbacks