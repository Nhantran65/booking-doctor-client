import { useState, useEffect } from 'react'; // Use useEffect for toast handling
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import for navigation
import { ToastContainer, toast } from 'react-toastify'; // Toast notifications
import 'react-toastify/dist/ReactToastify.css'; // Toast styles

import { SignInWrapper, InputField, SubmitButton, Link, NavSignUp } from './styles';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_BOOKING_DOCTOR_API}authenticate`, formData);

      // Handle successful sign-in
      console.log(response.data.jwtToken); // Assuming response contains a JWT token
      localStorage.setItem('jwtToken', response.data.jwtToken); // Store token in localStorage (or Redux)
      navigate('/', { state: { message: 'Sign In Successful' } }); // Redirect to Home with success message
      toast.success('Sign In Successful!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
      });
    } catch (error) {
      console.error(error); // Log the error for debugging
      toast.error('Sign In Failed! Please check your email and password.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
      });
    }
  };

  // Cleanup function to avoid memory leaks (optional)
  useEffect(() => {
    return () => toast.dismiss(); // Clear any lingering toasts on component unmount
  }, []);

  return (
    <>
      <SignInWrapper>
        <form onSubmit={handleSubmit}>
          <InputField type="email" name="email" placeholder="Enter Your Email" value={formData.email} onChange={handleChange} />
          <InputField type="password" name="password" placeholder="Enter Your Password" value={formData.password} onChange={handleChange} />
          <SubmitButton type="submit">Sign In</SubmitButton>
          <NavSignUp>
            Don't have an account yet?
            <Link href='http://localhost:5173/account/sign-up'>
              Sign Up
            </Link>
          </NavSignUp>
        </form>
      </SignInWrapper>
      <ToastContainer />
    </>
  );
};

export default SignIn;
