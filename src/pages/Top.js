import React, { Component } from "react";
import { IonContent, IonPage } from "@ionic/react";

/* COMPONENTS */
import Header from "../components/Header";
import MovieBoxWide from "../components/MovieBoxWide";
import Spinner from "../components/Ui/Spinner"

/* CSS */
import "../theme/global.css";







class Top extends Component {
  state={
    movieData: null,
    sortedMovies: null
  }

  componentDidMount() {
    if (localStorage.movieData) {
      let getData = JSON.parse(localStorage.getItem("movieData"));
      this.setState(
        {
          movieData: getData
        },
        () => {
          getData.sort(this.sortMovies);
          this.setState({ sortedMovies: getData });
        }
      );
    }

  }

  sortMovies = ( a, b )  => {
    if (a.Rated < b.Rated) {
      return 1;
    }
    if (a.Rated > b.Rated) {
      return -1;
    }
    return 0;
  }








  render() {
    

    let sortedMovies = <Spinner/>;
    if (this.state.sortedMovies) {
      sortedMovies = this.state.sortedMovies.map(movie => {
        return (
          <MovieBoxWide
            modalIsClicked={() => this.modalHandler(movie)}
            key={movie.id}
            poster={movie.Poster}
            title={movie.Title}
            year={movie.Year}
            firstRating={movie.Rated[0]}
            lastRating={movie.Rated[2]}
            genre={movie.Genre.join(" | ")}
          />
        );
      });
    }

    return (
      <IonPage>
        <Header title="Top Movies" />
        <IonContent>
          <div className="wrapper">{sortedMovies}</div>
        </IonContent>
      </IonPage>
    );
  }
}

export default Top;
