import React from 'react';
import propTypes from 'prop-types';
import  {Navbar,Nav} from 'react-bootstrap';
import { HouseFill, PersonFill, BoxArrowRight } from 'react-bootstrap-icons';
import './nav-bar.scss';

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
        <Navbar bg="dark" variant="light" className="mb-5">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto nav">
                    {isAuth() && <Nav.Link href='/' className='home'>
                        <span>Home</span>
                        <HouseFill size={30}/>
                        </Nav.Link> }
                    {isAuth() && <Nav.Link href={`users/${user}`}>
                        <span>{user}</span>
                        <PersonFill size={30}/>
                        </Nav.Link>}
                    {!isAuth() && <Nav.Link href='/'>signin</Nav.Link> }
                    {!isAuth() && <Nav.Link href='/register'>signup</Nav.Link> }
                    {isAuth() && <Nav.Link onClick={()=>onLoggedOut()} >
                        <span>Logout</span>
                        <BoxArrowRight size={30}/>
                        </Nav.Link>}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )

}

NavBar.propTypes = {
	user:propTypes.string
};


export default NavBar