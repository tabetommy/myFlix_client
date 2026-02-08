import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { connect } from 'react-redux';
import VisibilityFilterInput from '../visibility-filter-input/visibility-filter-input';
import MovieCard  from '../movie-card/movie-card';
import './movies-list.scss';
import axios from 'axios';




function MoviesList(props) {
  const { movies, visibilityFilter } = props;
  let filteredMovies = movies;

  if (visibilityFilter !== ''){
    filteredMovies = movies.filter(m => m.Title.toLowerCase().includes(visibilityFilter.toLowerCase()));
  }


const [userFavMovies, setUserFavMovies] = React.useState([]);

     React.useEffect(()=>{
          let accessToken= localStorage.getItem('token');
          const user= localStorage.getItem('user');
				  axios.get(`https://movieapi-production-2da7.up.railway.app/users/${user}`,{
					  headers:{Authorization: `Bearer ${accessToken}`}
					  })
				  .then(response=>{
            setUserFavMovies(response.data.FavouritesMovies)
				  })
				  .catch(err=>console.log(err))
	  
		  },[])

     

  if (!movies) return <div className="main-view"/>;

  return (
         <>
           <Col md={4} className="invisible"></Col>
           <Col md={4}>
            <VisibilityFilterInput visibilityFilter={visibilityFilter} />
           </Col>
           <Col md={4} className="invisible"></Col>   
           {filteredMovies.map(m => (            
              <Col sm={4} md={3} key={m._id} className='movies-list-card'>
                  <MovieCard movie={m} userFavMovies={userFavMovies} setUserFavMovies={setUserFavMovies}/>
              </Col> 
                  ))}
         </>
        )
}

const mapStateToProps = state => {
  const { visibilityFilter } = state;
  return { visibilityFilter };
};

MoviesList.propTypes = {
	movies: PropTypes.arrayOf( 
    PropTypes.shape({
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
    }).isRequired
  ).isRequired ,
	visibilityFilter: PropTypes.string.isRequired
  };


export default connect(mapStateToProps)(MoviesList)