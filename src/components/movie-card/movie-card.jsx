import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import './movie-card.scss';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { Heart, HeartFill } from 'react-bootstrap-icons';



function MovieCard(props)  {
 const { movie } = props;
 
	function addMovie(id) {
		let token = localStorage.getItem('token');
		let username= localStorage.getItem('user');
		const url= `http://localhost:8080/users/${username}/movies/${id}`
		axios.put(url,{},{
			headers: { Authorization: `Bearer ${token}` }
		  })
		  .then(response => console.log("hhshshshhshhshs",response.data))
		  .catch(err => console.log(err))
	  }

	


	
		return (
			<Card className="movie-card">
				<Card.Img className="movie-poster" src={movie.ImagePath} alt='movie-portrait' />
				<Card.Body>
					<Card.Title>{movie.Title}</Card.Title>
					<Link to={`/myFlix_client/movies/${movie._id}`}>
						<Button variant="secondary">Attributes</Button><br></br>
					</Link>
					<Button onClick={()=>addMovie(movie._id)} variant="light">
						{/* <Heart size={30} color="blue"/> */}
						
							<HeartFill size={30} color="blue" />
						
					</Button>
				</Card.Body>
			</Card>
		)
	}

MovieCard.propTypes = {
	movie: PropTypes.shape({
		Title: PropTypes.string.isRequired,
		Description: PropTypes.string.isRequired,
		Genre: PropTypes.shape({
			Name: PropTypes.string.isRequired,
			Description: PropTypes.string.isRequired
		}),
		Director: PropTypes.shape({
			Name: PropTypes.string.isRequired,
			Bio: PropTypes.string.isRequired,
			Birth: PropTypes.string.isRequired,
			Death: PropTypes.string
		}),
		ImageURL: PropTypes.string,
		Featured: PropTypes.bool
	}).isRequired,
};

export default MovieCard;