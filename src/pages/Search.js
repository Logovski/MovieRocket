import React from "react";
import { IonContent, IonPage } from "@ionic/react";

/* COMPONENTS */
import Header from "../components/Header";

/* CSS */
import "../theme/global.css";

const search = () => {
  return (
    <IonPage>
      <Header title="Search Movies" />
      <IonContent>

      </IonContent>
    </IonPage>
  );
};

export default search;
