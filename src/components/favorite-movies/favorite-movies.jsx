import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useSelector} from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';


function FavMovies({favMovie}){
    const movies = useSelector(state => state.movies);
    const user= useSelector(state => state.user)

    function removeMovie(movieId){
        let token = localStorage.getItem('token');
		const url= `https://cataflix.herokuapp.com/users/${user}/movies/${movieId}`;
        axios.delete(url,{
            headers: { Authorization: `Bearer ${token}` }
          })
          .then(response=>{
            console.log(response.data);
            window.open(`/users/${user}`, '_self')
          }
            )
          .catch(err => console.log(err))

    }


    return(
        <div>
            {movies.map(movie=>{
                if(favMovie.includes(movie._id)) return <Col md={6}>
                    <Card className="movie-card" key={movie._id}>
                        <Card.Img className="movie-poster img-fluid" src={movie.ImagePath} />
                        <Card.Body>
                            <Card.Title>{movie.Title}</Card.Title>
                            <Button onClick={()=>removeMovie(movie._id)} >Remove</Button>
                        </Card.Body>
                    </Card>   
                </Col>
            })}
        </div>
    )
}

FavMovies.propTypes={
    favMovie: PropTypes.string.isRequired
  }

export default FavMovies