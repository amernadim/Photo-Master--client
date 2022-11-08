import React, { useContext } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import LoginAnimation from "../../Assets/login.json";
import { AuthContext } from "../../Context/AuthProvider";
import { Result } from "postcss";
import toast from "react-hot-toast";

const Login = () => {
  const {login,googleSingIn} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/" ;

    const handleLogin = (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
  
      // console.log(email,password);
      login(email,password)
      .then(result => {
        const user = result.user;
        toast.success('Login Succesfully');
        form.reset()
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch(err => {
        toast.error(err.message);
        console.log(err);
      }) 
    }

   const handleGoogleLogin = () => {
     googleSingIn()
     .then(result => {
      const user = result.user;
      toast.success('Login Succesfully');
      navigate(from, { replace: true });
      console.log(user);
    })
    .catch(err => {
      toast.error(err.message);
      console.log(err);
    }) 
   }


  return (
    <div className="hero min-h-screen mt-[90px]">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">

         <div className='px-5 pt-6 pb-5 text-center border border-gray-300 rounded lg:w-2/5"'>
        <Lottie animationData={LoginAnimation} loop={true} />
      </div>

      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <h1 className="text-3xl font-bold text-center mt-3">Sign in now!</h1>

        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="text" name="email" placeholder="email" className="input input-bordered bg-white" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="text" name="password" placeholder="password" className="input input-bordered bg-white" />
            <label className="label">
              <Link to="#" className="label-text-alt link link-hover">Forgot password?</Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-warning">Login</button>
          </div>
        </form>

        
		
		<p className="px-3 text-sm text-center">Login with Google</p>	
	<div className="flex justify-center space-x-4">
		<button onClick={ handleGoogleLogin} aria-label="Log in with Google" className="p-3 rounded-sm btn mt-3">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
				<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
			</svg>
		</button>
    </div>

         
          <p className="px-6 text-sm text-center my-5">
              You have no account?
              <Link to="/register" className="hover:underline ">
                Sign up
              </Link>
              .
            </p>

      </div>
    </div>
  </div>
  );
};

export default Login;
