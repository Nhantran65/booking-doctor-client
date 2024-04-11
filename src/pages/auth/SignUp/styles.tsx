import styled from "@emotion/styled";
import BACKGROUND from "@/assets/images/Background_Image.png";

export const SignUpWrapper = styled.div``;

export const InputField = styled.input`
  background-image: url(${BACKGROUND}); 
  margin: 10px 0;
  width: 100%; 
  margin-bottom: 16px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 16px;
`;

export const SubmitButton = styled.button`
  background-color: #0958D9; 
  color: white; 
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 16px;
  cursor: pointer;
`;

export const SubWrapper = styled.div`
  display: flex;
`

export const NavSignUp = styled.p`
  margin: 20px 0;
`

export const Link = styled.a`
  color: blue;

`
export const ErrorMsg = styled.p`
  color: red;
  margin-top: 5px;
`;