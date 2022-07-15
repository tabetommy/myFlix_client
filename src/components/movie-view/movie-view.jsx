import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

class MovieView extends React.Component{

	render(){
		const {movie, onBackClick}=this.props
		return(
			<Card className="movie-view">
		        <Card.Img className="movie-poster" src={movie.ImagePath} />
				<Card.Body>
					<Card.Title>{movie.Title}</Card.Title>
					<Card.Text>{movie.Description}</Card.Text>
				</Card.Body>  
		        <Button variant="dark" onClick={() => onBackClick() }>Back</Button>
				<Link to={`/director/${movie.Director.Name}`}>
					<Button variant="primary">Director</Button>
				</Link>
				<Link to={`/genre/${movie.Genre.Name}`}>
					<Button variant="dark">Genre</Button>
				</Link>
	      	</Card>
			)
	}
};


// MovieView.propTypes = {
// 	movie: PropTypes.shape({
// 	  Title: PropTypes.string.isRequired,
// 	  Description: PropTypes.string.isRequired,
// 	  Genre: PropTypes.shape({
// 		Name: PropTypes.string.isRequired,
// 		Description: PropTypes.string.isRequired
// 	  }),
// 	  Director :PropTypes.shape({
// 		Name:PropTypes.string.isRequired,
// 		Bio:PropTypes.string.isRequired,
// 		Birth:PropTypes.string.isRequired,
// 		Death:PropTypes.string
// 	  }),
// 	  ImageURL: PropTypes.string,
// 	  Featured: PropTypes.bool
// 	}).isRequired,
// 	onBackClick: PropTypes.func.isRequired
//   };

export default MovieView;