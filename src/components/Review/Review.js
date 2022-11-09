import { AiFillStar } from "react-icons/ai";
import './Review.css';

const Review = ({buttons, data}) => {
   const {_id, user_info, service, review, rating, date} = data;
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
               <button className="kitchen-btn">Delete</button>
            </div>
         }
      </div>
      <div className="user-review">
         <p>{review}</p>
      </div>
   </div>
  )
}

export default Review