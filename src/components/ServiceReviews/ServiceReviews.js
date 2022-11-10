import Review from '../Review/Review';
import './ServiceReviews.css';

function ServiceReviews({reviewData}) {
  const sortReviews = reviewData.sort((a, b)=>{
    return b.date.localeCompare(a.date);
  });

   return (
    <div className='service-reviews'>
      <h2>Reviews ({reviewData.length})</h2>
      {reviewData.length !== 0 ? 
         sortReviews.map((review, index) => <Review key={index} buttons={false} data={review} />)
         : <h6>No reviews for this service.</h6>}
    </div>
  )
}

export default ServiceReviews