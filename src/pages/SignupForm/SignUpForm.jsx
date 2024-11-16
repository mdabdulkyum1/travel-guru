import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';

function SignUpForm() {
  return (
    <>
    <Navbar></Navbar>
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6">Create an account</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">First Name</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Last Name</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Username or Email</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input type="password" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input type="password" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
        </div>
        <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded-md font-medium">Create an account</button>
      </form>
      <p className="mt-4 text-center text-sm text-gray-600">
        Already have an account? <Link to="/login" className="text-orange-500">Login</Link>
      </p>
      <div className="flex items-center my-6">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-gray-500">Or</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      <div className="space-y-4">
        <button className="w-full flex items-center justify-center border border-gray-300 rounded-md py-2 text-gray-700">
          <FaFacebookF className="text-blue-600 mr-2" />
          Continue with Facebook
        </button>
        <button className="w-full flex items-center justify-center border border-gray-300 rounded-md py-2 text-gray-700">
          <FaGoogle className="text-red-600 mr-2" />
          Continue with Google
        </button>
      </div>
    </div>
    </>
  );
}

export default SignUpForm;