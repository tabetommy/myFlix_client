import React from 'react';
import axios from 'axios';
import MovieCard from '../movie-card/movie-card';
import MovieView from '../movie-view/movie-view';
import LoginView from '../login-view/login-view';
import RegistrationView from '../registration-view/registration-view';


 
class MainView extends React.Component {

   constructor(){
    super();
    this.state = {
      movies: [],
      seletedMovie:null,
      user:null 
    }
  }

  componentDidMount(){
    axios.get('https://cataflix.herokuapp.com/movies')
    .then(resp=>this.setState({movies:resp.data}))
    .catch(err=>console.log(err))
  }
  setSelectedMovie(newSelectedmovie){
    this.setState({selectedMovie:newSelectedmovie})
  }

  onLoggedIn(user){
    this.setState({user})
  }

  
  render() {
  const { movies, selectedMovie, user } = this.state;
  if (!user) return < LoginView onLoggedIn={user => this.onLoggedIn(user)}/> 
  if (selectedMovie) return <MovieView movie={selectedMovie} 
    onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />;

  if (movies.length === 0) return <div className="main-view" />;

  return (
    <div className="main-view">
      {movies.map(movie => <MovieCard key={movie._id} movie={movie} 
        onMovieClick={(movie) => { this.setSelectedMovie(movie) }} />)}
    </div>
  );
  }
}

export default MainView;