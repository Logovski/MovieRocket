import React, { Component } from "react";
import { IonContent, IonPage } from "@ionic/react";

/* COMPONENTS */
import Header from "../components/Header";
import MovieBox from "../components/MovieBox";
import MovieModal from "../components/Ui/Modal";
import Spinner from "../components/Ui/Spinner";

/* CSS */
import "../theme/global.css";

class All extends Component {
  state = {
    movieData: null,
    clickedMovie: null,
    modalActive: false
  };
  componentDidMount() {
    this.setState({ movieData: JSON.parse(localStorage.getItem("movieData")) });
  }

  modalHandler = movie => {
    this.setState({ clickedMovie: movie });
    this.setState({ modalActive: true });
  };
  closeModal = () => {
    this.setState({ clickedMovie: null });
    this.setState({ modalActive: false });
  };

  render() {
    let allMovies = <Spinner/>;

    if (this.state.movieData) {
      allMovies = this.state.movieData.map(movie => {
        // If movie have long title split it and add '...'
        if (movie.Title.length > 11) {
          let moviefomated = movie.Title.substring(0, 10);
          movie.Title = moviefomated + '...';
        }
        return (
          <div className="all-movie-box" key={movie.id}>
            <MovieBox
              movieClicked={() => this.modalHandler(movie)}
              key={movie.id}
              poster={movie.Poster}
              title={movie.Title}
              runtime={movie.Runtime}
              rated={movie.Rated}
            ></MovieBox>
          </div>
        );
      });
    }

    return (
      <IonPage>
        <Header title="All Movies" />
        <IonContent>
          <div className="all-wrapper">{allMovies}</div>
          <MovieModal
            active={this.state.modalActive}
            closeModal={this.closeModal}
            movie={this.state.clickedMovie}
          />
        </IonContent>
      </IonPage>
    );
  }
}

export default All;
