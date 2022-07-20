import React, { useState} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const EditView=(props)=>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');

    // Declare hook for each input
    const [ usernameErr, setUsernameErr ] = useState('');
    const [ passwordErr, setPasswordErr ] = useState('');
    const [ emailErr, setEmailErr] = useState('');
    const [birthdayErr, setBirthdayErr] = useState('');

    // validate user inputs
    const validate = () => {
        let isReq = true;
        if(!username){
        setUsernameErr('Username required');
        isReq = false;
        }else if(username.length < 5){
        setUsernameErr('Username must be atleast 5 characters long');
        isReq = false;
        }
        if(!password){
        setPasswordErr('Password required');
        isReq = false;
        }else if(password.length < 6){
        setPasswordErr('Password must be 6 characters long');
        isReq = false;
        }
        if(!email){
            setEmailErr('Email is required')
        }else if(email.indexOf('@')===-1){
            setEmailErr('You must enter a valid email')
        }
        if(!birthday){
            setBirthdayErr('date of birth is required')
        }
        return isReq;
    }

    const {user}=props

    const handleSubmit=(e)=>{
        e.preventDefault();
        const isReq = validate();
        if(isReq){
            let accessToken= localStorage.getItem('token')
            axios.put(`https://cataflix.herokuapp.com/users/${user}`,{
            Username:username,
            Password:password,
            Email:email,
            Birthday:birthday
        },{  headers: { Authorization: `Bearer ${accessToken}`}})
        .then(response=>{
            console.log(response.data);
            window.open(`/users/${user}`, '_self')
        })
        .catch(err=>console.log(err))
        }  
    }
    return(
        <Form>
            <Form.Group>
                <Form.Label>New Username:</Form.Label>
                <Form.Control type="text" value={username} onChange={e=>setUsername(e.target.value)} />
                {usernameErr && <p>{usernameErr}</p>}
            </Form.Group>
            <Form.Group>
                <Form.Label>New Password:</Form.Label>
                <Form.Control type="password" value={password} onChange={e=>setPassword(e.target.value)} />
                {passwordErr && <p>{passwordErr}</p>}
            </Form.Group>
            <Form.Group>
                <Form.Label>New Email:</Form.Label>
                <Form.Control type="email" value={email} onChange={e=>setEmail(e.target.value)} />
                {emailErr && <p>{emailErr}</p>}
            </Form.Group>
            <Form.Group>
                <Form.Label>New Birthday:</Form.Label>
                <Form.Control type="date" value={birthday} onChange={e=>setBirthday(e.target.value)} />
                {birthdayErr && <p>{birthdayErr}</p>}
            </Form.Group>
            <Button type='submit' onClick={handleSubmit} variant='secondary' >Submit</Button>
        </Form>
    )
}

EditView.propTypes = {
	user:PropTypes.string.isRequired
};

export default EditView;