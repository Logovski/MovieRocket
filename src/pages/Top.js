import React from "react";
import { IonContent, IonPage } from "@ionic/react";

/* COMPONENTS */
import Header from "../components/Header";

/* CSS */
import "../theme/global.css";

const top = () => {
  return (
    <IonPage>
      <Header title="Top Movies" />
      <IonContent></IonContent>
    </IonPage>
  );
};

export default top;
