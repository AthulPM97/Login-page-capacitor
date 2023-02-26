import React from "react"

const AuthContext = React.createContext({
    token: '',
    isLoggedin: null,
    login: () => {},
    logout: () => {},
});

export const AuthProvider = (props) => {

    const authContext = {
        token: token,
        isLoggedin: userIsLoggedin,
        login: loginHandler,
        logout: logoutHandler,
    };

    return(
        <AuthContext.Provider value={authContext}>{props.children}</AuthContext.Provider>
    )
}

export default AuthContext;