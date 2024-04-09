import Logo from "@/components/Logo";
import { VERSION } from "@/models/constants/common";
import { Outlet } from "react-router-dom";
import { AuthLayoutContent, AuthLayoutWrapper, Version } from "./styles";

const AuthLayout = () => {
    return (
        <AuthLayoutWrapper>
            <AuthLayoutContent>
                <Logo />
                <Outlet />
            </AuthLayoutContent>
            <Version>Version {VERSION} </Version>
        </AuthLayoutWrapper>
    );
};

export default AuthLayout;
