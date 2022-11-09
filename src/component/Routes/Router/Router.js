import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../ErrorPage/ErrorPage";
import Main from '../../Layout/Main';
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Login/Register";
import MyReview from "../../Pages/Review/MyReview";
import UpdateReview from "../../Pages/Review/UpdateReview";
import AddService from "../../Pages/Services/AddService";
import ServiceDetails from "../../Pages/Services/ServiceDetails";
import Services from "../../Pages/Services/Services";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {path : '/' , element : <Main/>, 
   errorElement : <ErrorPage/>, children : [
    {
      path : '/' , element : <Home/>
    },
    {
      path : '/home' , element : <Home/>
    },
    {
      path : '/services' , element : <Services/>
    },
    {
      path : '/service/:id' , element : <ServiceDetails/>,
      loader : ({params}) => fetch(`http://localhost:5000/service/${params.id}`)
    },
    {
      path : '/addService' , element : <PrivateRoute><AddService/></PrivateRoute>
    },
    {
      path : '/myReview' , element : <PrivateRoute><MyReview/></PrivateRoute>
    
    },
    {
      path : '/login' , element : <Login/>
    },
    {
      path : '/register' , element : <Register/>
    },
    {
      path : '/blog' , element : <Blog/>
    },
    {
      path : '/updateReview/:id' , element : <UpdateReview/>,
      loader : ({params}) => fetch(`http://localhost:5000/review/${params.id}`)
    }
    
  ]}
])