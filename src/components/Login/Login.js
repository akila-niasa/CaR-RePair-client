import React, { useEffect } from 'react';
import './login.css'
import { FaGooglePlusG} from 'react-icons/fa';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import useTooken from '../../hooks/useToken';
const Login = () => {
    const navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";
   
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);

    const [token] = useTooken( guser)

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });


        }
    }, [token, from, navigate])
    
    if (gloading) {
        return <Loading />
    }
     
    const buttonStyle = {
        color: 'white',
        backgroundColor: '#0b2154',
        borderRadius: 25,
        border: 'none',
        margin: '25px 6px',
        padding: '10px',
        fontSize: '15px',
        cursor: 'pointer',
        width: '30%',
       
      }
    return (
        <div className = "loginBoxOuter">
        <div className = "loginBoxInner shadow">
          <h4 className = "text-capitalize brand-txt text-center pt-5">Login with</h4>
          <div className="google-btn text-center">
        <button style ={buttonStyle} onClick = {() => signInWithGoogle()}><FaGooglePlusG  color="#eb4d4b"/>&nbsp;&nbsp;Sign In</button>
    </div>
        </div>
      </div>
    );
};

export default Login;