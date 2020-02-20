import React from "react";
import { IonContent, IonPage } from "@ionic/react";

/* COMPONENTS */
import Header from "../components/Header";

/* CSS */
import "../theme/global.css";

const all = () => {
  return (
    <IonPage>
      <Header title="All Movies" />
      <IonContent></IonContent>
    </IonPage>
  );
};

export default all;
