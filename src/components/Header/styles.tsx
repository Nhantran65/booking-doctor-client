// styles.js
import styled from "@emotion/styled";
import { purple } from "@ant-design/colors";
import LOGO from "@/assets/images/logo.png";

export const HeaderWrapper = styled.div`
  background-color: ${purple};
  width: 100%;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999; /* Đảm bảo Header luôn hiển thị trên cùng */
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
`;

export const NavArea = styled.div`
  display: flex;
`;

export const NavButton = styled.span`
  font-family: Inter, sans-serif; 
  font-weight: 800; 
  margin-left: 20px;
  cursor: pointer;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: black;
  transition: color 0.3s;
  
  &:hover {
    color: #333; /* Màu khi hover */
  }
`;
