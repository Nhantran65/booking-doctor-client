import styled from "@emotion/styled";
import BOOSTPTELOGO from "@/assets/images/boostpte-logo 1.png";
import MAINLOGO from "@/assets/images/main-logo-pteonlinetests 1.png";

import BACKGROUND from "@/assets/images/Background_Image.png";
export const HomeWrapper = styled.div`
top:100ps;
  max-width: 1440px;
  background-image: url(${BACKGROUND});
  width:100%;
  min-height:698px;
  background-repeat: no-repeat; 
  background-size: cover; 
`;  

export const Container = styled.div`
  width: 1440px;
  height: 100%; 
  margin: 0 240px;
  display: flex;
  justify-content: space-between;
`;

export const Brand = styled.div`
  height: 370px;
  width: 48%; 
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 20px;
`;

export const BrandName = styled.span`
  font-family: Inter, sans-serif;
  font-weight: bold;
  font-size: 17px;
`;

export const BrandBoostPTELogo = styled.div`
  width: 100%; 
  height: 40%;
  background-image: url(${BOOSTPTELOGO}); 
  background-size: contain; 
  background-repeat: no-repeat; 
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
`;

export const BrandMainLogo = styled.div`
  width: 100%; 
  height: 40%;
  background-image: url(${MAINLOGO}); 
  background-size: contain; 
  background-repeat: no-repeat; 
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
`;

export const SubWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

export const Button = styled.button`
  background-color: yellow; 
  color: white; 
  width: 58px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 2px;
`;

export const BrandDescription = styled.p`
  font-family: Inter, sans-serif; 
  font-weight: 200; 
  font-size: 14px;
  color: #6D6D6D;
  font-style: italic;
  line-height: 150%;
  text-align: left;
`;

export const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid #ccc;
`;

export const Link = styled.a`
  
`

