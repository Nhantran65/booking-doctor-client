import { useTranslation } from "react-i18next";
import { HomeWrapper } from "./styles";
import { Button } from "antd";
import { Link } from "react-router-dom";

const Home = () => {
    const { t } = useTranslation(["Home"]);

    return (
    <HomeWrapper>{t("sample")}
        <Button>
            <Link to={"http://localhost:5173/appointment"}>
                Book an appointment
            </Link>
        </Button>
    </HomeWrapper>
    )
};

export default Home;