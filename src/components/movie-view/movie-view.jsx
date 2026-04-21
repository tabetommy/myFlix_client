import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import './movie-view.scss'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


class MovieView extends React.Component{

	render(){
		const {movie, onBackClick}=this.props
		return(
			<Container className="movie-view py-5">
				<Row className="justify-content-center align-items-start g-5">

					{/* Left Side: Movie Poster */}
					<Col md={5} lg={4} className="text-center">
						<div className="movie-view-poster-wrapper shadow-lg">
							<img
								className="img-fluid rounded-4"
								src={movie.ImagePath}
								alt={movie.Title}
							/>
						</div>
						<Button
							variant="link"
							className="mt-4 text-secondary text-decoration-none d-flex align-items-center justify-content-center mx-auto"
							onClick={() => onBackClick()}
						>
							← Back to List
						</Button>
					</Col>

					{/* Right Side: Movie Details */}
					<Col md={7} lg={6}>
						<div className="ps-md-4">
							<h1 className="display-4 fw-bold mb-3">{movie.Title}</h1>

							<div className="mb-4 d-flex gap-2 flex-wrap">
								<Link 
									to={`/myFlix_client/genre/${movie.Genre.Name}`}
									className="badge rounded-pill border border-primary-subtle bg-primary-subtle text-primary-emphasis px-4 py-2 text-decoration-none fw-semibold shadow-sm "
									style={{ fontSize: '0.9rem', backgroundColor: '#cfe2ff', marginRight: '0.5rem' }}
								>
									{movie.Genre.Name}
								</Link>
								<Link 
									to={`/myFlix_client/director/${movie.Director.Name}`}
									className="badge rounded-pill border border-secondary-subtle bg-secondary-subtle text-secondary-emphasis px-4 py-2 text-decoration-none fw-semibold shadow-sm"
									style={{ fontSize: '0.9rem', backgroundColor: '#e2e3e5' }}
								>
									<span className="opacity-75 me-1">Director:</span> {movie.Director.Name}
								</Link>
							</div>

							<hr className="my-4 opacity-10" />

							<h4 className="fw-semibold mb-3">Description</h4>
							<p className="text-muted lh-lg fs-5">
								{movie.Description}
							</p>

							<div className="mt-5">
								<Button variant="success" size="lg" className="rounded-pill px-5 shadow-sm">
									Watch Now
								</Button>
							</div>
						</div>
					</Col>

				</Row>
			</Container>
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