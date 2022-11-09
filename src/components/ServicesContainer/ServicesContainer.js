import { Container } from 'react-bootstrap'
import './ServicesContainer.css';

const ServicesContainer = ({title, children}) => {
  return (
    <section id='servicesContainer'>
      <Container>
         <h2>{title}</h2>
         {children}
      </Container>
    </section>
  )
}

export default ServicesContainer