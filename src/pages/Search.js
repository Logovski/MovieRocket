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
    modalActive: false,
    inputValue: "",
    categoryGroup: []
  };

  componentDidMount() {
    let getData = JSON.parse(localStorage.getItem("movieData"));
    this.setState({ movieData: getData });
  }

  inputHandler = event => {
    this.setState({ categoryGroup: [] });
    let result = [];
    this.setState({ inputValue: event.target.value });
    for (let x = 0; x < this.state.movieData.length; x++) {
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
    this.setState({ searchResult: [] });
    this.setState({ inputValue: "" });
  };

  findAllGenres = (genre) => {
    if (this.state.movieData) {
      let result = [];
      for (let x = 0; x < this.state.movieData.length; x++) {
        for (let y = 0; y < this.state.movieData[x].Genre.length; y++) {
          if (this.state.movieData[x].Genre[y] === genre) {
            result.push(this.state.movieData[x]);
          }
        }
      }
      if(result.length === 0) {
        result = [];
      }
      this.setState({ categoryGroup: result });
    }
  }




  categoryBoxClicked = (event) => {
    switch (event) {
      case "Action":
        this.findAllGenres(event);
        break;
      case "Adventure":
        this.findAllGenres(event);
        break;
      case "Science":
        this.findAllGenres(event);
        break;
      case "Horror":
        this.findAllGenres(event);
        break;
      case "Comedy":
        this.findAllGenres(event);
        break;
      case "Drama":
        this.findAllGenres(event);
        break;
      case "Family":
        this.findAllGenres(event);
        break;
      case "Sci-Fi":
        this.findAllGenres(event);
        break;
      case "Romance":
        this.findAllGenres(event);
        break;
      case "Biography":
        this.findAllGenres(event);
        break;
      case "Thriller":
        this.findAllGenres(event);
        break;
      case "Crime":
        this.findAllGenres(event);
        break;
      case "Fantasy":
        this.findAllGenres(event);
        break;

      default:
      // code block
    }
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


    let searchGenre = null;
    if (this.state.categoryGroup.length !== 0) {
      searchGenre = this.state.categoryGroup.map(movie => (
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
          <Input
            inputChanged={this.inputHandler}
            inputValue={this.state.inputValue}
          />
          <SwiperCategory categoryBoxClicked={this.categoryBoxClicked} />
          <div className="wrapper search-result">{searchResultBox}</div>
          <div className="wrapper search-result">{searchGenre}</div>
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
