import React, { useState } from 'react';

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

export default RegistrationView