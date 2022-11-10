import { useEffect, useState } from "react"
import { Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import Banner from "../../components/Banner/Banner"
import Brands from "../../components/Brands/Brands"
import Instagram from "../../components/Instagram/Instagram"
import Loading from "../../components/Loading/Loading"
import Service from "../../components/Service/Service"
import ServicesContainer from "../../components/ServicesContainer/ServicesContainer"
import usePageTitle from "../../hooks/usePageTitle"

const Home = () => {
  usePageTitle('');
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://sangitas-kitchen-server.vercel.app/services', {
      headers: {
        limitsize: '3'
      }
    })
    .then(res => res.json())
    .then(data => {
      setLoading(false);
      setServices(data);
    })
    .catch(error => console.log(error));
  }, [])

  return (
    <>
      <Banner/>
      <ServicesContainer title="Our Services">
          <Row>
            {loading ? <Loading/> : <>
              {services.map(service => <Service key={service._id} data={service}/>)}
              <Link to="/services" className="kitchen-btn services-btn">Explore All Services</Link>
            </>}
          </Row>
      </ServicesContainer>
      <Instagram/>
      <Brands/>
    </>
  )
}

export default Home