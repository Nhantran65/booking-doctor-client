// Header.js
import { HeaderWrapper, Logo, Container, NavArea, NavButton, NavLink } from "./styles";

const Header = () => {
    return (
        <HeaderWrapper>
            <Container>
                <Logo></Logo>
                <NavArea>
                    <NavButton>
                        <NavLink href="/">
                            Home
                        </NavLink>
                    </NavButton>
                    <NavButton>
                        <NavLink href="/appointment">
                            Appointment
                        </NavLink>
                    </NavButton>
                    <NavButton>
                        <NavLink href="/blog">
                            Blogs
                        </NavLink>
                    </NavButton>
                    <NavButton>
                        <NavLink href="/clinic">
                            Clinic
                        </NavLink>
                    </NavButton>
                    <NavButton>
                        <NavLink href="/doctor">
                            Doctor
                        </NavLink>
                    </NavButton>
                </NavArea>
            </Container>
        </HeaderWrapper>
    );
};

export default Header;
