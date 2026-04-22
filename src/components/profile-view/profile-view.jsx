import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import EditView from '../edit-user-data/edit-user-data';
import FavMovies from '../favorite-movies/favorite-movies';
import Button from 'react-bootstrap/Button';
import './profile-view.scss';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';





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
            <Container className="py-5 dashboard-view">
                <Row className="justify-content-center">
                    <Col lg={10}>
                    
                    {/* 1. Header Section */}
                    <div className="mb-5 text-center">
                        <h1 className="fw-bold">My Account</h1>
                        <p className="text-muted">Manage your profile, security, and favorite movies</p>
                    </div>

                    {/* 2. Edit Profile Section */}
                    <section className="mb-5">
                        <EditView 
                        user={user} 
                        username={username}
                        password={password}
                        email={email}
                        birthday={birthday}
                        setUsername={setUsername}
                        setPassword={setPassword}
                        setEmail={setEmail}
                        setBirthday={setBirthday}
                        />
                    </section>

                    {/* 3. Favorites Section */}
                    {username && (
                        <section className="fav-movies-section mb-5">
                        <div className="d-flex align-items-center mb-4">
                            <h3 className="fw-bold m-0">Favourite Movies</h3>
                            <span className="badge rounded-pill bg-primary ms-3">
                            {favouriteMovies?.length || 0}
                            </span>
                        </div>
                        
                        <Row className="g-4">
                            {favouriteMovies?.map(movieId => (
                            <Col xs={6} md={4} lg={3} key={movieId}>
                                <FavMovies 
                                favMovie={movieId} 
                                setCounter={setCounter} 
                                />
                            </Col>
                            ))}
                        </Row>
                        </section>
                    )}

                    {/* 4. Danger Zone Section */}
                    {username && (
                        <section className="mt-5 pt-5 border-top">
                        <div className="p-4 rounded-4 border border-danger-subtle bg-danger bg-opacity-10">
                            <h4 className="text-danger fw-bold h5">Danger Zone</h4>
                            <p className="small text-muted mb-3">
                            Once you delete your account, there is no going back. Please be certain.
                            </p>
                            <Button variant="danger" className="rounded-pill px-4" onClick={handleShowModal}>
                            Delete Account
                            </Button>
                        </div>
                        </section>
                    )}

                    {/* Delete Confirmation Modal */}
                    <Modal show={showModal} onHide={handleCloseModal} centered className="delete-modal">
                        <Modal.Header closeButton className="border-0">
                        <Modal.Title className="fw-bold text-center w-100">Confirm Deletion</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="text-center py-4">
                        <div className="mb-3 text-danger">
                            <i className="bi bi-exclamation-triangle-fill fs-1"></i>
                        </div>
                        Are you sure you want to delete your profile? 
                        <br /><strong>This action cannot be reversed.</strong>
                        </Modal.Body>
                        <Modal.Footer className="border-0 justify-content-center pb-4">
                        <Button variant="light" className="px-4 rounded-pill" onClick={handleCloseModal}>
                            No, keep it
                        </Button>
                        <Button variant="danger" className="px-4 rounded-pill" onClick={handleDelete}>
                            Yes, delete account
                        </Button>
                        </Modal.Footer>
                    </Modal>

                    </Col>
                </Row>
            </Container>

        )
    }      

ProfileView.propTypes = {
	user:PropTypes.string.isRequired,
    onBackClick: PropTypes.func.isRequired
};

export default ProfileView;