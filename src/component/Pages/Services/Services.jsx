import React, { useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import AllServices from './AllServices';

const Services = () => {
  // const allServices = useLoaderData();
  // console.log(allServices);
  
  const [servicesInfo,setServicesInfo] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/allServices')
    .then(res => res.json())
    .then(data => {
      setServicesInfo(data)
      setLoading(false)
    })
  },[])

  if(loading) {
    return <Spinner/>
  }


  return (
  <div className='mt-[90px]'>
    <title>Services - Photo Master</title>
      <p className="text-3xl font-bold text-orange-600 text-center">All Services</p>
 
    <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto my-10 '>      
    {
    servicesInfo.map(services => <AllServices
    key={services._id}
    services={services}
    ></AllServices>)
    }
   </div>
  
  </div>
  );
};

export default Services;