import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import './movie-card.scss';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { Heart, HeartFill } from 'react-bootstrap-icons';



function MovieCard(props) {
	const { movie, userFavMovies, setUserFavMovies } = props;

	function addMovie(id) {
		let token = localStorage.getItem('token');
		let username = localStorage.getItem('user');
		const url = `https://movieapi-production-2da7.up.railway.app/users/${username}/movies/${id}`
		axios.put(url, {}, {
			headers: { Authorization: `Bearer ${token}` }
		})
			.then(response => {
				// Update the userFavMovies state with the new list of favorite movies
				setUserFavMovies(response.data.FavouritesMovies);
			})
			.catch(err => console.log(err))
	}


	return (
		<Card className="h-100 border-0 shadow-sm movie-card-custom">
			<div className="position-relative overflow-hidden">
				<Card.Img
					variant="top"
					src={movie.ImagePath}
					className="movie-poster-img"
				/>
				{/* Floating Favorite Button */}
				<button
					onClick={() => addMovie(movie._id)}
					className="fav-btn-overlay"
				>
					{userFavMovies?.includes(movie?._id)
						? <HeartFill size={22} color="#ff4d4f" />
						: <Heart size={22} color="#fff" />
					}
				</button>
			</div>

			<Card.Body className="d-flex flex-column justify-content-between p-3">
				<Card.Title className="fs-6 fw-bold mb-3">{movie.Title}</Card.Title>
				<Link to={`/myFlix_client/movies/${movie._id}`} className="w-100">
					<Button variant="outline-primary" className="w-100 btn-sm rounded-pill">
						View Details
					</Button>
				</Link>
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