import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

class GenreView extends React.Component{
    render(){
        const {genre, onBackClick} = this.props;
        return(
            <Container className="py-5">
                <Row className="justify-content-center">
                    <Col md={8} lg={6}>
                        <div className="genre-view-card text-center p-5 shadow-sm rounded-4 border-0">
                            {/* Subtle Category Icon or Label */}
                            <div className="text-uppercase tracking-widest text-primary fw-bold mb-2" style={{ fontSize: '0.8rem', letterSpacing: '2px' }}>
                                Movie Category
                            </div>

                            <h1 className="display-4 fw-bold mb-4">{genre.Name}</h1>

                            <p className="text-muted fs-5 lh-lg mb-5">
                                {genre.Description}
                            </p>

                            <hr className="my-5 opacity-10" />

                            <Button
                                variant="outline-dark"
                                size="lg"
                                className="rounded-pill px-5 transition-all"
                                onClick={() => onBackClick()}
                            >
                                <i className="bi bi-arrow-left me-2"></i> Back to Movie
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        )

    }
}

GenreView.propTypes = {
	genre: PropTypes.shape({
        Name: PropTypes.string.isRequired,
		Description: PropTypes.string.isRequired
		}).isRequired,
     onBackClick: PropTypes.func.isRequired
};

export default GenreView;