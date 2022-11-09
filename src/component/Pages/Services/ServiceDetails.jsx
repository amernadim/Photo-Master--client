import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import ReviewCard from "../Review/ReviewCard";

const ServiceDetails = () => {
  const {user} = useContext(AuthContext);
  const serviceInfo = useLoaderData();
  // get data state
  const [datas,setDatas] = useState([]);
  // console.log(datas);
  const { _id, service, price, rating, image, photoshoot, description } =
  serviceInfo;

  const handleReview = event => {
    event.preventDefault()
    const form = event.target;
    const review = form.review.value;

    const reviewInfo = {
      serviceId : _id,
      serviceName : service,
      reviewerName : user.displayName,
      reviewerEmail : user.email,
      reviewerPhoto : user?.photoURL,
      reviewText : review,
    }

    // console.log(reviewInfo);

    // post data
    fetch('http://localhost:5000/allreviews', {
      method : "POST",
			headers : {
				'content-type' : 'application/json'
			},
			body : JSON.stringify(reviewInfo)
		})
		.then(res => res.json())
		.then(data => {
			console.log(data)
			if(data.acknowledged) {
				form.reset()
				toast.success('Review Successfully Added')
			}
		})
		.catch(err => console.error(err))

  }

  // get data
  useEffect(() => {
    fetch(`http://localhost:5000/reviews/${_id}`)
    .then(res => res.json())
    .then(data => setDatas(data))
    .catch(err => console.log(err))
  },[])

  return (
    <>
     <section className="mt-[90px] my-3 service-section w-10/12 mx-auto">
     <title>Services Details - Photo Master</title>
      <div className="container flex gap-5 flex-col mx-auto lg:flex-row">
        <div className="w-full lg:w-1/3">
          <img src={image} alt="" />
        </div>
        <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-0">
          <h2 className="text-3xl font-semibold leading-none">{service}</h2>
          <p className="mt-4 mb-8 text-sm">{description}</p>
          <h2 className="font-bold">Price : {price} BDT and more.</h2>
          <h2 className="font-bold">Photo Quantity : {photoshoot} and more.</h2>
        </div>
      </div>
    </section>

    <hr className="border-2 bg-black"/>
    <div className="my-5">
      <h2 className="text-2xl font-bold text-center text-orange-500">Review</h2>
    </div>

    {/* Reviews */}
    <section className="review-section grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto my-10 ">

      {
        datas.map(info => <ReviewCard
        key={info._id}
        info={info}
        ></ReviewCard> )
      }
  
    </section>

    <section className="user-review-fild my-4">
    
    { 
    user?.uid ?

       <div className="max-w-screen-xl gap-8 px-8 py-16 mx-auto border-2 border-black rounded-lg md:px-12 lg:px-10 xl:px-6 w-10/12 md:w-6/12">	
       <h2 className="text-4xl font-bold leading-tight lg:text-3xl">Let's send your opinion!</h2> 
       <form onSubmit={handleReview} className="space-y-6 mt-3">
      <div>
       <textarea type="text" name="review" rows="3" className="w-full p-3 rounded dark:bg-gray-800"></textarea>
     </div>
     <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-orange-400 text-white">Send Review</button>
      </form>
     </div>
     : 
     <h2 className="text-xl font-bold text-center text-orange-500">Please signin to add a review</h2>

    }   
    </section>

    
    </>
  );
};

export default ServiceDetails;
