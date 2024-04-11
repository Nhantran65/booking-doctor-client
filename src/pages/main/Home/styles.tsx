import styled from "@emotion/styled";
import BACKGROUND from "@/assets/images/Background_Image.png";
import { Button } from "antd";

export const HomeWrapper = styled.div`
`;

export const SubWrapper1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 150px); /* Chiều cao của viewport trừ đi chiều cao của Header và Footer */
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
    min-height: calc(100vh - 150px); /* Chiều cao của viewport trừ đi chiều cao của Header và Footer */
    background-repeat: no-repeat;
    background-size: cover;
    width:100%;
    bottom:0;
`;

export const ButtonLink = styled(Button)`
    margin-top: 20px;
`;
