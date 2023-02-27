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
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../store/auth-context";
import validate from "./validate";

const Login = () => {
  //states
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [alert] = useIonAlert();
  const [present, dismiss] = useIonLoading();

  //history
  const history = useHistory();

  //store
  const authCtx = useContext(AuthContext);

  //handlers
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
        alert({ message: "invalid password", buttons: [{text: "Ok"}]});
      }, 1500);
    }
  };
  return (
    <IonCard>
      <h1 style={{textAlign:'center'}}>Login page</h1>
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
