import React from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
  if (!user) return <Row className="main-view justify-content-md-center">
            <Col md={8}>
                <LoginView onLoggedIn={user => this.onLoggedIn(user)}/>
            </Col>
      </Row> 
   
  if (selectedMovie) return <Row className="justify-content-md-center">
        <Col md={8}>
            <MovieView movie={selectedMovie} 
            onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
        </Col>
    </Row> 

  if (movies.length === 0) return <div className="main-view" />;

  return (
    <Row className="main-view justify-content-md-center">
        <Col md={8}>
            {movies.map(movie => <MovieCard key={movie._id} movie={movie} 
                onMovieClick={(movie) => { this.setSelectedMovie(movie) }} />)}
        </Col>
    </Row> 
  );
  }
}

export default MainView;