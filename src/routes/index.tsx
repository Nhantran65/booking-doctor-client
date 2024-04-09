import Loading from "@/components/Loading";
import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { PATH_AUTH, PATH_MAIN, PATH_OTHER } from "./paths";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Loadable = (Component: any) => (props: any) => {
    return (
        <Suspense fallback={<Loading isFull={true} />}>
            <Component {...props} />
        </Suspense>
    );
};

const Router = () => {
    const isLogin = true;

    return useRoutes([
        // Auth
        {
            path: PATH_AUTH.SELF,
            element: isLogin ? <Navigate to={PATH_MAIN.HOME} /> : <AuthLayout />,
            children: [
                {
                    path: PATH_AUTH.SIGN_IN,
                    element: <SignIn />,
                },
            ],
        },
        // Main
        {
            path: PATH_MAIN.HOME,
            element: isLogin ? <MainLayout /> : <Navigate to={PATH_AUTH.SIGN_IN} replace />,
            children: [
                {
                    path: PATH_MAIN.HOME,
                    element: <AllBrands />,
                },
                {
                    path: PATH_MAIN.TOP_USERS,
                    element: <TopUsers />,
                },
            ],
        },
        // Other
        {
            path: PATH_OTHER.NOT_FOUND,
            element: <NotFound />,
        },
        {
            path: "*",
            element: <Navigate to={PATH_OTHER.NOT_FOUND} replace />,
        },
    ]);
};

// Layout
const AuthLayout = Loadable(lazy(() => import("@/layouts/Auth")));
const MainLayout = Loadable(lazy(() => import("@/layouts/Main")));
// Auth
const SignIn = Loadable(lazy(() => import("@/pages/auth/SignIn")));
// Main
const AllBrands = Loadable(lazy(() => import("@/pages/main/AllBrands")));
const TopUsers = Loadable(lazy(() => import("@/pages/main/TopUsers")));
// Other
const NotFound = Loadable(lazy(() => import("@/pages/NotFound")));

export default Router;
