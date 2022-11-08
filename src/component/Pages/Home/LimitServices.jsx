import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServicesCard from './ServicesCard';

const LimitServices = () => {
  const [limitService,setLimitServices] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:5000/limitServices')
    .then(res => res.json())
    .then(data => setLimitServices(data))
  },[])

  return (
    <div className='my-10'>
      <p className="text-4xl font-bold text-orange-600 text-center">Services</p>

      <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto my-10'>
      {
        limitService.map(services => <ServicesCard 
          key={services._id}
          services={services}
        ></ServicesCard>)
      }
      </div>  
      <div className='text-center'>
      <button className='btn px-3 py-2' ><Link to="/services">See All</Link></button>
      </div>   
    </div>
  );
};

export default LimitServices;