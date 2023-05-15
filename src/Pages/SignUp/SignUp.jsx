import { Link } from "react-router-dom";
import signup from "../../../src/assets/images/login/login.svg";
const SignUp = () => {

    const handleSignUp = e => {
        e.preventDefault()
    }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row gap-20">
        <div className="w-1/2">
          <img src={signup} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ms-auto">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center">Sign Up</h1>
            <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name= "name"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name= "email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="confirm password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-secondary text-white"
                  type="submit"
                  value="Sign Up"
                />
              </div>
              <p className="text-sm text-center mt-3">Already have an account? <Link className="text-error font-bold" to="/login">Login</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;