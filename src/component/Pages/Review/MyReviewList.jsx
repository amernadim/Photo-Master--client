import React from 'react';
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import { Link } from 'react-router-dom';

const MyReviewList = ({info}) => {
  const {review,_id,myDate} = info;
  const {reviewText,reviewerEmail,reviewerName,reviewerPhoto,serviceId,serviceName} = review
  return (
     <div className="flex border-b border-opacity-20 border-gray-700 bg-gray-900">
			<div className="w-32 px-2 py-3 sm:p-3">
				<p>{serviceName}</p>
			</div>
			<div className="flex-1 block px-2 py-3 truncate sm:p-3 sm:w-auto">{reviewText}</div>
      <div className="w-24 px-2 py-3 text-center sm:p-3 flex gap-3">
      <Link to="">
          <PencilSquareIcon className="h-6 w-6 text-blue-500"/>
        </Link>
        <TrashIcon
          className="h-6 w-6 text-red-500"
        />
      </div>
		</div> 
  );
};

export default MyReviewList;