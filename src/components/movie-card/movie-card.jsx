import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import './movie-card.scss';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";



class MovieCard extends React.Component {

	render() {
		const { movie } = this.props;
		return (
			<Card className="movie-card">
				<Card.Img className="movie-poster img-fluid" src={movie.ImagePath} />
				<Card.Body>
					<Card.Title>{movie.Title}</Card.Title>
					<Link to={`/movies/${movie._id}`}>
						<Button variant="link">Open</Button>
					</Link>
				</Card.Body>
			</Card>
		)
	}
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