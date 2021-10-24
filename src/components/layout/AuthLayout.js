import React from 'react';
import { useHistory } from 'react-router-dom';
import { DisplayRouteMenu } from '../../common/Components';
import { logout } from '../../common/commonFunctions';
import { useUserType } from '../../common/customHook';
import { AUTH_USER_ROUTES, AUTH_ADMIN_ROUTES } from '../../routes/Route';

const AuthLayout = (props) => {
    const history = useHistory();
    const userType = useUserType();
    return (
        <div style={{ display: "flex", height: "100vh", alignItems: "stretch" }}>
            <div style={{ flex: 0.3, backgroundColor: "#f2f2f2" }}>
                {DisplayRouteMenu(userType ? AUTH_ADMIN_ROUTES: AUTH_USER_ROUTES )}
                <button onClick={() => logout(history)}>Log Out</button>
            </div>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default AuthLayout;