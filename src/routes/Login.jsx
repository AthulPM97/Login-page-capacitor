import {
  IonButton,
  IonCard,
  IonCardContent,
  IonInput,
  IonItem,
  IonLabel,
} from "@ionic/react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const emailChangeHandler = (e) => {
    console.log(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    console.log(e.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      history.push("/app/dashboard");
    }, 1500);
  };
  return (
    <IonCard>
      <IonCardContent>
        <form onSubmit={submitHandler}>
          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput type="email" onIonChange={emailChangeHandler} />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput type="password" onIonChange={passwordChangeHandler} />
          </IonItem>
          <br />
          <div className="ion-margin-top">
            {!loading && (
              <IonButton type="submit" color="secondary" expand="full">
                Login
              </IonButton>
            )}
            {loading && <p style={{ textAlign: "center" }}>Loading...</p>}
          </div>
        </form>
      </IonCardContent>
    </IonCard>
  );
};

export default Login;
