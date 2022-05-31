import React, { useContext } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {
   const [user]=useAuthState(auth)
   const logout = () => {
    signOut(auth);

  };
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#"><img src='https://i.ibb.co/8ND4ySN/images.png' alt="" className='w-25'/></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
           <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <Link class="nav-link ms-4" aria-current="page" to="/">Home</Link>
                </li>
                {/* <li class="nav-item">
                    <Link class="nav-link ms-4" to="/home">About us</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link ms-4" to="/home">Contact</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link ms-4" to="/home">Reviews</Link>
                </li> */}
                <li class="nav-item">
                    <Link class="nav-link ms-4" to="/dashboard">Dashboard</Link>
                </li>
                <li>
                {/* <Link to='/login' className='nav-link active login-text-color text-center'>
                                        Login
                                    </Link> */}
                    {user?.displayName ? (
                                    <h5 className='nav-link active text-center text-dark'>
                                        {user?.displayName && <img className = " avatar rounded-circle img-fluid width w-50 " src={user.photoURL} alt = ""/>}
                                    </h5>
                            ) : (
                                    <Link to='/login' className='nav-link active login-text-color text-center'>
                                        Login
                                    </Link>
                            )}
                    </li>
                    <li>
                   {
                       user && <button onClick={logout} className='nav-link active login-text-color text-center'>
                       LogOuT
                   </button>
                   }
                    </li>
           </ul>
         </div>
      </div>
    </nav>
    );
};

export default Navbar;