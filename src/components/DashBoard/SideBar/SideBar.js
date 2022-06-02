import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './SideBar.css'
import { FaFolderPlus,FaUserCircle,FaPlus,FaCartPlus,FaListUl,FaThLarge,FaCommentDots,FaHome,FaUserCog } from "react-icons/fa";
import useAdmin from '../../../hooks/useAdmin';

const SideBar = () => {
    const[user]=useAuthState(auth)
    const [adminData]=useAdmin(user)
    return (
        <section className="sidebar-section">
        <div className="container">
          <div className="sidebar">
            <div className="sidebar-brand">
              <h2>
                <span>
                  <FaFolderPlus />
                </span>
            
              </h2>
            </div>
            <div className="user-wrapper px-3 pb-4">
              <img
                className="img-fluid avatar rounded-circle w-25"
                src={user.photoURL}
                alt=""
              />
              <div className="px-3">
                <h6 className="text-white pt-2">{user.displayName}</h6>
              </div>
            </div>
            <div className="sidebar-menu">
              <ul>
              <li>
                  <Link to="/dashboard/profile">
                    <FaUserCircle
                    />
                    &nbsp;&nbsp;<span>Profile</span>
                  </Link>
                </li>
                {adminData && (
                  <>
                    <li>
                      <Link className="active" to="/dashboard/orderlist">
                        <FaListUl
                        />
                        &nbsp;&nbsp;<span>Order List</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/dashboard/addservices">
                        <FaPlus
                        />
                        &nbsp;&nbsp;<span>Add Service</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/dashboard/admin">
                        <FaUserCog
                        />
                        &nbsp;&nbsp;<span>Make Admin</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/dashboard/manageservice">
                        <FaThLarge
                        />
                        &nbsp;&nbsp;<span>Manage Service</span>
                      </Link>
                    </li>
                  </>
                )}
                {/* <li>
                  <Link to="/order/:id">
                    <FaCartPlus
                    />
                    &nbsp;&nbsp;<span>Order</span>
                  </Link>
                </li> */}
                {
                  (user&&!adminData) && <>
                    
                <li>
                  <Link to="/dashboard/customerorder">
                    <FaListUl
                    />
                    &nbsp;&nbsp;<span>Order List</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/review">
                    <FaCommentDots
                    />
                    &nbsp;&nbsp;<span>Review</span>
                  </Link>
                </li>
               
                  </>
                }
                 <li>
                  <Link to="/">
                    <FaHome
                    />
                    &nbsp;&nbsp;
                    <span>
                      Back Home<span className="fa fa-home"></span>
                    </span>
                  </Link>
                </li>
              
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
};

export default SideBar;