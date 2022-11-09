import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Brands from '../../components/Brands/Brands';
import Service from '../../components/Service/Service';
import ServicesContainer from '../../components/ServicesContainer/ServicesContainer';
import './Services.css'

const Services = () => {
   const [allServices, setAllServices] = useState([]);

   useEffect(() => {
      fetch('http://localhost:5000/services')
      .then(res => res.json())
      .then(data => setAllServices(data))
      .catch(error => console.log(error));
   }, [])
  return (
    <div id='services'>
      <ServicesContainer title="Our Services">
          <Row>
            {allServices.map(service => <Service key={service._id} data={service}/>)}
          </Row>
      </ServicesContainer>
      <Brands/>
    </div>
  )
}

export default Services