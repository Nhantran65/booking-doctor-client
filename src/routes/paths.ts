// ----------------------------------------------------------------------

const path = (root: string, subLink: string) => {
    return `${root}${subLink}`;
};

const ROOT_AUTH = "/account";

// ----------------------------------------------------------------------
export const PATH_AUTH = {
    SELF: ROOT_AUTH,
    SIGN_IN: path(ROOT_AUTH, "/sign-in"),
};
export const PATH_MAIN = {
    HOME: "/",
    TOP_USERS: "/top-users",
};
export const PATH_OTHER = {
    NOT_FOUND: "/404",
};
