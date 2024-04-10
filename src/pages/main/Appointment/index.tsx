import { useTranslation } from "react-i18next";
import { AppointmentWrapper } from "./styles";

const Appointment = () => {
    const { t } = useTranslation(["appointment"]);

    return <AppointmentWrapper>{t("sample")}</AppointmentWrapper>;
};

export default Appointment;
