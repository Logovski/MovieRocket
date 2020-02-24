import React from "react";
import { IonModal} from "@ionic/react";

import Header from '../Header';

import Star from '../../assets/star.svg';


const movieModal = (props) => {
  let poster = null;
  let title = null;
  let Rating = null;

  if(props.movie) {
    poster = <img src={props.movie.Poster} alt="Poster" />
    title = <p>{props.movie.Title + " (" + props.movie.Year + ")"}</p>;
    Rating = (
      <p className="font14 color-yellow">
        {props.movie.Rated[0]}.
        <span className="font11">{props.movie.Rated[2]}</span>
      </p>
    );
  }


  
console.log(props);
  return (
    <IonModal isOpen={props.active}>
      <Header
        title="The Joker"
        close="true"
        closeIsClicked={() => props.closeModal()}
      />
      <div className="wrapper">
        <div className="movie-Detail">
          <div className="movie-detail-poster">{poster}</div>
          {title}
          <div className="flex movie-detail-rating">
            <img src={Star} alt="Star" />
            <img src={Star} alt="Star" />
            <img src={Star} alt="Star" />
            <img src={Star} alt="Star" />
            <img src={Star} alt="Star" />
            {Rating}
          </div>
        </div>
      </div>
    </IonModal>
  );
};

export default movieModal;