import React from 'react';
import PropTypes from 'prop-types';

class DirectorView extends React.Component{
    render(){
        const {director}= this.props;
        return(
             <div>
                <h1>{director.Name}</h1>
                <p>Born in {director.Birth}</p>
                <h3>Biography</h3>
                <p>{director.Bio}</p>
            </div>)
    }
}

DirectorView.propTypes = {
		director: PropTypes.shape({
			Name: PropTypes.string.isRequired,
			Bio: PropTypes.string.isRequired,
			Birth: PropTypes.string.isRequired,
			Death: PropTypes.string
		}).isRequired

};

export default DirectorView