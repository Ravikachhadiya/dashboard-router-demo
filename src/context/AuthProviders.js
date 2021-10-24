import React, { useState, createContext } from "react";
import { useUserType } from '../common/customHook';

// Create Context Object
export const AuthProvider = createContext();

// Create a provider for components to consume and subscribe to changes
const AuthContextProvider = props => {
    const [userType, setUserType] = useState(useUserType());

    return (
        <AuthProvider.Provider value={[userType, setUserType]}>
            {props.children}
        </AuthProvider.Provider>
    );
};

export default AuthContextProvider;