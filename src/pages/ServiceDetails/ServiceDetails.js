import { Link, useLoaderData } from 'react-router-dom';
import { AiFillStar } from "react-icons/ai";
import { Container } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import { StateContext } from '../../StateProvider';
import toast from 'react-hot-toast';
import ReviewForm from '../../components/ReviewForm/ReviewForm';
import ReviewValidation from '../../components/ReviewValidation/ReviewValidation';
import ServiceReviews from '../../components/ServiceReviews/ServiceReviews';
import './ServiceDetails.css';

function ServiceDetails() {
   const { user } = useContext(StateContext);
   const {_id, title, thum_image, rating, price, description} = useLoaderData();
   const [sending, setSending] = useState(false);
   const [serviceReviews, setServiceReviews] = useState([]);

   const sendReviewHandler = (event) => {
      event.preventDefault();
      const form = event.target;
      const userReview = form.message.value;
      setSending(true);
      const reviewData = {
         user_info: {
            name: user?.displayName, 
            email: user?.email,
            photoURL: user?.photoURL
         },
         service: {
            sid: _id,
            title,
         },
         review: userReview,
         date: `${new Date()}`,
     }

     fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(reviewData)
        })
      .then(res => res.json())
      .then(data => {
            setSending(false);
            setServiceReviews((oldReview)=> [...oldReview, reviewData]);
            if(data.acknowledged){
               toast.success('Review Send Successfully.');
               form.reset();
            }
      })
      .catch(error => console.error(error));
   }

   useEffect(() => {
      fetch(`http://localhost:5000/review/${_id}`)
      .then(res => res.json())
      .then(data => setServiceReviews(data))
      .catch(error => console.log(error));
   }, [_id])

  return (
   <div className='service-details'>
      <Container>
         <div className="details">
            <div className="content">
               <img src={thum_image} alt={title} />
               <h3>{title}</h3>
               <div className='priceAndReviews'>
                  <h4>$ {price}</h4>
                  <h5>{rating} <AiFillStar/></h5>
               </div>
               <p>{description}</p>
               <Link to='/services' className='kitchen-btn'>Back To Services</Link>
            </div>
            {!user ? <ReviewValidation/> : 
               <div className="reviews">
                  <div className="user-img">
                     <img src={user?.photoURL} alt={user?.displayName} />
                  </div>
                  <ReviewForm formHandler={sendReviewHandler} loading={sending} edit={false}/>
               </div>
            }
            <ServiceReviews reviewData={serviceReviews}/>
         </div>
      </Container>
   </div>
  )
}

export async function getServiceDetails({params}) {
   const response = await fetch('http://localhost:5000/services/' + params.id);
   if (!response.ok) {
     throw new Error('Failed to fetch post.');
   }
   return response.json();
 }

export default ServiceDetails