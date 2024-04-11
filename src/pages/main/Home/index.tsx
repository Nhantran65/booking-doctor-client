import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { HomeWrapper, ButtonLink, SubWrapper1, SubWrapper2,LinkToPage,Slogan } from "./styles";

const Home = () => {
    const { t } = useTranslation(["Home"]);

    return (
        <HomeWrapper>
            <SubWrapper1>
                <LinkToPage href="/">
                    Home
                </LinkToPage>
                <Slogan>
                        Make a Doctor's appointment faster with Booking Care
                    </Slogan>
                <ButtonLink>
                   
                    <Link to={"http://localhost:5173/appointment"}>
                        {t("Book An Appointment")}
                    </Link>
                </ButtonLink>
            </SubWrapper1>
            <SubWrapper2>
                <div>List Doctor or Clinic here</div>
                <ButtonLink>
                    <Link to={"http://localhost:5173/doctor"}>
                        {t("View all doctors")}
                    </Link>
                </ButtonLink>
            </SubWrapper2>
        </HomeWrapper>
    );
};

export default Home;
