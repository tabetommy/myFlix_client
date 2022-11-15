import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

class GenreView extends React.Component{
    render(){
        const {genre, onBackClick} = this.props;
        return(
            <div>
                <h1>{genre.Name}</h1>
                <p>{genre.Description}</p>
                <Button variant="success" onClick={() => onBackClick() }>Back to movie view</Button>
            </div>
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