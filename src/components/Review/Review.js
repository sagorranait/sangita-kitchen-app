import { AiFillStar } from "react-icons/ai";
import './Review.css';

const Review = () => {
  return (
   <div className='review'>
      <div className="user-info">
         <div className="user-img">
            <img src="https://avatars.githubusercontent.com/u/60606778?v=4" alt="user-name" />
         </div>
         <div className="user-content">
            <h3>Annette Black</h3>
            <p>August 29, 2020</p>
            <h4>3 <AiFillStar/></h4>
         </div>
      </div>
      <div className="user-review">
         <p>Vel velit pulvinar montes, sit rhoncus odio molestie. Venenatis nunc fames ut proin adipiscing sit. Etiam egestas elit varius a, vestibulum bibendum nibh sociis in. Ut facilisis sit eget cum fringilla. Dapibus mauris viverra est sed risus quam lacinia aliquam.</p>
      </div>
   </div>
  )
}

export default Review