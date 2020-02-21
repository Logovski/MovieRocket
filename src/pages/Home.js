import React from 'react';
import { IonContent, IonPage } from '@ionic/react';

/* COMPONENTS */
import Header from '../components/Header';
import MovieCounter from '../components/MovieCounter';
import Swiper from '../components/Swiper';
import LastWatched from '../components/LastWatched';

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
        <Swiper />
        <LastWatched />
      </IonContent>
    </IonPage>
  );
};

export default home;
