import { useState } from 'react';
import axios from 'axios';
import { SignUpWrapper, InputField, SubmitButton, SubWrapper, Link, NavSignUp, ErrorMsg } from './styles';
import { useNavigate } from 'react-router-dom'; // Import for navigation
import { ToastContainer, toast } from 'react-toastify'; // Toast notifications
import 'react-toastify/dist/ReactToastify.css'; // Toast styles

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 'patient',
  });

  const [passwordError, setPasswordError] = useState(false); // State to track password error
  const navigate = useNavigate();

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === 'password') {
      // Check password length and set error state accordingly
      setPasswordError(value.length < 6);
    }
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Check if password is valid
    if (formData.password.length < 6) {
      setPasswordError(true);
      return; // Stop submission if password is not valid
    }
    try {
      const response = await axios.post(`${import.meta.env.VITE_BOOKING_DOCTOR_API}sign-up`, formData);
      toast.success('Sign Up Successful!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
      });
      navigate('/', { state: { message: 'Sign Up Successful' } });
      console.log(response.data);
      console.log(response.data);
    } catch (error) {
      toast.error('Sign Up Failed! Email already exists.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
      });
      console.error(error);
    }
  };

  return (
    <>
      <SignUpWrapper>
        <form onSubmit={handleSubmit}>
          <SubWrapper>
            <InputField type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
            <InputField type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
          </SubWrapper>

          <InputField type="email" name="email" placeholder="nhan.tran@tuni.fi" value={formData.email} onChange={handleChange} />
          <InputField type="password" name="password" placeholder="********" value={formData.password} onChange={handleChange} />
          {passwordError && <ErrorMsg>Your password must have more than 6 characters</ErrorMsg>} {/* Render error message if password is invalid */}
          <SubmitButton type="submit">Register</SubmitButton>
          <NavSignUp>
            You already have an account?
            <Link href="http://localhost:5173/account/sign-in">Sign In</Link>
          </NavSignUp>
        </form>
      </SignUpWrapper>
      <ToastContainer />
    </>
  );
};

export default SignUp;
