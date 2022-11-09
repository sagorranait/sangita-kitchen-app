import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiFillStar } from "react-icons/ai";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import './Service.css';

function Service({data}) {
  const {_id, title, thum_image, rating, price, description} = data;

  return (
   <Col sm={12} md={4} lg={4} xl={4} xxl={4}>
      <div className="service">
         <PhotoProvider>
            <PhotoView src={thum_image}>
               <img src={thum_image} alt={title} />
            </PhotoView>
         </PhotoProvider>
         <h3>{title}</h3>
         <div className="priceRating">
            <h4>{price}</h4>
            <h5>{rating} <AiFillStar/></h5>
         </div>
         <p>{description.slice(0, 100)+ "..."}</p>
         <Link to={`/service/${_id}`} className="kitchen-btn">More Details</Link>
      </div>
   </Col>
  )
}

export default Service