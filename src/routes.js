import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const routers = createBrowserRouter([
   { 
      path: '/', 
      element: <App/>,
      children: [
         { index: true, element: <p>Home</p>, },
         { path: 'faq', element: <p>blog</p> },
         { path: 'signin', element: <p>blog</p> },
         { path: 'signup', element: <p>blog</p> },
         { path: 'profile', element: <p>blog</p> }
      ],
      errorElement: <ErrorPage/>
   },
 ]);

 export { routers }