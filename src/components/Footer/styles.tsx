// styles.js
import { blue } from "@ant-design/colors";
import styled from "@emotion/styled";

export const MainLayoutWrapper = styled.div`
  position: relative; 
  min-height: 100vh;
`;

export const FooterWrapper = styled.div`
background-color: ${blue[5]};
  width: 100%;
  height: 38px;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  position: absolute; 
`;

export const Container = styled.div`
  font-family: Inter, sans-serif; 
  font-weight: 400; 
  font-size: 12px; 
  height: 15px;
  width: 249px;
`;
