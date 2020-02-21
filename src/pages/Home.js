import React, { Component } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import Axios from 'axios';

/* COMPONENTS */
import Header from '../components/Header';
import MovieCounter from '../components/MovieCounter';
import Swiper from '../components/Swiper';
import LastWatched from '../components/LastWatched';

/* CSS */
import '../theme/global.css';

class Home extends Component {
  state = {
    movieData: null,
    totalMovies: null,
    randomMovies: null,
    lastMovie: null
  }



  componentDidMount = () => {
    Axios.get("https://moviedatabase-eef3d.firebaseio.com/.json")
      .then(response => {
        this.setState({movieData: response.data.movies})
        this.setState({ totalMovies: this.state.movieData.length });
        this.setState({
          lastMovie: response.data.movies[response.data.movies.length-1]
        });
        this.getRandomeMovies();
      })
  }


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
  }


  render() {
    let test = null;
    if(this.state.lastMovie) {
      test = <LastWatched lastMovie={this.state.lastMovie} />;
    }

    return (
      <IonPage>
        <Header title="Movie Rocket" />
        <IonContent>
          <MovieCounter moviesNumber={this.state.totalMovies} />
          <Swiper randomMovies={this.state.randomMovies} />
          {test}
        </IonContent>
      </IonPage>
    );
  }
};

export default Home;
