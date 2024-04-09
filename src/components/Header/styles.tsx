// styles.js
import styled from "@emotion/styled";
import { blue } from "@ant-design/colors";
import LOGO from "@/assets/images/logo.png";

export const HeaderWrapper = styled.div`
  background-color: ${blue[0]};
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
  width: 1440px;
  margin: 0 240px;
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
  font-weight: 400; 
  justify-content: center;
  align-items: center;
  height: 19px;
  width: 77px;
  display: flex;
  cursor: pointer;
`;
