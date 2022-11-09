import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const UpdateReview = () => {
  const updatingReview = useLoaderData();

  const { review, _id, myDate } = updatingReview;
  const {
    reviewText,
    reviewerEmail,
    reviewerName,
    reviewerPhoto,
    serviceId,
    serviceName,
  } = review;

  // console.log(updatingReview);

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const review = form.review.value;

    const updateInfo = {
      reviewText: review,
    };
    console.log(updateInfo);

    fetch(`https://server-side-azure-eight.vercel.app/reviews/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          form.reset();
          toast.success("Successfully added!");
        }
      });
  };
  return (
    <div className="mt-[95px] mb-5">
      <title>Update Review - Photo Master</title>
      <div className="max-w-screen-xl gap-8 px-8 py-16 mx-auto border-2 border-black rounded-lg md:px-12 lg:px-10 xl:px-6 w-10/12 md:w-6/12">
        <h2 className="text-4xl font-bold leading-tight lg:text-3xl">
          Update Review
        </h2>
        <form onSubmit={handleUpdate} className="space-y-6 mt-3">
          <div>
            <textarea
              type="text"
              name="review"
              rows="3"
              className="w-full p-3 rounded"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-orange-400 text-white"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateReview;
