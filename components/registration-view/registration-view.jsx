import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function RegistrationView(){
    const [username, setUsername] = useState('');
    const [password, setPassword] =useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');


    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(username, password, email, birthday);
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
            <Form.Group>
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" vaue={email} onChange={e=>setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Birthday:</Form.Label>
                <Form.Control type="email" vaue={birthday} onChange={e=>setBirthday(e.target.value)} />
            </Form.Group>
            <Button type='submit' onClick={handleSubmit} >Submit</Button>
        </Form>
    );

}

export default RegistrationView