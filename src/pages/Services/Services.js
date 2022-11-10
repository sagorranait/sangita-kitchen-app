import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Brands from '../../components/Brands/Brands';
import Service from '../../components/Service/Service';
import ServicesContainer from '../../components/ServicesContainer/ServicesContainer';
import Loading from '../../components/Loading/Loading'
import usePageTitle from '../../hooks/usePageTitle';
import './Services.css'

const Services = () => {
   usePageTitle('Services');
   const [allServices, setAllServices] = useState([]);
   const [load, setLoad] = useState(false);

   useEffect(() => {
    setLoad(true);
      fetch('http://localhost:5000/services')
      .then(res => res.json())
      .then(data => {
        setLoad(false);
        setAllServices(data)
      })
      .catch(error => console.log(error));
   }, [])
  return (
    <div id='services'>
      <ServicesContainer title="All Services">
          <Row>
            {load ? <Loading/> : allServices.map(service => <Service key={service._id} data={service}/>)}
          </Row>
      </ServicesContainer>
      <Brands/>
    </div>
  )
}

export default Services