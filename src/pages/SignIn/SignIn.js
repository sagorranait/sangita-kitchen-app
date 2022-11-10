import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { StateContext } from '../../StateProvider';
import Form from '../../components/Form/Form';
import toast from 'react-hot-toast';
import usePageTitle from '../../hooks/usePageTitle';

const SignIn = () => {
  usePageTitle('Sign In');
  const { signIn, setLoading } = useContext(StateContext);
  const [logging, setLogging] = useState(false);
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/"; 

  const signInHandler = (e) => {
    e.preventDefault();
    setLogging(true);
    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email, password)
    .then((result) => {
      const user = result.user;
      setLogging(false);
      toast.success('Successfully Login.');

      fetch('https://sangitas-kitchen-server.vercel.app/jwt', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify({
            email: user.email
        })
      })
      .then(res => res.json())
      .then(data => {
          localStorage.setItem('access-token', data.token);
          navigate(from, { replace: true });
      });
      e.target.reset();
    })
    .catch((error) => {
      setLogging(false);
      const errorMessage = error.message;
      toast.error(errorMessage?.split('/')[1]?.replace(').', '').split('-').join(' '));
    })
    .finally(()=>{
      setLoading(false);
    });
  }

  return (
    <Form 
      title="Sign In" 
      description="Sign in to your account using email and password provided during registration."
      toastMessage="Sign-In Successfully."
    >
      <form className='user-form' onSubmit={signInHandler}>
        <input type="email" name="email" id="emailInput" placeholder='Email' required />
        <input type="password" name="password" id="passwordInput" placeholder='Password' required />
        <button type="submit" className='kitchen-btn'>{logging ? 'Logging...' : 'Sign In'}</button>
        <p>Don’t have an account? <Link to='/signup'>Sign Up</Link></p>
      </form>
    </Form>
  )
}

export default SignIn