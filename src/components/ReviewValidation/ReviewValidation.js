import { Link, useLocation } from 'react-router-dom'
import './ReviewValidation.css';

const ReviewValidation = () => {
   let location = useLocation();

  return (
    <div className='review-validation text-center'>
      <p>Please sign in to add a review !</p>
      <Link to={'/signin'} className="kitchen-btn" state={{ from: location }} replace >Sign In</Link>
    </div>
  )
}

export default ReviewValidation