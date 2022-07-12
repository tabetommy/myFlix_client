import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import './login-view.scss';
import { Link } from "react-router-dom";


function LoginView(props){
    const [username, setUsername] = useState('');
    const [password, setPassword] =useState('');
    // Declare hook for each input
    const [ usernameErr, setUsernameErr ] = useState('');
    const [ passwordErr, setPasswordErr ] = useState('');

    // validate user inputs
    const validate = () => {
        let isReq = true;
        if(!username){
        setUsernameErr('Username Required');
        isReq = false;
        }else if(username.length < 2){
        setUsernameErr('Username must be 2 characters long');
        isReq = false;
        }
        if(!password){
        setPasswordErr('Password Required');
        isReq = false;
        }else if(password.length < 6){
        setPassword('Password must be 6 characters long');
        isReq = false;
        }

        return isReq;
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        const isReq = validate();
        if(isReq) {
          /* Send request to the server for authentication */
          axios.post('https://cataflix.herokuapp.com/login', {
              Username: username,
              Password: password
          })
          .then(response =>{
              const data = response.data;
              props.onLoggedIn(data);
          })
          .catch(e => {
            console.log('no such user')
          });
        }
    }

    return(
        <Form>
            <Form.Group>
                <Form.Label>Username:</Form.Label>
                <Form.Control type="text" vaue={username} onChange={e=>setUsername(e.target.value)} />
                {/* code added here to display validation error */}
                {usernameErr && <p>{usernameErr}</p>}
            </Form.Group>
            <Form.Group>
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" vaue={password} onChange={e=>setPassword(e.target.value)} />
                 {/* code added here to display validation error */}
                {passwordErr && <p>{passwordErr}</p>}
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