import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServicesCard = ({services}) => {
  // console.log(service);
  const {_id ,service,price,image,photoshoot,description } = services;
  return (
    <div className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100">
	<div className="flex justify-between pb-4 border-bottom">
		<div className="flex items-center">
			<p  className="mb-0 text-xl font-bold">{service}</p>
		</div>
	</div>
	<div className="space-y-4">
		<div className="space-y-2">
      
      <PhotoProvider>
      <PhotoView src={image}>
      <img src={image} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
      </PhotoView>
      </PhotoProvider>

			<div className="flex justify-between text-xs">
      <div className="rating rating-xs">
        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400"/>
    </div>
			</div>
		</div>
    
    <div>
      <h2 className='font-bold'>Price : {price} BDT and more.</h2>
      <h2 className='font-bold'>Photo Quantity : {photoshoot} and more.</h2>
    </div>

		<div className="space-y-2">
			<p className="">{description.slice(0,100)}...</p>
		</div>
    <div>
      <button className='btn glass p-0 m-0' >
        <Link to={`/service/${_id}`} className='flex gap-5 py-3 px-4 items-center text-black' >Details <ChevronDoubleRightIcon  className="h-6 w-6 text-orange-500"/> </Link>
      </button>
    </div>
	</div>
</div>
  );
};

export default ServicesCard;