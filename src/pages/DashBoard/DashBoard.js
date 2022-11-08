import { useContext } from 'react';
import { BiUser, BiShoppingBag, BiStar, BiArrowFromRight } from "react-icons/bi";
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';
import { StateContext } from '../../StateProvider';
import './DashBoard.css'

const DashBoard = () => {
  const {user} = useContext(StateContext);

  console.log(user)
  return (
    <section id='dashboard'>
         <Container>
            <Row>
               <Col sm={12} md={3} lg={3} xl={3} xxl={3}>
                  <div className='sidebar'>
                     <div className="user-info">
                        <img src={user?.photoURL} alt={user?.displayName} />
                        <h2>{user?.displayName}</h2>
                        <p>{user?.email}</p>
                     </div>
                     <div className="navs">
                     <NavLink 
                        to='/dashboard/profile' 
                        className={`nav-item ${({ isActive }) => isActive ? "active" : ""}` }
                        end
                     >
                        <BiUser/> My Profile
                     </NavLink>
                     <NavLink 
                        to='/dashboard/addService' 
                        className={`nav-item ${({ isActive }) => isActive ? "active" : ""}` }
                     >
                        <BiShoppingBag/> Add Service
                     </NavLink>
                     <NavLink 
                        to='/dashboard/reviews' 
                        className={`nav-item ${({ isActive }) => isActive ? "active" : ""}` }
                     >
                        <BiStar/> My Reviews
                     </NavLink>
                     <li className='nav-item'><BiArrowFromRight/> Sign Out</li>
                     </div>
                  </div>
               </Col>
               <Col sm={12} md={9} lg={9} xl={9} xxl={9}>
                  <Outlet/>
               </Col>
            </Row>
         </Container>
    </section>
  )
}

export default DashBoard