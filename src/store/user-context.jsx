import React, { useReducer } from "react";

const UserContext = React.createContext({
  users: [],
  addUser: () => {},
  clearUsers: () => {},
});

export default UserContext;

const defaulUsersState = {
  users: JSON.parse(localStorage.getItem('users')) || []
}

const userReducer = (state,action) => {
  if(action.type === "ADD_USER") {
    const updatedUsers = [...state.users, action.payload];
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    return {
      ...state,
      users: [...updatedUsers]
    }
  }
  if(action.type === "CLEAR_USERS") {
    localStorage.removeItem('users');
    return { users: [] };
  }
  return defaulUsersState;
}

export const UserProvider = (props) => {
  const [userState, dispatchUserAction] = useReducer(userReducer, defaulUsersState);

  const addUserHandler = (user) => {
    dispatchUserAction({type:"ADD_USER", payload: user});
  };

  const clearUserHandler = () => {
    dispatchUserAction({type:"CLEAR_USERS"});
  };
  const userContext = {
    users: userState.users,
    addUser: addUserHandler,
    clearUsers: clearUserHandler,
  };
  return (
    <UserContext.Provider value={userContext}>
      {props.children}
    </UserContext.Provider>
  );
};
