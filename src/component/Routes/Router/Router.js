import { createBrowserRouter } from "react-router-dom";
import Main from '../../Layout/Main';
import Home from "../../Pages/Home/Home";
import ServiceDetails from "../../Pages/Services/ServiceDetails";
import Services from "../../Pages/Services/Services";

export const router = createBrowserRouter([
  {path : '/' , element : <Main/>, children : [
    {
      path : '/' , element : <Home/>
    },
    {
      path : '/home' , element : <Home/>
    },
    {
      path : '/services' , element : <Services/>,
      loader : () => fetch('http://localhost:5000/allServices')
    },
    {
      path : '/service/:id' , element : <ServiceDetails/>
    }

  ]}
])