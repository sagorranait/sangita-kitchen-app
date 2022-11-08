import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import RequireAuth from "./RequireAuth";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import DashBoard from "./pages/DashBoard/DashBoard";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Profile from "./pages/Profile/Profile";

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
               {path: 'addService', element: <p>addService</p>},
               {path: 'reviews', element: <p>reviews</p>}
            ]
         }
      ],
      errorElement: <ErrorPage/>
   },
 ]);

 export { routers }