import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Register = () => {
  const {createUser,updateUserProfile} = useContext(AuthContext)
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email,password)
    .then(result => {
      const user = result.user;
      handleUpdateUserProfile(name,photoURL)
      toast.success('You Succesfully Signup');
      form.reset()
      console.log(user);
    })
    .catch(err => {
      console.log(err)
      toast.error(err.message)
    })

    // console.log(name,email,password);
  }
  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName : name ,
      photoURL : photoURL
    }
    updateUserProfile(profile)
    .then(() => {})
    .catch(error => {
      console.log(error.message);
    })
  }
  return (
      <div className="flex max-w-md p-6 rounded-md sm:p-10  border-2 border-slate-600 mx-auto mb-6 mt-[90px]">
        <form onSubmit={handleRegister} className="space-y-5 mx-auto">
          <h1 className="my-1 text-center text-3xl font-bold">Sign up</h1>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">
                User Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="user name"
                className="w-full px-3 py-2 border rounded-md border-gray-700 "
                required
               />
            </div>
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">
                Photo Url
              </label>
              <input
                type="text"
                name="photoURL"
                placeholder="photoURL"
                className="w-full px-3 py-2 border rounded-md border-gray-700 "
                required
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
                required
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
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md bg-orange-500 text-white"
              >
                Sign up
              </button>
            </div>
            <p className="px-6 text-sm text-center">
              Allready Have An Account?
              <Link to="/login" className="hover:underline ">
                Sign in
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
   
  );
};

export default Register;
