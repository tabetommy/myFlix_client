import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import  {Navbar,Nav} from 'react-bootstrap';

class MovieView extends React.Component{

	render(){
		const {movie, onBackClick}=this.props
		return(
			<div>
				<div>
					<h1>{movie.Title}</h1>
					<p>Director:
						<Link to={`/director/${movie.Director.Name}`}>
							{movie.Director.Name}
						</Link>
					</p>
					<p>Genre:
						<Link to={`/genre/${movie.Genre.Name}`}>
							{movie.Genre.Name}
						</Link>
					</p>
					<h4>Description</h4>
					<p>{movie.Description}</p>
				</div>
				<img className="movie-poster" src={movie.ImagePath} />
				<Button variant="primary" onClick={() => onBackClick() }>Back</Button>
			</div>
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