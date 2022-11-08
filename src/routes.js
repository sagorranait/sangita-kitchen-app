import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import RequireAuth from "./RequireAuth";
import Profile from "./pages/Profile/Profile";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import DashBoard from "./pages/DashBoard/DashBoard";
import AddService from "./pages/AddService/AddService";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const routers = createBrowserRouter([
   { 
      path: '/', 
      element: <App/>,
      children: [
         { index: true, element: <p>Home</p>, },
         { path: 'blogs', element: <p>blog</p> },
         { path: 'signin', element: <SignIn/> },
         { path: 'signup', element: <SignUp/> },
         { 
            path: 'dashboard',
            element: <RequireAuth><DashBoard/></RequireAuth>,
            children: [
               {path: 'profile', element: <RequireAuth><Profile/></RequireAuth>},
               {path: 'addService', element: <RequireAuth><AddService/></RequireAuth>},
               {path: 'reviews', element: <p>reviews</p>}
            ]
         }
      ],
      errorElement: <ErrorPage/>
   },
 ]);

 export { routers }