import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import moment from 'moment';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


class DirectorView extends React.Component{
    render(){
        const {director, onBackClick}= this.props;
        return(
             <Container className="py-5">
                <Row className="justify-content-center">
                    <Col md={10} lg={8}>
                        <Card className="border-0 shadow-sm rounded-4 overflow-hidden">
                            {/* Header Section with a subtle background tint */}
                            <div className="bg-light p-4 p-md-5 border-bottom border-light-subtle">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="director-icon-circle me-3">
                                        <i className="bi bi-person-badge fs-3 text-primary"></i>
                                    </div>
                                    <h1 className="display-5 fw-bold m-0">{director.Name}</h1>
                                </div>

                                <div className="d-flex align-items-center text-muted">
                                    <i className="bi bi-calendar-event me-2"></i>
                                    <span className="fw-medium">
                                        Born: {moment(director.Birth).format('LL')}
                                    </span>
                                </div>
                            </div>

                            {/* Biography Section */}
                            <Card.Body className="p-4 p-md-5">
                                <h3 className="h5 text-uppercase tracking-wider fw-bold text-secondary mb-4">
                                    Biography
                                </h3>
                                <p className="director-bio text-muted lh-lg fs-5">
                                    {director.Bio}
                                </p>

                                <div className="mt-5 pt-4 border-top">
                                    <Button
                                        variant="outline-secondary"
                                        className="rounded-pill px-4 py-2 fw-semibold"
                                        onClick={() => onBackClick()}
                                    >
                                        <i className="bi bi-arrow-left me-2"></i>
                                        Back to Movie
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            )
    }
}

DirectorView.propTypes = {
		director: PropTypes.shape({
			Name: PropTypes.string.isRequired,
			Bio: PropTypes.string.isRequired,
			Birth: PropTypes.string.isRequired,
			Death: PropTypes.string
		}).isRequired,
        onBackClick: PropTypes.func.isRequired

};

export default DirectorView