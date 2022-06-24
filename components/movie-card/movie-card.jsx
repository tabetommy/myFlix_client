import React from 'react';
import PropTypes from 'prop-types'

class MovieCard extends React.Component{

	render(){
		const {movie, onMovieClick}=this.props;
		return(
			<div className="movie-card" onClick={() => {onMovieClick(movie); }}>
			{movie.Title}
			</div>
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
	  Director :PropTypes.shape({
		Name:PropTypes.string.isRequired,
		Bio:PropTypes.string.isRequired,
		Birth:PropTypes.string.isRequired,
		Death:propTypes.string
	  }),
	  ImageURL: PropTypes.string.isRequired,
	  Featured: PropTypes.bool
	}).isRequired,
	onMovieClick: PropTypes.func.isRequired
  };
  
export default MovieCard;