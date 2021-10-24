import React, { useState, useEffect, useContext} from "react";
import { Switch } from "react-router-dom";
import { ROUTES, AUTH_USER_ROUTES, AUTH_ADMIN_ROUTES, RouteWithSubRoutes } from "./routes/Route";
import { AuthProvider } from './context/AuthProviders';
function App() {
  const [userType] = useContext(AuthProvider);
  const [authRoute, setAuthRoute] = useState(userType ? AUTH_ADMIN_ROUTES : AUTH_USER_ROUTES);

  useEffect(() => {
    setAuthRoute(userType ? AUTH_ADMIN_ROUTES : AUTH_USER_ROUTES)
  }, [userType])

  return (
    <React.Fragment>
      <Switch>
        
        {authRoute.map((route) => {
          return (
            <RouteWithSubRoutes key={route.key} authLayout={true} {...route} />
          )
        })}

        {ROUTES.map((route) => {
          // console.log(route)
          return (
            <RouteWithSubRoutes key={route.key} authLayout={false} {...route} />
          )
        })}
      </Switch>
    </React.Fragment>
    // <div style={{ display: "flex", height: "100vh", alignItems: "stretch" }}>
    //   <div style={{ flex: 0.3, backgroundColor: "#f2f2f2" }}>
    //     {displayRouteMenu(ROUTES)}
    //     <button onClick={logout}>Log Out</button>
    //   </div>
    //   <div>
    //     <RenderRoutes routes={ROUTES} />
    //   </div>
    // </div>
  );
}

export default App;
/**
 * Render a nested hierarchy of route configs with unknown depth/breadth
 */
