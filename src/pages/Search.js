import React, { Component } from "react";
import { IonContent, IonPage } from "@ionic/react";

/* COMPONENTS */
import Header from "../components/Header";
import Input from "../components/Ui/Input";
import SwiperCategory from "../components/CategorySwiper";
import MovieBoxWide from '../components/MovieBoxWide';
import MovieModal from '../components/Ui/Modal';

/* CSS */
import "../theme/global.css";

class Search extends Component {
  state = {
    movieData: null,
    searchResult: [],
    clickedMovie: null,
    modalActive: false
  };

  componentDidMount() {
    let getData = JSON.parse(localStorage.getItem("movieData"));
    this.setState({ movieData: getData });
  }

  inputHandler = event => {
    let result = [];

    for (let x = 0; x < 20; x++) {
      let movieTitle = this.state.movieData[x].Title.toLowerCase();
      let typedValue = event.target.value.toLowerCase();
      if (movieTitle.charAt(0) === typedValue.charAt(0)) {
        result.push(this.state.movieData[x]);
      }
    }
    this.setState({ searchResult: result });
  };

  modalHandler = movie => {
    this.setState({ clickedMovie: movie });
    this.setState({ modalActive: true });
  };
  closeModal = () => {
    this.setState({ clickedMovie: null });
    this.setState({ modalActive: false });
  }

  render() {
    let searchResultBox = null;
    if (this.state.searchResult) {
      searchResultBox = this.state.searchResult.map(movie => (
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
      ));
    }

    return (
      <IonPage>
        <Header title="Search Movies" />
        <IonContent>
          <Input inputChanged={this.inputHandler} />
          <SwiperCategory />
          <div className="wrapper">{searchResultBox}</div>

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

export default Search;
