import React, { Component } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import axios from 'axios';

/* COMPONENTS */
import Header from '../components/Header';
import MovieCounter from '../components/MovieCounter';
import Swiper from '../components/Swiper';
import LastWatched from '../components/LastWatched';
import MovieModal from "../components/Ui/Modal";

/* CSS */
import '../theme/global.css';

class Home extends Component {
  state = {
    movieData: null,
    totalMovies: null,
    randomMovies: null,
    lastMovie: null,
    clickedMovie: null,
    modalActive: false
  };
  componentDidMount() {
    axios
      .get("https://moviedatabase-eef3d.firebaseio.com/movies.json")
      .then(Response => {
        this.setState({ movieData: Response.data });
        this.pullData();
      });
  }

  pullData = () => {
    localStorage.setItem("moviesData", JSON.stringify(this.state.movieData));
    this.setState({ totalMovies: this.state.movieData.length });
    this.setState({
      lastMovie: this.state.movieData[this.state.movieData.length - 1]
    });
    localStorage.setItem("movieData", JSON.stringify(this.state.movieData));
    this.getRandomeMovies();
  };

  // Get 10 Random movies from movies data then push it to state.randomMovies
  getRandomeMovies = () => {
    var moviesArray = this.state.movieData;
    var randomTen = [];
    for (let n = 1; n <= 10; ++n) {
      var i = Math.floor(Math.random() * (20 - n) + 1);
      randomTen.push(moviesArray[i]);
      moviesArray[i] = moviesArray[20 - n];
    }
    this.setState({ randomMovies: randomTen });
  };

  modalHandler = movie => {
    this.setState({ clickedMovie: movie });
    this.setState({ modalActive: true });
  };
  closeModal = () => {
    this.setState({ clickedMovie: null });
    this.setState({ modalActive: false });
    this.setState({ searchResult: [] });
    this.setState({ inputValue: "" });
  };

  render() {
    let justWatched = null;
    if (this.state.lastMovie) {
      justWatched = (
        <LastWatched
          lastMovie={this.state.lastMovie}
          modalIsClicked={() => this.modalHandler(this.state.lastMovie)}
        />
      );
    }

    return (
      <IonPage>
        <Header title="Movie Rocket" />
        <IonContent>
          <MovieCounter moviesNumber={this.state.totalMovies} />
          <Swiper
            randomMovies={this.state.randomMovies}
            movieClicked={this.modalHandler}
          />
          {justWatched}
          <MovieModal
            active={this.state.modalActive}
            closeModal={this.closeModal}
            movie={this.state.clickedMovie}
          />
        </IonContent>
      </IonPage>
    );
  }
};

export default Home;
