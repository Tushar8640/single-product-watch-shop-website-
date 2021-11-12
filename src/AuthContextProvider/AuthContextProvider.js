import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';



export  const AuthContext = createContext()
const AuthContextProvider = ({children}) => {
    const value = useFirebase()
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;