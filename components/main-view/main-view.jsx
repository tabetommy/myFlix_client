import React from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MovieCard from '../movie-card/movie-card';
import MovieView from '../movie-view/movie-view';
import LoginView from '../login-view/login-view';
import RegistrationView from '../registration-view/registration-view';



 
class MainView extends React.Component {

   constructor(){
    super();
    this.state = {
      movies: [],
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
  const { movies, user } = this.state;
  console.log(movies)
  if (!user) return <Row className="main-view justify-content-md-center">
            <Col md={8}>
                <LoginView onLoggedIn={user => this.onLoggedIn(user)}/>
            </Col>
      </Row> 
  if (movies.length === 0) return <div className="main-view" />;

  return (
    <Router>
        <Row className="main-view justify-content-md-center">
          <Route exact path="/" render={() => {
            return movies.map(m => (
              <Col sm={4} md={3} key={m._id}>
                <MovieCard movie={m} />
              </Col>
            ))
          }} />
          <Route path="/movies/:movieId" render={({ match }) => {
            return <Col md={8}>
              <MovieView movie={movies.find(m => m._id === match.params.movieId)} />
            </Col>
          }} />
        </Row>
      </Router>
  )
  }
}

export default MainView;