import React, { Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import EditView from '../edit-user-data/edit-user-data';




class ProfileView extends Component{
    constructor(){
        super();
        this.state = {
          userInfo:{},
          showView:false,
          showModal:false
        }
      }

    componentDidMount(){
        let accessToken= localStorage.getItem('token');
        axios.get(`https://cataflix.herokuapp.com/users/${this.props.user}`,{
            headers:{Authorization: `Bearer ${accessToken}`}
            })
        .then(resp=>this.setState({userInfo:resp.data}))
        .catch(err=>console.log(err))
    }

     handleDelete=()=>{
        let accessToken= localStorage.getItem('token');
        axios.delete(`https://cataflix.herokuapp.com/users/${this.props.user}`,{
            headers:{Authorization: `Bearer ${accessToken}`}
            })
        .then(()=>{
            alert(`${this.props.user} has been succesfully deleted`);
            localStorage.clear();
            window.open('/register', '_self');
        })
        .catch(err=>console.log(err))

    }
    toggleDiv=()=>{
        this.setState({showView:!this.state.showView})
    }

    handleShowModal=()=>{
        this.setState({showModal:true})
    }

    handleCloseModal=()=>{
        this.setState({showModal:false})
    }
    
    render(){
        const {user, onBackClick}= this.props;
        const {Email,Username,Birthday}= this.state.userInfo;
        return(
            <div>
                <h1>Your profile</h1> 
                <h3>Username:{Username}</h3>
                <h3>Email:{Email}</h3>
                <h3>Birthday:{Birthday}</h3>
                <Button onClick={this.toggleDiv} >Edit user account</Button><br></br>
                {this.state.showView?<EditView user={user} />:null}
                <Button variant="primary" onClick={this.handleShowModal}>Delete user account </Button><br></br>
                <Modal show={this.state.showModal} onHide={this.handleCloseModal}>
                    <Modal.Header closeButton>
                    <Modal.Title>Are you sure you want to delete your account?</Modal.Title>
                    </Modal.Header>
                    <Modal.Footer>
                    <Button variant="danger" onClick={this.handleDelete}>
                        Yes
                    </Button>
                    <Button variant="primary" onClick={this.handleCloseModal}>
                        No
                    </Button>
                    </Modal.Footer>
                </Modal>
                <Button onClick={onBackClick}>Back</Button>
            </div>

        )
    }      
}

ProfileView.propTypes = {
	user:PropTypes.string.isRequired,
    onBackClick: PropTypes.func.isRequired
};

export default ProfileView;