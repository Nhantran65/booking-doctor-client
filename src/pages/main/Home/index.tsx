import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { HomeWrapper, ButtonLink, SubWrapper1, SubWrapper2, LinkToPage, Slogan, Wrapper, Doctor, DoctorName, DoctorAvatar, ListInfo, ListInfoChild, Specialization, TitleAttribute, SubWrapperContent, SubSlogan  } from "./styles";
import AVATAR from "@/assets/images/doctor_avatar.png";
import { useQuery } from "@tanstack/react-query";
import { getListSpecializationAPI } from "@/api/specialization";
import { FETCH_STATUS } from "@/models/enums";
import Loading from "@/components/Loading";
import { ISpecialization } from "@/models/interfaces";

const Home = () => {
    const { t } = useTranslation(["Home"]);

    const { data: listSpecializations, fetchStatus } = useQuery({
        queryKey: ["specializations"],
        queryFn: getListSpecializationAPI
    });

    // Kiểm tra xem listSpecializations có tồn tại không trước khi sử dụng
    const filteredSpecializations = listSpecializations && listSpecializations.filter((specialization: ISpecialization) => specialization.id >= 1 && specialization.id <= 4);

    return (
        <HomeWrapper>
            {fetchStatus === FETCH_STATUS.FETCHING ? (
                <Loading />
            ) : (
                <Wrapper>
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
                        <SubSlogan>Doctor Information & Their Contact</SubSlogan>
                        <SubWrapperContent>
                            {filteredSpecializations && filteredSpecializations.map((specialization: ISpecialization) => (
                                <Doctor key={specialization.id}>
                                    <DoctorAvatar src={AVATAR} />
                                    <DoctorName>
                                        Full Name: {specialization.user.firstname} {specialization.user.lastname}
                                    </DoctorName>
                                    <Specialization>
                                        <TitleAttribute>Specialization:</TitleAttribute> {specialization.specialization}
                                    </Specialization>
                                    <ListInfo>
                                        <ListInfoChild>
                                            <TitleAttribute>Description:</TitleAttribute> {specialization.description}
                                        </ListInfoChild>
                                        <ListInfoChild>
                                            <TitleAttribute>Bio:</TitleAttribute> {specialization.user.bio}
                                        </ListInfoChild>
                                        <ListInfoChild>
                                            <TitleAttribute>Email:</TitleAttribute> {specialization.user.email}
                                        </ListInfoChild>
                                    </ListInfo>
                                </Doctor>
                            ))}
                        </SubWrapperContent>
                        <ButtonLink>
                            <Link to={"http://localhost:5173/doctor"}>
                                {t("View all doctors")}
                            </Link>
                        </ButtonLink>
                    </SubWrapper2>
                </Wrapper>
            )}
        </HomeWrapper>
    );
};

export default Home;
