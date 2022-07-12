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
    
    
    const {user}=props

    const handleSubmit=(e)=>{
        e.preventDefault();
        let accessToken= localStorage.getItem('token')
        axios.put(`https://cataflix.herokuapp.com/users/${user}`,{
            Username:username,
            Password:password,
            Email:email,
            Birthday:birthday
        },{  headers: { Authorization: `Bearer ${accessToken}`}})
        .then(resp=>{
            console.log(resp.data)
            window.open(`/users/${user}`, '_self')
        })
        .catch(err=>console.log(err))
    }
    return(
        <Form>
            <Form.Group>
                <Form.Label>New Username:</Form.Label>
                <Form.Control type="text" value={username} onChange={e=>setUsername(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>New Password:</Form.Label>
                <Form.Control type="password" value={password} onChange={e=>setPassword(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>New Email:</Form.Label>
                <Form.Control type="email" value={email} onChange={e=>setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>New Birthday:</Form.Label>
                <Form.Control type="date" value={birthday} onChange={e=>setBirthday(e.target.value)} />
            </Form.Group>
            <Button type='submit' onClick={handleSubmit} variant='secondary' >Submit</Button>
        </Form>
    )
}

EditView.propTypes = {
	user:PropTypes.string.isRequired
};

export default EditView;