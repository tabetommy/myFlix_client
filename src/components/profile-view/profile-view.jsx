import React,{useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import EditView from '../edit-user-data/edit-user-data';
import FavMovies from '../favorite-movies/favorite-movies';
import Button from 'react-bootstrap/Button';





function ProfileView (props){
   
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday]=useState('');
    const [favouriteMovies, setFavouriteMovies] = useState([]);
    const [showModal, setShowModal]= useState(false);

    useEffect(()=>{
        let accessToken= localStorage.getItem('token');
            axios.get(`https://cataflix.herokuapp.com/users/${props.user}`,{
                headers:{Authorization: `Bearer ${accessToken}`}
                })
            .then(response=>{
                setUsername(response.data.Username)
                setPassword(response.data.Password)
                setEmail(response.data.Email)
                setBirthday(response.data.Birthday)
                setFavouriteMovies(response.data.FavouritesMovies)
                console.log(response.data)
            })
            .catch(err=>console.log(err))

    },[])

    

     handleDelete=()=>{
        let accessToken= localStorage.getItem('token');
        axios.delete(`https://cataflix.herokuapp.com/users/${props.user}`,{
            headers:{Authorization: `Bearer ${accessToken}`}
            })
        .then(()=>{
            alert(`${props.user} has been succesfully deleted`);
            localStorage.clear();
            window.open('/register', '_self');
        })
        .catch(err=>console.log(err))

    }
    

    handleShowModal=()=>{
        setShowModal(true)
    }

    handleCloseModal=()=>{
        setShowModal(false)
    }
 
    const {user, onBackClick}= props;
        return(
            <div>
                <EditView user={user} 
                username={username}
                password={password}
                email={email}
                birthday={birthday}
                setUsername={setUsername}
                setPassword={setPassword}
                setEmail={setEmail}
                setBirthday={setBirthday}
                />
                <Button variant="primary" onClick={handleShowModal}>Delete user account </Button><br></br>
                <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                    <Modal.Title>Are you sure you want to delete your account?</Modal.Title>
                    </Modal.Header>
                    <Modal.Footer>
                    <Button variant="danger" onClick={handleDelete}>
                        Yes
                    </Button>
                    <Button variant="primary" onClick={handleCloseModal}>
                        No
                    </Button>
                    </Modal.Footer>
                </Modal>
                <Button onClick={onBackClick}>Back to main view</Button>
                <h3>My Favorite Movies</h3>
                {favouriteMovies && favouriteMovies.map(movieId => <FavMovies favMovie={movieId} key={movieId} />)}
                
            </div>

        )
    }      

ProfileView.propTypes = {
	user:PropTypes.string.isRequired,
    onBackClick: PropTypes.func.isRequired
};

export default ProfileView;