import { useEffect, useState } from "react"
import { Row } from "react-bootstrap"
import Banner from "../../components/Banner/Banner"
import Brands from "../../components/Brands/Brands"
import Instagram from "../../components/Instagram/Instagram"
import Service from "../../components/Service/Service"
import ServicesContainer from "../../components/ServicesContainer/ServicesContainer"

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/services', {
      headers: {
        limitsize: '3'
      }
    })
    .then(res => res.json())
    .then(data => setServices(data))
    .catch(error => console.log(error));
  }, [])

  return (
    <>
      <Banner/>
      <ServicesContainer title="Our Services">
          <Row>
            {services.map(service => <Service key={service._id} data={service}/>)}
          </Row>
      </ServicesContainer>
      <Instagram/>
      <Brands/>
    </>
  )
}

export default Home