import React from "react";
import { IonModal} from "@ionic/react";

import Header from '../Header';

import Star from '../../assets/star.svg';


const movieModal = (props) => {
  let poster = null;
  let title = null;
  let Rating = null;
  let genre = null;
  let time = null;
  let description = null;
  let director = null;
  let actors = null;

  if(props.movie) {
    poster = <img src={props.movie.Poster} alt="Poster" />
    title = <p>{props.movie.Title + " (" + props.movie.Year + ")"}</p>;
    Rating = (
      <p className="font14 color-yellow">
        {props.movie.Rated[0]}.
        <span className="font11">{props.movie.Rated[2]}</span>
      </p>
    );
    genre = <p className="font11">{props.movie.Genre.join(" | ")}</p>;
    time = <p className="font11">{props.movie.Runtime}</p>;
    description = <p className="font11 color-grey plot-text">{props.movie.Plot}</p>;
    director = (
      <p className="color-grey font11">
        <span className="color-yellow font11">Director: </span>
        {props.movie.Director}
      </p>
    );
    actors = (
      <p className="color-grey font11">
        <span className="color-yellow font11">Actors: </span>
        {props.movie.Actors.join(" , ")}
      </p>
    );
  }

  return (

    <IonModal isOpen={props.active}>
      <Header
        title="Movie Detail"
        close="true"
        closeIsClicked={() => props.closeModal()}
      />
      <div className="wrapper test">
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
          <div className="movie-detail-genre">
            {genre}
            {time}
          </div>
          <p className="font14 margin10">Description</p>
          {description}
          {director}
          {actors}
        </div>
      </div>
    </IonModal>
  );
};

export default movieModal;