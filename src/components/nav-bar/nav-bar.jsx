import React from 'react';
import propTypes from 'prop-types';
import  {Navbar,Nav} from 'react-bootstrap';

const NavBar=(props)=>{
   const {user}= props
   const onLoggedOut=()=>{
        localStorage.clear();
        window.open('/','_self')
        }
   const isAuth=()=>{
    if (typeof window == 'undefined'){
        return false
    }
    if (localStorage.getItem('token')){
        return localStorage.getItem('token')
    }else{
        return false
    }
   }

    return(
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    {isAuth() && <Nav.Link href='/'>Home</Nav.Link> }
                    {isAuth() && <Nav.Link href={`users/${user}`}>{user}</Nav.Link>}
                    {!isAuth() && <Nav.Link href='/'>signin</Nav.Link> }
                    {!isAuth() && <Nav.Link href='/register'>signup</Nav.Link> }
                    {isAuth() && <Nav.Link onClick={()=>onLoggedOut()} >Logout</Nav.Link>}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )

}

NavBar.propTypes = {
	user:propTypes.string
};


export default NavBar