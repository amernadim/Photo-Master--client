import React from 'react';

const ServicesCard = ({services}) => {
  // console.log(service);
  const {_id ,service,price,rating ,image,photoshoot,description } = services;
  return (
    <div className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100">
	<div className="flex justify-between pb-4 border-bottom">
		<div className="flex items-center">
			<p  className="mb-0 text-xl font-bold">{service}</p>
		</div>
	</div>
	<div className="space-y-4">
		<div className="space-y-2">
			<img src={image} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
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
	</div>
</div>
  );
};

export default ServicesCard;