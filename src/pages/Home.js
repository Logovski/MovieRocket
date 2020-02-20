import React from 'react';
import { IonContent, IonPage } from '@ionic/react';

/* COMPONENTS */
import Header from '../components/Header';
import MovieCounter from '../components/MovieCounter';

/* CSS */
import '../theme/global.css';


const home = () => {
  return (
    <IonPage>
      <Header title="Movie Rocket" />
      <IonContent>
        <div className="wrapper">
          
          <MovieCounter />

        </div>
      </IonContent>
    </IonPage>
  );
};

export default home;
