import React, { Component } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import axios from 'axios';

/* COMPONENTS */
import Header from '../components/Header';
import MovieCounter from '../components/MovieCounter';
import Swiper from '../components/Swiper';
import LastWatched from '../components/LastWatched';
import MovieModal from "../components/Ui/Modal";
import Spinner from "../components/Ui/Spinner";

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
    this.setState({ totalMovies: this.state.movieData.length });
    this.setState({
      lastMovie: this.state.movieData[this.state.movieData.length - 1]
    });
    localStorage.setItem("movieData", JSON.stringify(this.state.movieData));
    if(this.state.movieData) {
      this.getRandomeMovies(this.state.movieData, 20);
    }
  };
  // Get 10 Random movies from movies data then push it to state.randomMovies
  getRandomeMovies = (arr, n) => {
    var result = new Array(n),
      len = arr.length,
      taken = new Array(len);
    if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    this.setState({ randomMovies: result });
  };

  modalHandler = movie => {
    this.setState({ clickedMovie: movie });
    this.setState({ modalActive: true });
  };
  closeModal = () => {
    this.setState({ clickedMovie: null });
    this.setState({ modalActive: false });
  };

  render() {
    let justWatched = <Spinner/>;
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
