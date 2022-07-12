import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setMovies } from '../../actions/actions';
import MoviesList from '../movies-list/movies-list';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import MovieView from '../movie-view/movie-view';
import LoginView from '../login-view/login-view';
import RegistrationView from '../registration-view/registration-view';
import DirectorView from '../director-view/director-view';
import GenreView from '../genre-view/genre-view';
import ProfileView from '../profile-view/profile-view';
import NavBar from '../nav-bar/nav-bar'


class MainView extends React.Component {

  constructor() {
    super();
    this.state = {
      user: null,
    }
  }

  componentDidMount() {
    let accessToken = localStorage.getItem('token');
    if (accessToken !== null) {
      this.setState({ user: localStorage.getItem('user') })
    }
    this.getMovies(accessToken)
  }


  getMovies(token) {
    axios.get('https://cataflix.herokuapp.com/movies', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(resp => {
        this.props.setMovies(response.data)
      })
      .catch(err => console.log(err))
  }

  onLoggedIn(authData) {
    this.setState({
      user: authData.user.Username,
    });
    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.Username);
    this.getMovies(authData.token)
  }


  render() {
    const {user } = this.state;
    const {movies}=this.props;
    return (
      <div>
        <Router>
          <NavBar user={user} />
          <Row className="main-view justify-content-md-center">
            <Route exact path="/" render={() => {
              if (!user) return <Col md={8}>
                <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
              </Col>
              if (movies.length === 0) return <div className="main-view" />;
              return <MoviesList movies={movies}/>
            }} />
            <Route path="/register" render={() => {
              if (user) return <Redirect to="/" />
              return <Col md={8}><RegistrationView /></Col>
            }} />
            <Route path="/movies/:movieId" render={({ match, history }) => {
              if (!user) return <Col md={8}>
                <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
              </Col>
              if (movies.length === 0) return <div className="main-view" />;
              return <Col md={8}>
                <MovieView
                  movie={movies.find(m => m._id === match.params.movieId)}
                  onBackClick={() => history.goBack()}
                />
              </Col>
            }} />
            <Route path="/director/:name" render={({ match, history }) => {
              if (!user) return <Col md={8}>
                <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
              </Col>
              if (movies.length === 0) return <div className="main-view" />;
              return <Col md={8}>
                <DirectorView
                  director={movies.find(m => m.Director.Name === match.params.name).Director}
                  onBackClick={() => history.goBack()}
                />
              </Col>
            }} />
            <Route path="/genre/:name" render={({ match, history }) => {
              if (!user) return <Col md={8}>
                <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
              </Col>
              if (movies.length === 0) return <div className="main-view" />;
              return <Col md={8}>
                <GenreView genre={movies.find(m => m.Genre.Name === match.params.name).Genre}
                  onBackClick={() => history.goBack()}
                />
              </Col>
            }} />
            <Route path={`/users/${user}`} render={({ history }) => {
              if (!user) return <Redirect to="/" />
              return <Col md={8}>
                <ProfileView user={user} onBackClick={() => history.goBack()} />
              </Col>
            }} />
          </Row>
        </Router>
      </div>
    )
  }
}

let mapStateToProps=state=>{
  return {movies:state.movies}
}

export default connect(mapStateToProps, {setMovies})( MainView);