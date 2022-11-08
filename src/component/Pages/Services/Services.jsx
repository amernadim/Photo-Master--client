import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllServices from './AllServices';

const Services = () => {
  const allServices = useLoaderData();
  // console.log(allServices);
  return (
    <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto my-10'>
     {
     allServices.map(services => <AllServices
     key={services._id}
     services={services}
     ></AllServices>)
     }
    </div>
  );
};

export default Services;