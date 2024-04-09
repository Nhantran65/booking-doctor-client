import { useTranslation } from "react-i18next";
import { TopUsersWrapper } from "./styles";

const TopUsers = () => {
    const { t } = useTranslation(["topUsers"]);

    return <TopUsersWrapper>{t("sample")}</TopUsersWrapper>;
};

export default TopUsers;
