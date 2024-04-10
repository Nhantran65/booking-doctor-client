import { useTranslation } from "react-i18next";
import { BlogWrapper } from "./styles";

const Blog = () => {
    const { t } = useTranslation(["blog"]);

    return <BlogWrapper>{t("sample")}</BlogWrapper>;
};

export default Blog;
