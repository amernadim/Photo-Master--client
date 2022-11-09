import React from 'react';
import toast from 'react-hot-toast';

const AddService = () => {

	const handleSubmit = event => {
		event.preventDefault()
		const form = event.target;
		
		const service = form.service.value;
		const price = form.price.value;
		const image = form.image.value;
		const description = form.description.value;
		const photoshoot = form.photoshoot.value;

		// console.log(service,price,image,description,photoshoot);

		const services = {
			service,
			price,
			image,
			description,
			photoshoot
		}
	  
		fetch('http://localhost:5000/allServices' , {
			method : "POST",
			headers : {
				'content-type' : 'application/json'
			},
			body : JSON.stringify(services)
		})
		.then(res => res.json())
		.then(data => {
			console.log(data)
			if(data.acknowledged) {
				form.reset()
				toast.success('Service Successfully Added')
			}
		})
		.catch(err => console.error(err))

	}

  return (
    <section className="p-6 mt-[90px] mx-auto w-11/12">
			<title>Add Services - Photo Master</title>
	  <form onSubmit={handleSubmit} className="container flex flex-col mx-auto space-y-12">

			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">

				<div className="col-span-full sm:col-span-3">				
					<label className="text-md">Service Name</label>
					<input type="text" name='service' className="w-full rounded-md py-1 px-2" required/>
				</div>

				<div className="col-span-full sm:col-span-3">
					<label className="text-md">Price</label>
					<input type="number" name='price' className="w-full rounded-md py-1 px-2 " required/>
				</div>

				<div className="col-span-full sm:col-span-3">
					<label className="text-md">Photo URl</label>
					<input type="text" name='image' className="w-full rounded-md py-1 px-2" required/>
				</div>

				<div className="col-span-full">
					<label className="text-md">Description</label>
					<input type="text" name='description' className="w-full rounded-md py-1 px-2" required/>
				</div>

				<div className="col-span-full sm:col-span-2">
					<label className="text-md">Photoshoot</label>
					<input  type="number" name='photoshoot' className="w-full rounded-md py-1 px-2" required/>
				</div>

				<div className="col-span-full sm:col-span-2">
					<label className="text-md text-base-100">.</label>
					<button className='btn btn-sm w-full rounded-md py-1 px-2' type="submit">Add Service</button>
				</div>

				

			</div>
		
	</form>
</section>
  );
};

export default AddService;