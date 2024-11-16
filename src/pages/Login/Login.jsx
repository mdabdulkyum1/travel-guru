import { FaFacebookF, FaGoogle } from "react-icons/fa";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <Navbar></Navbar>

      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Username or Email
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2 text-sm">Remember Me</span>
            </label>
            <a href="#" className="text-sm text-orange-500">
              Forgot Password
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded mt-4"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <Link to="/signUp" className="text-orange-500">
            Create an account
          </Link>
        </p>
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500">Or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <div className="space-y-4">
          <button className="w-full flex items-center justify-center border border-gray-300 rounded py-2">
            <FaFacebookF className="text-blue-600 mr-2" />
            Continue with Facebook
          </button>
          <button className="w-full flex items-center justify-center border border-gray-300 rounded py-2">
            <FaGoogle className="text-red-600 mr-2" />
            Continue with Google
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
