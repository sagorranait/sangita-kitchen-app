import Review from '../Review/Review';
import './ServiceReviews.css';

function ServiceReviews({reviewData}) {
   return (
    <div className='service-reviews'>
      <h2>Reviews ({reviewData.length})</h2>
      {reviewData.length !== 0 ? 
         reviewData.map((reviews, index) => <Review key={index} buttons={false} data={reviews} />)
         : <h6>No reviews for this service.</h6>}
    </div>
  )
}

export default ServiceReviews