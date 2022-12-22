import { useContext, useState } from 'react';
import { 
   Container, 
   Nav, 
   Navbar,
} from 'react-bootstrap';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { StateContext } from '../../StateProvider';
import { FaBars } from "react-icons/fa";
import Logo from '../../assets/logo.png';
import toast from 'react-hot-toast';
import './Header.css';

function Header() {
  const navigate = useNavigate();
  const {user, signOutUser} = useContext(StateContext);
  const [expended, setExpended] = useState(false);

  const userSignOut = () => {
      signOutUser()
      .then(()=>{
         navigate('/');
      })
      .catch(error => {
         const errorMessage = error.message;
         toast.error(errorMessage?.split('/')[1]?.replace(').', '').split('-').join(' '));
      });
      setExpended(false);
  }

  return (
   <Navbar expanded={expended} expand="lg">
      <Container>
         <Link to='/'>
            <img alt="Cloud Kitchen (Classic Food)" src={Logo} className="d-inline-block align-top kitchen-logo" />
         </Link>
        <Navbar.Toggle onClick={() => setExpended(expended ? false : "expanded")} aria-controls="basic-navbar-nav"><FaBars/></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink 
               to='/' 
               className={`nav-link ${({ isActive }) => isActive ? "active" : ""}` }
               onClick={() => setExpended(false)}
               end
            >
               Home
            </NavLink>
            <NavLink 
               to='/blogs' 
               className={`nav-link ${({ isActive }) => isActive ? "active" : ""}` }
               onClick={() => setExpended(false)}
            >
               Blog
            </NavLink>
            {
               user ? 
               <>
                  <NavLink 
                     to='/dashboard/profile' 
                     className={`nav-link ${({ isActive }) => isActive ? "active" : ""}` }
                     onClick={() => setExpended(false)}
                  >
                     My Profile
                  </NavLink>
                  <NavLink 
                     to='/dashboard/addService' 
                     className={`nav-link ${({ isActive }) => isActive ? "active" : ""}` }
                     onClick={() => setExpended(false)}
                  >
                     Add Service
                  </NavLink>
                  <NavLink 
                     to='/dashboard/reviews' 
                     className={`nav-link ${({ isActive }) => isActive ? "active" : ""}` }
                     onClick={() => setExpended(false)}
                  >
                     My Reviews
                  </NavLink>
               </> 
               : ''
            }
          </Nav>
        <div className='nav-user navbar-nav'>
            {
               user?.email || user?.displayName ? 
               <Link className='nav-link' to='/signin' onClick={userSignOut}>Sign Out</Link>
               : <Link onClick={() => setExpended(false)} className='nav-link' to='/signin'>Sign In</Link>
            }
        </div>
        </Navbar.Collapse>
      </Container>
   </Navbar>
  )
}

export default Header