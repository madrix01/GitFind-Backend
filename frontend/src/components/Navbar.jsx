import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../Pages/Login';
import './../styles/navbar.css';
import { UserConsumer } from './userContext';



export default function Navbar(props){
  let contextType = UserConsumer;
  console.log("TEST",contextType);
  

    return <UserConsumer>

        {(props)=>{
          console.log("NAV",props)
          return <nav className="navbar">
            <div className="navbar-toggle" id="js-navbar-toggle" for="chkToggle">
                    <i className="fa fa-bars"></i>
                </div>
            <a href="#" className="logo">GitFind</a>
            <input type="checkbox" id="chkToggle" />
            <ul className="main-nav" id="js-menu">
              <li>
                <Link className="nav-links" to="/">Home</Link>
                
              </li>
              <li>
                <Link className="nav-links" to="/blogs">Blogs</Link>
              </li>
              <li>
                <Link className="nav-links" to="/add">Add</Link>
              </li>
              <li>
                <Link className="nav-links" to="/profile/pushpendrahpx">Profile</Link>
              </li>
              <li>
                <Login  loggedUser={props.loggedUser} handleUser={props.handleUser}   />
              </li>
            </ul>
          </nav>
        }}


    </UserConsumer>
    
    
    
    
    
}