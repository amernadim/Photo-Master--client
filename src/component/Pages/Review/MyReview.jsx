import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import MyReviewList from './MyReviewList';


const MyReview = () => {
  const [datas,setDatas] = useState([])
  // map
  // const [display,setDisplay] = useState(datas);

  const {user} = useContext(AuthContext)
  const email = user?.email;
  useEffect(() => {
    fetch(`http://localhost:5000/reviewes/${email}`)
    .then(res => res.json())
    .then(data => setDatas(data))
    .catch(err => console.log(err))
  },[])

  return (
  <div>
    <title>My Review - Photo Master</title>
   
   { datas?.length > 0 ?
       <div className="container p-2 mx-auto sm:p-4 text-gray-100 mt-[90px]">

	<div className="flex flex-col text-xs">
		<div className="flex text-left bg-gray-700">		
			<div className="w-32 px-2 py-3 sm:p-3">Service</div>
			<div className="flex-1 px-2 py-3 sm:p-3">My Review</div>
			<div className="w-24 pl-4 py-3 text-right sm:p-3 ">Action</div>
		</div>

    {
      datas.map(info => <MyReviewList
      key={info._id}
      info={info}
      datas={datas}
      setDatas={setDatas}
      ></MyReviewList>)
    }

	</div>
</div>

    :

    <div className='mt-[90px] mb-7'>
      <h2 className='text-center text-orange-600 text-3xl font-bold '>No Review were added</h2>
    </div>



   }

  
  </div>
    
  );
};

export default MyReview;