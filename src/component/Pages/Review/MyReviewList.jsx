import React from "react";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const MyReviewList = ({ info, datas, setDatas }) => {
  const { review, _id, myDate } = info;
  const {
    reviewText,
    reviewerEmail,
    reviewerName,
    reviewerPhoto,
    serviceId,
    serviceName,
  } = review;

  const handleDelete = (info) => {
    const agree = window.confirm(`Are you sure you want to delete`);

    if (agree) {
      fetch(`https://server-side-azure-eight.vercel.app/reviews/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            toast.success("Deleted Success");
            const remaing = datas.filter((d) => d._id !== info._id);
            setDatas(remaing);
          }
        });
    }
  };
  return (
    <div className="flex border-b border-opacity-20 border-gray-700 bg-gray-900">
      <div className="w-32 px-2 py-3 sm:p-3">
        <p>{serviceName}</p>
      </div>
      <div className="flex-1 block px-2 py-3 truncate sm:p-3 sm:w-auto">
        {reviewText}
      </div>
      <div className="w-24 px-2 py-3 text-center sm:p-3 flex gap-3">
        <Link to={`/updateReview/${_id}`}>
          <PencilSquareIcon className="h-6 w-6 text-blue-500" />
        </Link>
        <TrashIcon
          onClick={() => handleDelete(info)}
          className="h-6 w-6 text-red-500"
        />
      </div>
    </div>
  );
};

export default MyReviewList;
