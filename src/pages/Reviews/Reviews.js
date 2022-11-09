import { useContext, useEffect, useState } from 'react';
import Review from '../../components/Review/Review'
import { StateContext } from '../../StateProvider';

const Reviews = () => {
  const { user } = useContext(StateContext);
  const [userReviews, setUserReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/review?email=${user?.email}`)
    .then(res => res.json())
    .then(data => {
      setUserReviews(data);
    })
    .catch((error)=> console.log(error));
  }, [user?.email])

  return (
    <div className='reviews-area outlet-page'>
      <h2>My Reviews</h2>
      <div className='reviews'>
          {userReviews.map(review => <Review key={review._id} buttons={true} data={review} />)}
      </div>
    </div>
  )
}

export default Reviews