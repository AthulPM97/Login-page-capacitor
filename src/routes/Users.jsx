import { IonCard, IonCardSubtitle, IonCardTitle } from "@ionic/react"

const Users = (props) => {
    return(
        <IonCard>
            <IonCardTitle>{props.user.name}</IonCardTitle>
            <IonCardSubtitle>{props.user.age}</IonCardSubtitle>
        </IonCard>
    )
}

export default Users;