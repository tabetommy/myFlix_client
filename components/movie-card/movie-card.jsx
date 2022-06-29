import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';


class MovieCard extends React.Component {

	render() {
		const { movie, onMovieClick } = this.props;
		return (
			<ListGroup>
				<ListGroup.Item className="movie-card" onClick={() => { onMovieClick(movie); }}>
				{movie.Title}
				</ListGroup.Item>
			</ListGroup>			
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
	onMovieClick: PropTypes.func.isRequired
};

export default MovieCard;