import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
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
         { path: 'profile', element: <p>blog</p> }
      ],
      errorElement: <ErrorPage/>
   },
 ]);

 export { routers }