import React, { useState} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const EditView=(props)=>{
    {/*const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');*/}
    // Declare hook for each input
    const [ usernameErr, setUsernameErr ] = useState('');
    const [ passwordErr, setPasswordErr ] = useState('');
    const [ emailErr, setEmailErr] = useState('');
   

    // validate user inputs
    const validate = () => {
        let isReq = true;
        if(!props.username){
        setUsernameErr('Username required');
        isReq = false;
        }else if(props.username.length < 5){
        setUsernameErr('Username must be atleast 5 characters long');
        isReq = false;
        }
        if(!props.password){
        setPasswordErr('Password required');
        isReq = false;
        }else if(props.password.length < 6){
        setPasswordErr('Password must be 6 characters long');
        isReq = false;
        }
        if(!props.email){
            setEmailErr('Email is required')
        }else if(props.email.indexOf('@')===-1){
            setEmailErr('You must enter a valid email')
        }
        return isReq;
    }

   
    const handleSubmit=(e)=>{
        e.preventDefault();
        const isReq = validate();
        if(isReq){
            let accessToken= localStorage.getItem('token')
            axios.put(`https://cataflix.herokuapp.com/users/${props.user}`,{
            Username:props.username,
            Password:props.password,
            Email:props.email,
        },{  headers: { Authorization: `Bearer ${accessToken}`}})
        .then(response=>{
            localStorage.setItem('user', response.data.Username);
            console.log(response.data);
            window.open(`/users/${props.user}`, '_self');
            
            
        })
        .catch(err=>console.log(err))
        }  
    }
    return(
        <Form>
            <Form.Group>
                <Form.Label>New Username:</Form.Label>
                <Form.Control type="text" value={props.username} onChange={event=>props.setUsername(event.target.value)} />
                {usernameErr && <p>{usernameErr}</p>}
            </Form.Group>
            <Form.Group>
                <Form.Label>New Passwordss:</Form.Label>
                <Form.Control type="password" value={props.password} onChange={event=>props.setPassword(event.target.value)} />
                {passwordErr && <p>{passwordErr}</p>}
            </Form.Group>
            <Form.Group>
                <Form.Label>New Emails:</Form.Label>
                <Form.Control type="email" value={props.email} onChange={event=>props.setEmail(event.target.value)} />
                {emailErr && <p>{emailErr}</p>}
            </Form.Group>
            <Button type='submit' onClick={handleSubmit} variant='secondary' >Update</Button>
        </Form>
    )
}

EditView.propTypes = {
	user:PropTypes.string.isRequired
};

export default EditView;