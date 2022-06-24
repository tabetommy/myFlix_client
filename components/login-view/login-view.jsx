import React, { useState } from 'react';
import PropTypes from 'prop-types'

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
        <form>
            <label>
                Username:
                <input type="text" vaue={username} onChange={e=>setUsername(e.target.value)} />
            </label><br></br>
            <label>
                Password:
                <input type="password" value={password} onChange={e=>setPassword(e.target.value)} />
            </label><br></br>
            <button type='submit' onClick={handleSubmit} >Submit</button><br></br>
            <button type='button'>Click here to register</button>
        </form>
    );

}

LoginView.propTypes = {
    onLoggedIn: PropTypes.func.isRequired
  };

export default LoginView