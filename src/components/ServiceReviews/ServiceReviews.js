import Review from '../Review/Review';
import './ServiceReviews.css';

function ServiceReviews({reviewData}) {
   return (
    <div className='service-reviews'>
      <h2>Reviews ({reviewData.length})</h2>
      {reviewData.length !== 0 ? 
         reviewData.map(reviews => <Review key={reviews._id} />)
         : 'Passsing'}
    </div>
  )
}

export default ServiceReviews