
import React from 'react';

import { Outlet } from 'react-router-dom';

import SideBar from '../SideBar/SideBar';


const DashBoard = () => {
 
    return (
        <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <SideBar></SideBar>
            </div>
            <div className="col-md-9 ">
             
           <Outlet></Outlet>
            </div>
          
          </div>
        </div>
      </section>
    );
};

export default DashBoard;