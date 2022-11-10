import { useState } from "react";
import { Modal } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import './Review.css';

const Review = ({buttons, data, deleteHandler, load}) => {
   const {_id, user_info, service, review, rating, date} = data;
   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
   <div className='review'>
      {buttons && <h3>For : <span>{service.title}</span></h3>}
      <div className="user-info">
         <div className="user-img">
            <img src={user_info.photoURL} alt={user_info.name}/>
         </div>
         <div className="user-content">
            <h3>{user_info.name}</h3>
            <p>{date.slice(0, 10)}</p>
            <h4>{rating} <AiFillStar/></h4>
         </div>
         {buttons && 
            <div className="action-button">
               <button className="kitchen-btn">Edit</button>
               <button className="kitchen-btn" onClick={handleShow}>Delete</button>
            </div>
         }
      </div>
      <div className="user-review">
         <p>{review}</p>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body className="text-center">
            Are you sure, you want to delete this review.
        </Modal.Body>
        <Modal.Footer className="pt-0 border-top-0">
          <button className="kitchen-btn" onClick={() => deleteHandler(_id)}>{load ? 'Yes...' : 'Yes'}</button>
          <button className="kitchen-btn" onClick={handleClose}>No</button>
        </Modal.Footer>
      </Modal>
   </div>
  )
}

export default Review