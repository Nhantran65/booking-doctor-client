import styled from "@emotion/styled";
import { blue } from "@ant-design/colors";
import LOGO from "@/assets/images/logo.png";

export const HeaderWrapper = styled.div`
position: fixed; /* Header sẽ được cố định ở đầu trang */
top: 0; /* Đảm bảo Header nằm ở đỉnh trang */
width: 100%;
background-color: ${blue[3]};
height: 100px;
display: flex;
justify-content: center;
align-items: center;
z-index: 1000; /* Đảm bảo Header cao hơn các phần tử khác */
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  background-image: url(${LOGO}); 
  width: 258px;
  height: 49px;
  background-size: contain; 
  background-repeat: no-repeat; 
  Border-radius: 10px;
`;

export const NavArea = styled.div`
  display: flex;
`;

export const NavButton = styled.span`
  font-family: Inter, sans-serif; 
  font-weight: 600; 
  font-size: 16px;
  margin-left: 20px;
  cursor: pointer;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: black;
  transition: color 0.3s;
  
  &:hover {
    color: #fff; /* Màu khi hover */
  }
`;