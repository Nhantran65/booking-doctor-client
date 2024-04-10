import  { useState } from 'react';
import axios from 'axios';
import { SignUpWrapper, InputField, SubmitButton,SubWrapper, Link, NavSignUp} from './styles'


const SignUp = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    role: 'patient',
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_BOOKING_DOCTOR_API}sign-up`, formData);
      console.log(response.data); // Xử lý phản hồi từ server ở đây
    } catch (error) {
      console.error(error); // Xử lý lỗi ở đây
    }
  };

  return (
    <SignUpWrapper>
      <form onSubmit={handleSubmit}>
        <SubWrapper>
          <InputField type="text" name="firstname" placeholder="First Name" value={formData.firstname} onChange={handleChange} />
          <InputField type="text" name="lastname" placeholder="Last Name" value={formData.lastname} onChange={handleChange} />
        </SubWrapper>
        
        <InputField type="email" name="email" placeholder="nhan.tran@tuni.fi" value={formData.email} onChange={handleChange} />
        <InputField type="password" name="password" placeholder="********" value={formData.password} onChange={handleChange} />
        <SubmitButton type="submit">Register</SubmitButton>
        <NavSignUp>
            You already have account?
            <Link href='http://localhost:5173/account/sign-in'>
                Sign In
            </Link>
        </NavSignUp>
      </form>
    </SignUpWrapper>
  );
};

export default SignUp;