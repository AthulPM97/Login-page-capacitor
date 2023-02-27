import React from "react";

const AuthContext = React.createContext({
  isLoggedin: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = (props) => {
  const loginHandler = () => {
    authContext.isLoggedin = true;
  };
  const logoutHandler = () => {
    authContext.isLoggedin = false;
  };
  const authContext = {
    isLoggedin: true,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
