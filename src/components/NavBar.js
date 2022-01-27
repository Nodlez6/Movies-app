import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom'
import logo from '../logo/logo.svg';

export const NavBar = () => {
  return (
    <div>
        <nav 
            className="navbar navBar"
        >
            <div className="container">
                <div className='row'>
                    <div className='col-4 d-flex'>
                        <img width="50px" src={logo} className="App-logo" alt="logo" />
                        <p className='texto-logo'>MovieApp</p>
                    </div>
                   

                    <div className='col-8'>
                        <div className='links-navbar'>
                            <NavLink 
                                    className={ ({isActive}) =>'nav-item nav-link first-link ' + (isActive && 'active')} 
                                    to="/toprated"
                                >
                                    Top Rated
                            </NavLink>
                            <NavLink 
                                    className={ ({isActive}) =>'nav-item nav-link ' + (isActive && 'active')} 
                                    to="/popular"
                                >
                                    Popular
                            </NavLink>
                            <NavLink 
                                    className={ ({isActive}) =>'nav-item nav-link ' + (isActive && 'active')} 
                                    to="/upcoming"
                                >
                                    Upcoming
                            </NavLink>
                            
                        </div>
                    </div>
                   
                   
                   
                </div>

                 
            </div>
        </nav>
    </div>
  );
};
