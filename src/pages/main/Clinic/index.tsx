import { useTranslation } from "react-i18next";
import { ClinicWrapper } from "./styles";

const Clinic = () => {
    const { t } = useTranslation(["clinic"]);

    return <ClinicWrapper>{t("sample")}</ClinicWrapper>;
};

export default Clinic;
