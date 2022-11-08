import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StateContext } from '../../StateProvider';
import { Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import './Profile.css'

const Profile = () => {
   const navigate = useNavigate();
   const { user, updateUserProfile } = useContext(StateContext);
   const [updating, setUpdating] = useState(false);
   const [userInfo, setUserInfo] = useState({ 
      displayName: user?.displayName || '', photoURL: user?.photoURL || '', 
   });

   const handleChange = (e) => {
      setUserInfo((pre)=>{ return {...pre, [e.target.name] : e.target.value} });
   }

   const profileUpdateHandler = (e) => {
      e.preventDefault();
      
      setUpdating(true);
      updateUserProfile(userInfo)
      .then(() => {
        setUpdating(false);
        toast.success('Profile Updated Successfully.');
        navigate('/dashboard/profile');
      }).catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage?.split('/')[1]?.replace(').', '').split('-').join(' '));
      });
    }


  return (
   <div className='user-profile outlet-page'>
      <h2>My Profile</h2>
      <form className='update-profile' onSubmit={profileUpdateHandler}>
      <Form.Group className="mb-3">
          <Form.Control type="text" name="displayName" id="nameInput" placeholder="Name" value={userInfo?.displayName} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3">
          <Form.Control type="url" name="photoURL" id="urlInput" placeholder="Photo Url" value={userInfo?.photoURL} onChange={handleChange} />
      </Form.Group>
      <button type="submit" className='kitchen-btn'>{updating ? 'Updating...' : 'Update Profile'}</button>
    </form>
   </div>
  )
}

export default Profile