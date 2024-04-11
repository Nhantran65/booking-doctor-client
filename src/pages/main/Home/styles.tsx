import styled from "@emotion/styled";
import BACKGROUND from "@/assets/images/Background_Image.png";
import { Button } from "antd";
import { blue } from "@ant-design/colors";

export const HomeWrapper = styled.div`
`;

export const SubWrapper1 = styled.div`
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 150px); 
    background-image: url(${BACKGROUND});
    background-repeat: no-repeat;
    background-size: cover;
    width:100%;
    top:0;
`;
export const SubWrapper2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 150px); 
    background-repeat: no-repeat;
    background-size: cover;
    width:100%;
    bottom:0;
`;

export const ButtonLink = styled(Button)`
    margin-top: 20px;
    background-color: ${blue[5]};
    height: 80px;
    width: 300px;
    font-size:20px;
    font-weight:600;
    color: yellow;
    text-align: center;
    margin: 20px auto;
`;

export const LinkToPage = styled.a`
    top:0;
    color: ${blue[4]};
    font-weight: 600;
    padding: 10px;
    font-size: 16px;
`

export const Slogan = styled.h1`
  font-weight: 1000;
  font-size: 50px;
  margin-top: 200px;
  text-align: center;
  color: ${blue[6]};
  margin-left: 80px;
  margin-right: 80px;
`

export const SubWrapperContent = styled.div`

`