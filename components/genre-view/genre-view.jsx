import React from 'react';
import PropTypes from 'prop-types';

class GenreView extends React.Component{
    render(){
        const {genre} = this.props;
        return(
            <div>
                <h1>{genre.Name}</h1>
                <p>{genre.Description}</p>
            </div>
        )

    }
}

GenreView.propTypes = {
	genre: PropTypes.shape({
        Name: PropTypes.string.isRequired,
		Description: PropTypes.string.isRequired
		}).isRequired,
};

export default GenreView;