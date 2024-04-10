import  { useState } from 'react';
import axios from 'axios';
import { SignInWrapper,InputField, SubmitButton, Link, NavSignUp } from './styles';


const SignIn = () => {
    const [formData, setFormData] = useState({
      email: '',
      password: '',
    });
  
    const handleChange = (e: { target: { name: any; value: any; }; }) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      try {
        const response = await axios.post(`${import.meta.env.VITE_BOOKING_DOCTOR_API}authenticate`, formData);
        console.log(response.data.jwtToken); // Lưu token vào localStorage hoặc Redux store
      } catch (error) {
        console.error(error); // Xử lý lỗi ở đây
      }
    };
  
    return (
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
    );
  };

export default SignIn