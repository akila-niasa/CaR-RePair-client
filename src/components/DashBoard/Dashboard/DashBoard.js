import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SideBar from '../SideBar/SideBar';
import './DashBoard.css'

const DashBoard = () => {
    const[user]=useAuthState(auth)
    return (
        <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <SideBar></SideBar>
            </div>
            <div className="col-md-9 ">
              <p className="text-center mt-4 fs-3 fw-bold">My Profile</p>
              <div className="d-flex justify-content-center">
              <div class="card shadow p-3 mb-5 bg-body text-center" style={{width: "23rem"}}>
                <img src={user.photoURL} class="card-img-top img-fluid rounded-circle" alt="..." />
                <div class="card-body">
                  <h5 class="card-title fw-bold">{user.displayName }</h5>
                  
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default DashBoard;