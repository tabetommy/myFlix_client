import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import moment from 'moment';

class DirectorView extends React.Component{
    render(){
        const {director, onBackClick}= this.props;
        return(
             <div>
                <h1>{director.Name}</h1>
                <p>Born in {moment(director.Birth).format('LL')}</p>
                <h3>Biography</h3>
                <p>{director.Bio}</p>
                <Button variant="primary" onClick={() => onBackClick() }>Back to movie view</Button>
            </div>)
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