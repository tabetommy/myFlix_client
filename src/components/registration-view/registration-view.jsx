import { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

function RegistrationView(props){
    const [username, setUsername] = useState('');
    const [password, setPassword] =useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');

    // Declare hook for each input
    const [ usernameErr, setUsernameErr ] = useState('');
    const [ passwordErr, setPasswordErr ] = useState('');
    const [ emailErr, setEmailErr] = useState('');
    const [birthdayErr, setBirthdayErr] = useState('');

    const history = useHistory();

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


    const handleRegistration=(e)=>{
        e.preventDefault();
        const isReq = validate();
        if(isReq){
            axios.post('http://localhost:8080/users',{
            Username: username,
            Password: password,
            Email: email,
            Birthday: birthday
          })
          .then(resp=>{
            const data=resp.data
            history.push('/myFlix_client');
            // window.open('/myFlix_client', '_self'); 
          })
          .catch(e=>console.log("Encountered error during registration"))
        }
    }

    const handleDemoRegistration=(e)=>{
               if(true) {
              /* Send request to the server for authentication */
              axios.post('http://localhost:8080/login', {
                  Username: 'User1',
                  Password: 'DemoUser19190!'
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
                {usernameErr && <p>{usernameErr}</p>}
            </Form.Group>
            <Form.Group>
                <Form.Label>Passwort:</Form.Label>
                <Form.Control type="password" vaue={password} onChange={e=>setPassword(e.target.value)} />
                {passwordErr && <p>{passwordErr}</p>}
            </Form.Group>
            <Form.Group>
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" vaue={email} onChange={e=>setEmail(e.target.value)} />
                {emailErr && <p>{emailErr}</p>}
            </Form.Group>
            <Form.Group>
                <Form.Label>Geburtsdatum:</Form.Label>
                <Form.Control type="date" vaue={birthday} onChange={e=>setBirthday(e.target.value)} />
                {birthdayErr && <p>{birthdayErr}</p>}
            </Form.Group>
            <Button type='submit' onClick={handleRegistration} variant="success" >Registieren</Button>
            {/* <span style={{ margin: '0 3px' }}></span>
            <Button variant="success"  onClick={handleDemoRegistration} className="ms-2" >Als Demo Anmelden</Button> */}
        </Form>
    );

}

export default RegistrationView