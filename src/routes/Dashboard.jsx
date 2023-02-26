import { IonButton, IonContent, IonInput, IonItem } from "@ionic/react";
import { useRef, useState } from "react";
import Users from "./Users";

const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
const Dashboard = () => {
  //refs
  const nameRef = useRef();
  const ageRef = useRef();

  //states
  const [users, setUsers] = useState(storedUsers);
  console.log(users);
  localStorage.setItem("users", JSON.stringify(users));

  //handlers
  const submitHandler = (event) => {
    event.preventDefault();
    const userDetails = {
      name: nameRef.current.value,
      age: ageRef.current.value,
    };
    setUsers((prevUsers) => [...prevUsers, userDetails]);    
  };

  const displayUsers = users.map((user) => <Users user={user}/>);

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
    </IonContent>
  );
};

export default Dashboard;
