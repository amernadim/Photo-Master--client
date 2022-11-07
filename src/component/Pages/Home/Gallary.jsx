import React from 'react';
import Img1 from "../../Assets/imges/img-1.jpg";
import Img2 from "../../Assets/imges/img-2.jpg";
import Img3 from "../../Assets/imges/img-3.jpg";
import Img4 from "../../Assets/imges/img-4.jpg";
import Img5 from "../../Assets/imges/img-5.jpg";
import Img6 from "../../Assets/imges/img-6.jpg";
import Img7 from "../../Assets/imges/img-7.jpg";
import Img8 from "../../Assets/imges/img-8.jpg";
import Img9 from "../../Assets/imges/img-9.jpg";
import Img10 from "../../Assets/imges/img-10.jpg";

const Gallary = () => {
  return (
    <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
	<div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
		<img src={Img10} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={Img1} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={Img2} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={Img3} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={Img4} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={Img5}/>
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={Img6}/>
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"src={Img7}/>
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={Img8} />
		<img src={Img9} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square" />
	</div>
</section>
  );
};

export default Gallary;