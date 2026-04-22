import React, { useState} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import moment from 'moment';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';



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
            axios.put(`https://movieapi-production-2da7.up.railway.app/users/${props.user}`,{
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
        <Container className="py-4">
            <Row className="justify-content-center">
                <Col md={8} lg={6}>
                    <Card className="border-0 shadow-sm rounded-4">
                        <Card.Body className="p-4 p-md-5">
                            <div className="mb-4">
                                <h2 className="h4 fw-bold">Profile Settings</h2>
                                <p className="text-muted small">Update your personal information and contact details.</p>
                            </div>

                            <Form onSubmit={handleSubmit}>
                                {props.username && (
                                    <>
                                        {/* Username Field */}
                                        <Form.Group className="mb-4">
                                            <Form.Label className="fw-semibold small">Username</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={props.username}
                                                onChange={(e) => props.setUsername(e.target.value)}
                                                isInvalid={!!usernameErr}
                                                className="rounded-3 py-2"
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {usernameErr}
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        {/* Email Field */}
                                        <Form.Group className="mb-4">
                                            <Form.Label className="fw-semibold small">Email Address</Form.Label>
                                            <Form.Control
                                                type="email"
                                                value={props.email}
                                                onChange={(e) => props.setEmail(e.target.value)}
                                                isInvalid={!!emailErr}
                                                className="rounded-3 py-2"
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {emailErr}
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        {/* Birthday Field */}
                                        <Form.Group className="mb-4">
                                            <Form.Label className="fw-semibold small">Date of Birth</Form.Label>
                                            <Form.Control
                                                type="date"
                                                value={moment(props.birthday).format("YYYY-MM-DD")}
                                                onChange={(e) => props.setBirthday(e.target.value)}
                                                isInvalid={!!birthdayErr}
                                                className="rounded-3 py-2"
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {birthdayErr}
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <div className="d-grid mt-5">
                                            <Button
                                                type="submit"
                                                variant="primary"
                                                size="lg"
                                                className="rounded-pill fw-bold shadow-sm"
                                            >
                                                Aktualisieren
                                            </Button>
                                        </div>
                                    </>
                                )}
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

EditView.propTypes = {
	user:PropTypes.string.isRequired
};

export default EditView;