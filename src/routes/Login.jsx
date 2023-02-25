import {
  IonButton,
  IonCard,
  IonCardContent,
  IonInput,
  IonItem,
  IonLabel,
  useIonAlert,
  useIonLoading,
} from "@ionic/react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import validate from "./validate";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert] = useIonAlert();
  const [present, dismiss] = useIonLoading();

  const history = useHistory();

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    //loading popup
    await present({ message: "Loading..." });
    setLoading(true);
    if (validate(email, password)) {
      setTimeout(() => {
        setLoading(false);
        history.push("/app/dashboard");
        dismiss();
      }, 1500);
    } else {
      setTimeout(() => {
        setLoading(false);
        dismiss();
        alert({ message: "invalid password" });
      }, 1500);
    }
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
