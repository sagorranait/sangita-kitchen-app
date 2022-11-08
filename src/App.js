import { Outlet, ScrollRestoration } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className="app">
      <Header/>
      <Outlet/>
      <Footer/>
      <ScrollRestoration />
      <Toaster/>
    </div>
  );
}

export default App;
