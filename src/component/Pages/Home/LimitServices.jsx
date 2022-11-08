import React, { useEffect, useState } from 'react';

const LimitServices = () => {
  const [limitService,setLimitServices] = useState({})
  useEffect(() => {
    fetch('http://localhost:5000/limitServices')
    .then(res => res.json())
    .then(data => console.log(data))
  },[])
  return (
    <div>
     limit services
    </div>
  );
};

export default LimitServices;