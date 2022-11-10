import { useState } from "react";
import { Modal } from "react-bootstrap";
import ReviewForm from "../ReviewForm/ReviewForm";
import './Review.css';

const Review = ({buttons, data, deleteHandler, updateHandler, editId, updateData, load}) => {
   const {_id, user_info, service, review, date} = data;
   const [showDeleteModal, setShowDeleteModal] = useState(false);
   const [showEditModal, setShowEditModal] = useState(false);

  const editModalClose = () => setShowEditModal(false);
  const editModalShow = () => setShowEditModal(true);
  const deleteModalClose = () => setShowDeleteModal(false);
  const deleteModalShow = () => setShowDeleteModal(true);

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
         </div>
         {buttons && 
            <div className="action-button">
               <button className="kitchen-btn" onClick={editModalShow}>Edit</button>
               <button className="kitchen-btn" onClick={deleteModalShow}>Delete</button>
            </div>
         }
      </div>
      <div className="user-review">
         <p>{review}</p>
      </div>
      <Modal
        show={showEditModal}
        onHide={editModalClose}
        backdrop="static"
        keyboard={false}
      >
         <Modal.Header closeButton>
          <Modal.Title>Update Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ReviewForm 
               formHandler={updateHandler} 
               loading={load} 
               edit={true} 
               editId={editId} 
               updateData={updateData}
            />
        </Modal.Body>
      </Modal>
      <Modal
        show={showDeleteModal}
        onHide={deleteModalClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body className="text-center">
            Are you sure, you want to delete this review.
        </Modal.Body>
        <Modal.Footer className="pt-0 border-top-0">
          <button className="kitchen-btn" onClick={() => deleteHandler(_id)}>{load ? 'Yes...' : 'Yes'}</button>
          <button className="kitchen-btn" onClick={deleteModalClose}>No</button>
        </Modal.Footer>
      </Modal>
   </div>
  )
}

export default Review