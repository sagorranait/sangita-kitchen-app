import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Blog from "./pages/Blog/Blog";
import RequireAuth from "./RequireAuth";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Reviews from "./pages/Reviews/Reviews";
import Services from "./pages/Services/Services";
import DashBoard from "./pages/DashBoard/DashBoard";
import AddService from "./pages/AddService/AddService";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const routers = createBrowserRouter([
   { 
      path: '/', 
      element: <App/>,
      children: [
         { index: true, element: <Home/> },
         { path: 'blogs', element: <Blog/> },
         { path: 'signin', element: <SignIn/> },
         { path: 'signup', element: <SignUp/> },
         { path: 'services', element: <Services/>},
         { 
            path: 'dashboard',
            element: <RequireAuth><DashBoard/></RequireAuth>,
            children: [
               {
                  path: 'profile', 
                  element: <RequireAuth><Profile/></RequireAuth>
               },
               {
                  path: 'addService', 
                  element: <RequireAuth><AddService/></RequireAuth>
               },
               {
                  path: 'reviews', 
                  element: <RequireAuth><Reviews/></RequireAuth>
               }
            ]
         }
      ],
      errorElement: <ErrorPage/>
   },
 ]);

 export { routers }