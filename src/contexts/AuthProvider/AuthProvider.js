import React, { createContext } from 'react';

export const authContext = createContext();

const AuthProvider = ({children}) => {
    const user = {displayName: 'asha afrin'}

    const authInfo = {user};
    
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;