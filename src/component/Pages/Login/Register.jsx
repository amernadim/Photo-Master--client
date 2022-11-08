import React from "react";
import { Link } from "react-router-dom";
// import Lottie from "lottie-react";
// import registerAnimation from "../../Assets/register.json";

const Register = () => {
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name,email,password);

  }
  return (
    <div className="flex mt-[90px]">

      {/* <div className='px-5 pt-6 pb-5 text-center border border-gray-300 rounded lg:w-2/5"'>
        <Lottie animationData={registerAnimation} loop={true} />
      </div> */}

      <div className="flex max-w-md p-6 rounded-md sm:p-10  border-2 border-slate-600 mx-auto mb-6">
        <form onSubmit={handleRegister} className="space-y-5 ">
          <h1 className="my-1 text-center text-2xl font-bold">Register</h1>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">
                User Name
              </label>
              <input
                type="name"
                name="name"
                placeholder="user name"
                className="w-full px-3 py-2 border rounded-md border-gray-700 "
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="w-full px-3 py-2 border rounded-md border-gray-700 "
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md border-gray-700 "
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md bg-orange-500 text-white"
              >
                Sign in
              </button>
            </div>
            <p className="px-6 text-sm text-center">
              Allready Have An Account?
              <Link to="/login" className="hover:underline ">
                Login
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
