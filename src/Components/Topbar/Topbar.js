import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import { LogoutButton } from "../Logout/Logout";
import './Topbar.css'
import Pidebar from '../Sidebar/Pidebar';

const Topbar = () => {
    const { user } = useAuth0();

  return (
    <div className='topbar'>
        <Pidebar/>
        <LogoutButton/>
        <span className='saludo'>Welcome, {user.name}</span>
        <img src={user.picture} alt={user.name}/>
    </div>
  );
};
export default Topbar;