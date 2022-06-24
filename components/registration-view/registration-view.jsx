import React, { useState } from 'react';

function RegistrationView(props){
    const [username, setUsername] = useState('');
    const [password, setPassword] =useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');


    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(username, password);
        /* Send a request to the server for authentication */
        /* then call props.onLoggedIn(username) */
        props.OnLoggedIn(username);
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
            <label>
                Email:
                <input type="email" value={email} onChange={e=>setEmail(e.target.value)} />
            </label><br></br>
            <label>
                Birthday:
                <input type="date" value={birthday} onChange={e=>setBirthday(e.target.value)} />
            </label><br></br>
            <button type='submit' onClick={handleSubmit} >Submit</button>
        </form>
    );

}

// LoginView.propTypes = {
//     onLoggedIn: PropTypes.func.isRequired
//   };

export default RegistrationView