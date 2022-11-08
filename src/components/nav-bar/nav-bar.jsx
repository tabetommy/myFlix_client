import React from 'react';
import propTypes from 'prop-types';
import  {Navbar,Nav,NavItem} from 'react-bootstrap';
import { HouseFill, PersonFill, BoxArrowRight } from 'react-bootstrap-icons';
import {Link} from 'react-router-dom';
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
        <Navbar bg="dark" variant="dark" className="mb-5">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto nav">
                    {isAuth() && <NavItem>
                        <Link to='/myFlix_client' className='home'>
                        <span>Home</span>
                        <HouseFill size={30}/>
                        </Link></NavItem>}
                    {isAuth() && <NavItem><Link to={`/myFlix_client/users/${user}`}>
                        <span>{user}</span>
                        <PersonFill size={30}/>
                        </Link></NavItem>}
                    {!isAuth() && <NavItem><Link to='/myFlix_client'>signin</Link></NavItem> }
                    {!isAuth() && <NavItem><Link to='/myFlix_client/register'>signup</Link></NavItem> }
                    {isAuth() && <NavItem><Link onClick={()=>onLoggedOut()} >
                        <span>Logout</span>
                        <BoxArrowRight size={30}/>
                        </Link></NavItem>}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )

}

NavBar.propTypes = {
	user:propTypes.string
};


export default NavBar