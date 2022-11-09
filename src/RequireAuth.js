import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "./components/Loading/Loading";
import { StateContext } from './StateProvider';



function RequireAuth({ children }) {
  const {user, loading} = useContext(StateContext);
   let location = useLocation();

  if (loading) {
    return <Loading/>;
  }

   if (!user) {
     return <Navigate to="/signin" state={{ from: location }} replace />
   }
 
   return children;
 }

 export default RequireAuth;