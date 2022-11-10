import { useContext, useEffect, useState } from 'react';
import Review from '../../components/Review/Review'
import { StateContext } from '../../StateProvider';
import toast from 'react-hot-toast';
import Loading from '../../components/Loading/Loading';
import usePageTitle from '../../hooks/usePageTitle';
import './Reviews.css'

const Reviews = () => {
  usePageTitle('My Reviews');
  const { user } = useContext(StateContext);
  const [userReviews, setUserReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    fetch(`https://sangitas-kitchen-server.vercel.app/review?email=${user?.email}`, {
      headers: {
          authorization: `Bearer ${localStorage.getItem('access-token')}`
      }
  })
    .then(res => res.json())
    .then(data => {
      setLoading(false)
      setUserReviews(data);
    })
    .catch((error)=> console.log(error));
  }, [user?.email]);

  const deleteReviewHandler = (id) => {
    setLoading(true);
    fetch(`https://sangitas-kitchen-server.vercel.app/review/${id}`, {
       method: 'DELETE',
    })
    .then(res => res.json())
    .then(data => {
       if (data.deletedCount > 0) {
          setLoading(false);
          toast.success('Deleted Successfully.');
          const remaining = userReviews.filter(odr => odr._id !== id);
          setUserReviews(remaining);
       }
    })
    .catch((error)=> console.log(error));
   }

   const reviewUpdateHandler = (event, id, value) => {
      event.preventDefault();
      const userReview = value.messages;
      setLoading(true);

      const updatedReview = {
        review: userReview
      }

      fetch(`https://sangitas-kitchen-server.vercel.app/review/${id}`, {
          method: 'PATCH',
          headers: {
              'content-type': 'application/json',
          },
          body: JSON.stringify(updatedReview)
      })
      .then(res => res.json())
      .then(data => {
          console.log(data);
          if (data.modifiedCount > 0) {
              setLoading(false);
              toast.success('Updated Successfully.');
              const remaining = userReviews.filter(odr => odr._id !== id);
              const updated = userReviews.find(odr => odr._id === id);
              updated.review = updatedReview.review;

              const newOrders = [updated, ...remaining];
              setUserReviews(newOrders);
          }
      })
      .catch(error => console.log(error));

  }

  return (
    <div className='reviews-area outlet-page'>
      <h2>My Reviews</h2>
      <div className='reviews'>
          {loading ? <Loading/> : userReviews.length === 0 ? 
            <h5>No reviews were added</h5> 
            : 
            userReviews.map(review => <Review 
              key={review._id} 
              buttons={true} 
              data={review}
              deleteHandler={deleteReviewHandler} 
              updateHandler={reviewUpdateHandler} 
              editId={review._id} 
              updateData={{message: review.review, rating: review.rating}}
              load={loading}
            />
          )}
          
      </div>
    </div>
  )
}

export default Reviews