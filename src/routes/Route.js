import React from "react";
import { Route, Switch } from "react-router-dom"; 
import AuthLayout from "../components/layout/AuthLayout";
import Login from "../pages/Login";
import { authenticatedRoute } from "../common/commonFunctions";

export const AUTH_ADMIN_ROUTES = [
    { path: "/", key: "ROOT", exact: true, component: () => <h1>Main Admin Page</h1> },
    { path: "/app", key: "ADMIN_APP", exact: true, component: () => authenticatedRoute(<h1>Admin App Index</h1>) },
    { path: "/app/page", key: "APP_PAGE", exact: true, component: () => authenticatedRoute( <h1>Admin App Page</h1> )},
    // {
    //     path: "/app",
    //     key: "APP",
    //     component: (props) => {
    //         if (!localStorage.getItem("user")) {
    //             alert("You need to log in to access app routes");
    //             return <Redirect to={"/"} />;
    //         }
    //         return <RenderRoutes {...props} />;
    //     },
    //     routes: [
    //         {
    //             path: "/app",
    //             key: "APP_ROOT",
    //             exact: true,
    //             component: () => <h1>Admin App Index</h1>
    //         },
    //         {
    //             path: "/app/page",
    //             key: "APP_PAGE",
    //             exact: true,
    //             component: () => <h1>Admin App Page</h1>
    //         }
    //     ]
    // },
    {
        path: "/Dashboard",
        key: "DASHBOARD",
        exact: true,
        component: () => <h1>Admin Dashboard</h1>
    },
    {
        path: "/Dashboard/:id",
        key: "DASHBOARD_CONTENT_WITH_ID",
        exact: false,
        component: () => <h1>Admin Dashboard Content</h1>
    },
    { path: "/home", key: "HOME", exact: true, component: () => <h1>Home</h1> },
    
];

export const AUTH_USER_ROUTES = [
    { path: "/", key: "ROOT", exact: true, component: () => <h1>Main User Page</h1> },
    { path: "/app", key: "APP", exact: true, component: () => authenticatedRoute(<h1>User App Index</h1>) },
    { path: "/app/page", key: "APP_PAGE", exact: true, component: () => authenticatedRoute(<h1>USer App Page</h1>) },
    // {
    //     path: "/app",
    //     key: "APP",
    //     component: (props) => {
    //         if (!localStorage.getItem("user")) {
    //             alert("You need to log in to access app routes");
    //             return <Redirect to={"/login"} />;
    //         }
    //         return <RenderRoutes {...props} />;
    //     },
    //     routes: [
    //         {
    //             path: "/app",
    //             key: "APP_ROOT",
    //             exact: true,
    //             component: () => <h1>User App Index</h1>
    //         },
    //         {
    //             path: "/app/page",
    //             key: "APP_PAGE",
    //             exact: true,
    //             component: () => <h1>User App Page</h1>
    //         }
    //     ]
    // },
    {
        path: "/Dashboard",
        key: "DASHBOARD",
        exact: true,
        component: () => <h1>UserDashboard</h1>
    },
    {
        path: "/Dashboard/:id",
        key: "DASHBOARD_CONTENT_WITH_ID",
        exact: false,
        component: () => <h1>User Dashboard Content</h1>
    },
    { path: "/home", key: "HOME", exact: true, component: () => <h1>User Home</h1> },

];

export const ROUTES = [
    { path: "/about", key: "ABOUT", exact: true, component: () => <h1>About</h1> },
    {
        path: "/login",
        key: "LOGIN",
        exact: true,
        component: Login
    },
    {
        path: "/register/",
        key: "REGISTER",
        exact: false,
        component: () => <h1>Register</h1>
    },
    {key:"NOT_FOUND", component:() => <h1> Not Found</h1>}
];

export function RouteWithSubRoutes(route) {
    // console.log(route);
    return (
        <Route
            path={route.path}
            exact={route.exact}
            render={(props) => {
                return (route.authLayout ? <AuthLayout>
                    <route.component routes={route.routes} authLayout={route.authLayout} {...props}/>
                </AuthLayout>
                    : <route.component routes={route.routes} {...props}/>
                )
            }
            }
        />
    );
}

/**
 * Use this component for any new section of routes (any config object that has a "routes" property
 */
export function RenderRoutes({ routes, authLayout = false }) {
    return (
        <Switch>
            {routes.map((route, i) => {
                return <RouteWithSubRoutes key={route.key} authLayout={authLayout} {...route} />;
            })}
            <Route component={() => <h1>Not Found!</h1>} />
        </Switch>
    );
}
