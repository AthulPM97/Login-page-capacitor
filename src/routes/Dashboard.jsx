import { IonButton, IonContent, IonInput, IonItem } from "@ionic/react";
import { useContext, useEffect, useRef, useState } from "react";
import UserContext from "../store/user-context";
import Users from "./Users";

const Dashboard = () => {
  //refs
  const nameRef = useRef();
  const ageRef = useRef();

  //store
  const usersCtx = useContext(UserContext);
  const users = usersCtx.users;

  //handlers
  const submitHandler = (event) => {
    event.preventDefault();
    const newUser = {
      name: nameRef.current.value,
      age: ageRef.current.value,
    };
    console.log(newUser);
    usersCtx.addUser(newUser);
  };

  const clearUsersHandler = () => {
    usersCtx.clearUsers();
  };

  const displayUsers = users.map((user) => <Users user={user} key={user.name}/>);

  return (
    <IonContent style={{ height: "100vh" }}>
      <form onSubmit={submitHandler}>
        <IonItem>
          <IonInput placeholder="Enter name" ref={nameRef} />
        </IonItem>
        <IonItem>
          <IonInput type="number" placeholder="Enter age" ref={ageRef} />
        </IonItem>
        <IonButton type="submit">Submit</IonButton>
      </form>
      {displayUsers}
      <div style={{ textAlign: "center" }}>
        <IonButton onClick={clearUsersHandler}>Clear</IonButton>
      </div>
    </IonContent>
  );
};

export default Dashboard;
