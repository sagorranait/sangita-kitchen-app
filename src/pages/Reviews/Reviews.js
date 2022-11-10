import { useContext, useEffect, useState } from 'react';
import Review from '../../components/Review/Review'
import { StateContext } from '../../StateProvider';
import toast from 'react-hot-toast';
import './Reviews.css'

const Reviews = () => {
  const { user } = useContext(StateContext);
  const [userReviews, setUserReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/review?email=${user?.email}`)
    .then(res => res.json())
    .then(data => {
      setUserReviews(data);
    })
    .catch((error)=> console.log(error));
  }, [user?.email]);

  const deleteReviewHandler = (id) => {
    setLoading(true);
    fetch(`http://localhost:5000/review/${id}`, {
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

  return (
    <div className='reviews-area outlet-page'>
      <h2>My Reviews</h2>
      <div className='reviews'>
          {userReviews.length === 0 ? 
            <h5>No reviews were added</h5> 
            : 
            userReviews.map(review => <Review key={review._id} buttons={true} data={review} deleteHandler={deleteReviewHandler} load={loading} />)
          }
      </div>
    </div>
  )
}

export default Reviews