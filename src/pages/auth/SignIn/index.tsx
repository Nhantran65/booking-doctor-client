import { useTranslation } from "react-i18next";
import { SignInWrapper } from "./styles";

const SignIn = () => {
    const { t } = useTranslation(["common"]);

    return <SignInWrapper>{t("brandSample")} Sign In</SignInWrapper>;
};

export default SignIn;
