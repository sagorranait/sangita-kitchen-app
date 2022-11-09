import { Form } from 'react-bootstrap';
import { AiFillStar } from "react-icons/ai";
import './ReviewForm.css';

const ReviewForm = ({formHandler, loading}) => {
  return (
   <form className='review-form' onSubmit={formHandler}>
      <div className='user-review mb-3'>
         <div className="review-radio">
            <input type="radio" id="star5" name="review" defaultChecked value='5' />
            <label className="kitchen-btn" htmlFor="star5">5 <AiFillStar/></label>
         </div>
         <div className="review-radio">
            <input type="radio" id="star4" name="review" value='4' />
            <label className="kitchen-btn" htmlFor="star4">4 <AiFillStar/></label>
         </div>
         <div className="review-radio">
            <input type="radio" id="star3" name="review" value='3' />
            <label className="kitchen-btn" htmlFor="star3">3 <AiFillStar/></label>
         </div>
         <div className="review-radio">
            <input type="radio" id="star2" name="review" value='2' />
            <label className="kitchen-btn" htmlFor="star2">2 <AiFillStar/></label>
         </div>
         <div className="review-radio">
            <input type="radio" id="star1" name="review" value='1' />
            <label className="kitchen-btn" htmlFor="star1">1 <AiFillStar/></label>
         </div>
      </div>
      <Form.Group className="mb-3">
         <Form.Control as="textarea" id="textareaInput" rows={3} name="message" placeholder="Description" />
      </Form.Group>
      <button type="submit" className='kitchen-btn'>{loading ? 'Sending...' : 'Send Review'}</button>
   </form>
  )
}

export default ReviewForm