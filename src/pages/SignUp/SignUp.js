import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { StateContext } from '../../StateProvider';
import toast from 'react-hot-toast';
import Form from '../../components/Form/Form';
import usePageTitle from '../../hooks/usePageTitle';

const SignUp = () => {
  usePageTitle('Sign Up');
  const {signUp, updateUserProfile, signOutUser} = useContext(StateContext);
  let navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);

  const signUpHandler = (event) => {
    event.preventDefault();
    const formData = event.target;
    setSubmitting(true);

    const name = formData.name.value;
    const photoUrl = formData.photoUrl.value;
    const email = formData.email.value;
    const password = formData.password.value;

    if (name.length < 3) {
      toast.error("Name is too short!");
    }

    if (password.length < 5) {
      toast.error("Password is too short!");
    }

    signUp(email, password)
    .then(() => {
      signOutUser()
        .then(()=>{
          toast.success('Successfully account created.');
          setSubmitting(false);
          navigate('/signin');
        });
      updateUserProfile({displayName: name, photoURL: photoUrl})
      .then(()=>{
        setSubmitting(false);
      })
      .catch(error => {
        setSubmitting(false);
        const errorMessage = error.message;
        toast.error(errorMessage?.split('/')[1]?.replace(').', '').split('-').join(' '));
      });
    })
    .catch((error) => {
      setSubmitting(false);
      const errorMessage = error.message;
      toast.error(errorMessage?.split('/')[1]?.replace(').', '').split('-').join(' '));
    });
  }

  return (
    <Form 
      title="Sign Up" 
      description="Registration takes less than a minute but gives you full control over your review."
      toastMessage="Sign-Up Successfully."
    >
      <form className='user-form' onSubmit={signUpHandler}>
        <input type="text" name="name" id="nameInput" placeholder='Name' />
        <input type="url" name="photoUrl" id="urlInput" placeholder='Photo URL' required />
        <input type="email" name="email" id="emailInput" placeholder='Email' required />
        <input type="password" name="password" id="passwordInput" placeholder='Password' required />
        <button type="submit" className='kitchen-btn'>{submitting ? 'Submitting...' : 'Sign Up'}</button>
        <p>Already have an account? <Link to='/signin'>Sign In</Link></p>
      </form>
    </Form>
  )
}

export default SignUp