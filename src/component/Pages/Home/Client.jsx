import React from 'react';
import Client1 from "../../Assets/Clients/client-1.jpg";
import Client2 from "../../Assets/Clients/client-2.jpg";
import Client3 from "../../Assets/Clients/client-3.jpg";
import Client4 from "../../Assets/Clients/client-4.jpg";
import Client5 from "../../Assets/Clients/client-5.jpg";
import Client6 from "../../Assets/Clients/client-6.jpg";
import Client7 from "../../Assets/Clients/client-7.jpg";
import Client8 from "../../Assets/Clients/client-8.jpg";


const Client = () => {
  return (
    <section className="p-6 bg-white">
			{/* Client Section */}
	<div className="container p-4 mx-auto text-center">
		<h3 className="text-4xl font-bold">Trusted clients who has taken Photo Master's services</h3>
	</div>
	<div className="container flex flex-wrap justify-center mx-auto dark:text-gray-400">
		<div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
			<img className='fill-current w-20 h-20' src={Client1} alt="" />
		</div>
		<div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
		<img className='fill-current w-20 h-20' src={Client2} alt="" />
		</div>
		<div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
    <img className='fill-current w-20 h-20' src={Client3} alt="" />
		</div>
		<div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
    <img className='fill-current w-20 h-20' src={Client4} alt="" />
		</div>
		<div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
    <img className='fill-current w-20 h-20' src={Client5} alt="" />
		</div>
		<div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
    <img className='fill-current w-20 h-20' src={Client6} alt="" />
		</div>
		<div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
    <img className='fill-current w-20 h-20' src={Client7} alt="" />
		</div>
		<div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
    <img className='fill-current w-20 h-20' src={Client8} alt="" />
		</div>
	</div>
</section>
  );
};

export default Client;