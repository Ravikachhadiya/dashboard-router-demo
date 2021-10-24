import React from 'react';
import { Link} from "react-router-dom";

export function DisplayRouteMenu(routes) {
    // const history = useHistory();

    /**
     * Render a single route as a list item link to the config's pathname
     */
    function singleRoute(route) {
        return (
            <li key={route.key}>
                <Link to={route.path}>
                    {route.key} ({route.path})
                </Link>
            </li>
        );
    }

    // loop through the array of routes and generate an unordered list
    return (
        <ul>
            {routes.map((route) => {
                // if this route has sub-routes, then show the ROOT as a list item and recursively render a nested list of route links
                if (route.routes) {
                    return (
                        <React.Fragment key={route.key}>
                            {singleRoute(route)}
                            {DisplayRouteMenu(route.routes)}
                        </React.Fragment>
                    );
                }

                // no nested routes, so just render a single route
                return singleRoute(route);
            })}
        </ul>
    );
}