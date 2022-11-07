import React, { useState} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import moment from 'moment';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



const EditView=(props)=>{
    
    // Declare hook for each input
    const [ usernameErr, setUsernameErr ] = useState('');
    const [ passwordErr, setPasswordErr ] = useState('');
    const [ emailErr, setEmailErr] = useState('');
    const [birthdayErr, setBirthdayErr]= useState('');
   

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
        if(!props.birthday){
            setBirthdayErr('date of birth is required')
        }
        return isReq;
    }

   //submit updated user data
    const handleSubmit=(e)=>{
        e.preventDefault();
        const isReq = validate();
        if(isReq){
            let accessToken= localStorage.getItem('token')
            axios.put(`https://cataflix.herokuapp.com/users/${props.user}`,{
            Username:props.username,
            Password:props.password,
            Email:props.email,
            Birthday:props.birthday,
        },{  headers: { Authorization: `Bearer ${accessToken}`}})
        .then(response=>{
            localStorage.setItem('user', response.data.Username);
            const user= localStorage.getItem('user');
            window.open(`/users/${user}`, '_self');  
            console.log(response.data);
                 
        })
        .catch(err=>console.log(err))
        }  
    }
    return(
        <Form className='mb-3'>
           { props.username && <><Form.Group>
                <Form.Label>Username:</Form.Label>
                <Form.Control type="text" value={props.username} onChange={event => props.setUsername(event.target.value)} />
                {usernameErr && <p>{usernameErr}</p>}
            </Form.Group><Form.Group>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" value={props.password} onChange={event => props.setPassword(event.target.value)} />
                    {passwordErr && <p>{passwordErr}</p>}
                </Form.Group><Form.Group>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" value={props.email} onChange={event => props.setEmail(event.target.value)} />
                    {emailErr && <p>{emailErr}</p>}
                </Form.Group>
                <Form.Group>
                    <Form.Label>Date of birth:</Form.Label>
                    <Form.Control type="date" value={moment(props.birthday).format("YYYY-MM-DD")} onChange={event => props.setBirthday(event.target.value)} />
                    {birthdayErr && <p>{birthdayErr}</p>}
                </Form.Group>
                <Button type='submit' onClick={handleSubmit} variant='success'>Update</Button>
                </>}
        </Form>
    )
}

EditView.propTypes = {
	user:PropTypes.string.isRequired
};

export default EditView;