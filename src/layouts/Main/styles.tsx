import theme from "@/assets/styles/theme";
import { Container } from "@/designs/Container";
import styled from "@emotion/styled";

export const MainLayoutWrapper = styled.div``;
export const MainLayoutContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    padding: 120px 15px;
    min-height: 604px;
`;
export const Left = styled.aside`
    width: 270px;
`;
export const Right = styled.main<{ isShowSidebar?: boolean }>`
    padding-left: 20px;
    @media (max-width: ${theme["2xLarge"]}) {
        width: 100%;
        padding-left: 0;
    }
    ${({ isShowSidebar }) => (isShowSidebar ? `width: calc(100% - 300px);` : `width: 100%;`)}
`;
export const Content = styled.div`
    margin-top: 20px;
`;
