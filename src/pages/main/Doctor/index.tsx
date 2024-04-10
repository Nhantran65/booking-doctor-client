import { useTranslation } from "react-i18next";
import { DoctorWrapper } from "./styles";

const Doctor = () => {
    const { t } = useTranslation(["doctor"]);

    return <DoctorWrapper>{t("sample")}</DoctorWrapper>;
};

export default Doctor;
