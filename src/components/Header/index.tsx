import { HeaderWrapper, Logo, Container,NavArea, NavButton  } from "./styles";

const Header = () => {
    return <HeaderWrapper>
            <Container>
                <Logo></Logo>
                <NavArea>
                    <NavButton>
                        All Brands
                    </NavButton>
                    <NavButton>
                        Top Users
                    </NavButton>
                </NavArea>
            </Container>
        </HeaderWrapper>;
};

export default Header;
