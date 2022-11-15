import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import './movie-view.scss'


class MovieView extends React.Component{

	render(){
		const {movie, onBackClick}=this.props
		return(
			<div className='movie-view'>
				<div>
					<h1>{movie.Title}</h1>
					<p>Director:
						<Link to={`/myFlix_client/director/${movie.Director.Name}`}>
							{movie.Director.Name}
						</Link>
					</p>
					<p>Genre:
						<Link to={`/myFlix_client/genre/${movie.Genre.Name}`}>
							{movie.Genre.Name}
						</Link>
					</p>
					<h4>Description</h4>
					<p>{movie.Description}</p>
				</div>
				<img className="rounded mx-auto d-block" src={movie.ImagePath} />
				<Button variant="success mx-auto d-block" onClick={() => onBackClick() }>Back</Button>
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