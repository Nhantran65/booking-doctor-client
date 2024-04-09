import imageNotfound from "@/assets/images/404.png";

import { PATH_MAIN } from "@/routes/paths";
import { Button } from "antd";
import { useTranslation } from "react-i18next";
import {
    Content,
    ContentWrapper,
    ImageNotFound,
    LargeText,
    NotFoundWrapper,
    Title,
} from "./styles";

const NotFound = () => {
    const { t } = useTranslation(["notFound"]);

    return (
        <NotFoundWrapper>
            <ImageNotFound src={imageNotfound} alt="maintenance" />
            <ContentWrapper>
                <LargeText>404</LargeText>
                <Title>{t("notFound")}</Title>
                <Content>{t("content")}</Content>
            </ContentWrapper>
            <Button href={PATH_MAIN.HOME}>{t("backToHomepage")}</Button>
        </NotFoundWrapper>
    );
};

export default NotFound;
