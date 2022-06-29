import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class MovieView extends React.Component{

	render(){
		const {movie, onBackClick}=this.props
		return(
			<Card className="movie-view">
		        <Card.Img className="movie-poster" src={movie.ImagePath} />
		        <Card.Title>{movie.Title}</Card.Title>
          		<Card.Text>{movie.Description}</Card.Text>
		        <Button variant="primary" onClick={() => { onBackClick(null); }}>Back</Button>
	      	</Card>
			)
	}
};


MovieView.propTypes = {
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
		Death:PropTypes.string
	  }),
	  ImageURL: PropTypes.string,
	  Featured: PropTypes.bool
	}).isRequired,
	onBackClick: PropTypes.func.isRequired
  };

export default MovieView;