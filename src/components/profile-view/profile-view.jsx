import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import EditView from '../edit-user-data/edit-user-data';
import FavMovies from '../favorite-movies/favorite-movies';
import Button from 'react-bootstrap/Button';
import './profile-view.scss';





function ProfileView (props){
   
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday]=useState('');
    const [favouriteMovies, setFavouriteMovies] = useState([]);
    const [showModal, setShowModal]= useState(false);
    const [counter, setCounter]=useState(0)

    useEffect(()=>{
        let accessToken= localStorage.getItem('token');
            axios.get(`https://movieapi-production-2da7.up.railway.app/users/${props.user}`,{
                headers:{Authorization: `Bearer ${accessToken}`}
                })
            .then(response=>{
                setUsername(response.data.Username)
                setEmail(response.data.Email)
                setBirthday(response.data.Birthday)
                setFavouriteMovies(response.data.FavouritesMovies)
                
            })
            .catch(err=>console.log(err))

    },[counter])

    

    function handleDelete(){
        let accessToken= localStorage.getItem('token');
        axios.delete(`https://movieapi-production-2da7.up.railway.app/users/${props.user}`,{
            headers:{Authorization: `Bearer ${accessToken}`}
            })
        .then(()=>{
            alert(`${props.user} has been succesfully deleted`);
            localStorage.clear();
            window.open('/myFlix_client/register', '_self');
        })
        .catch(err=>console.log(err))

    }
    

    function handleShowModal(){
        setShowModal(true)
    }

    function handleCloseModal(){
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
                {username && <><Button variant="danger" className='mb-2 mx-2' onClick={handleShowModal}>Konto löschen </Button><br></br></>}
                <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                    <Modal.Title>Sind Sie sicher, dass Sie Ihr Konto löschen möchten?</Modal.Title>
                    </Modal.Header>
                    <Modal.Footer>
                    <Button variant="danger" onClick={handleDelete}>
                        Ja
                    </Button>
                    <Button variant="primary" onClick={handleCloseModal}>
                        Nein
                    </Button>
                    </Modal.Footer>
                </Modal>
                {username && <><h3 className='mb-2 mx-2 mt-3'>Lieblingsfilme</h3></>}
                <div className='fav-movies-con'>
                    {favouriteMovies && favouriteMovies.map(movieId => <FavMovies favMovie={movieId} key={movieId} setCounter={setCounter} />)}
                </div>   
            </div>

        )
    }      

ProfileView.propTypes = {
	user:PropTypes.string.isRequired,
    onBackClick: PropTypes.func.isRequired
};

export default ProfileView;