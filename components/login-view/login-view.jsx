import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import './login-view.scss';
import { Link } from "react-router-dom";


function LoginView(props){
    const [username, setUsername] = useState('');
    const [password, setPassword] =useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(username, password);
        /* Send a request to the server for authentication */
        /* then call props.onLoggedIn(username) */
        props.onLoggedIn(username);
    }
    return(
        <Form>
            <Form.Group>
                <Form.Label>Username:</Form.Label>
                <Form.Control type="text" vaue={username} onChange={e=>setUsername(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" vaue={password} onChange={e=>setPassword(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type='submit' onClick={handleSubmit}>Submit</Button><br></br>
            <Link to={`/register`} >
                <Button  type='button' variant="danger" className='btn'>Register</Button>
            </Link> 
        </Form>
    );

}

LoginView.propTypes = {
    onLoggedIn: PropTypes.func.isRequired
  };

export default LoginView