import { useState } from 'react';
import { Form } from 'react-bootstrap';
import './ReviewForm.css';

const ReviewForm = ({formHandler, loading, edit, editId, updateData}) => {
   const [newReviewData, setNewReviewData] = useState({
      messages: updateData?.message || '5'
   });
   
   const newDataHandler = (e) => {
      setNewReviewData((pre)=>{ return {...pre, [e.target.name] : e.target.value} });
   }
   
  return (
   <>
   { edit ? 
      <form className='review-form' method='POST' onSubmit={(event) => formHandler(event, editId, newReviewData)}>
         <Form.Group className="mb-3">
            <Form.Control as="textarea" id="textareaInput" rows={3} name="messages" placeholder="Description" value={newReviewData.messages} onChange={newDataHandler} required />
         </Form.Group>
         <button type="submit" className='kitchen-btn'>{loading ? 'Updating...' : 'Update'}</button>
      </form> : 
         <form className='review-form' onSubmit={formHandler}>
         <Form.Group className="mb-3">
            <Form.Control as="textarea" id="textareaInput" rows={3} name="message" placeholder="Description" required />
         </Form.Group>
         <button type="submit" className='kitchen-btn'>{loading ? 'Sending...' : 'Send Review'}</button>
      </form>
   }
   </>
  )
}

export default ReviewForm