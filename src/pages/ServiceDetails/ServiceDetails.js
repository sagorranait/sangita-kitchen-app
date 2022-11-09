import { Link, useLoaderData } from 'react-router-dom';
import { AiFillStar } from "react-icons/ai";
import { Container } from 'react-bootstrap';
import { useContext, useState } from 'react';
import { StateContext } from '../../StateProvider';
import toast from 'react-hot-toast';
import './ServiceDetails.css';
import ReviewForm from '../../components/ReviewForm/ReviewForm';

function ServiceDetails() {
   const { user } = useContext(StateContext);
   const {_id, title, thum_image, rating, price, description} = useLoaderData();
   const [sending, setSending] = useState(false);

   const sendReviewHandler = (event) => {
      event.preventDefault();
      const form = event.target;
      const userRating = form.review.value;
      const userReview = form.message.value;
      setSending(true);
      const reviewData = {
         user_info: {
            name: user?.displayName, 
            email: user?.email,
            photoURL: user?.photoURL
         },
         service_id: {
            _id,
            title,
         },
         rating: userRating,
         review: userReview,
         date: new Date(),
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

            if(data.acknowledged){
               toast.success('Successfully Login.');
               form.reset();
            }
      })
      .catch(error => console.error(error));
   }

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
            <div className="reviews">
               <div className="user-img">
                  <img src={user?.photoURL} alt={user?.displayName} />
               </div>
               <ReviewForm formHandler={sendReviewHandler} loading={sending}/>
            </div>
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