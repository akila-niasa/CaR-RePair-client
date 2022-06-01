import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './SideBar.css'
import { FaFolderPlus,FaUserCircle,FaCartPlus,FaListUl,FaCommentDots,FaHome } from "react-icons/fa";

const SideBar = () => {
    const[user]=useAuthState(auth)
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
                  <Link to="/dashboard">
                    <FaUserCircle
                    />
                    &nbsp;&nbsp;<span>Profile</span>
                  </Link>
                </li>
                {/* {adminData && (
                  <>
                    <li>
                      <Link className="active" to="/orderlist">
                        <FontAwesomeIcon
                          icon={faListUl}
                          className="fa fa-order-list"
                        />
                        &nbsp;&nbsp;<span>Order List</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/addservices">
                        <FontAwesomeIcon
                          icon={faPlus}
                          className="fa fa-add-service"
                          color="#d81324"
                        />
                        &nbsp;&nbsp;<span>Add Service</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/makeadmin">
                        <FontAwesomeIcon
                          icon={faUserCog}
                          className="fa fa-make-admin"
                          color="#d81324"
                        />
                        &nbsp;&nbsp;<span>Make Admin</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/manageservice">
                        <FontAwesomeIcon
                          icon={faThLarge}
                          className="fa fa-manage-service"
                          color="#d81324"
                        />
                        &nbsp;&nbsp;<span>Manage Service</span>
                      </Link>
                    </li>
                  </>
                )} */}
                {/* <li>
                  <Link to="/order/:id">
                    <FaCartPlus
                    />
                    &nbsp;&nbsp;<span>Order</span>
                  </Link>
                </li> */}
                <li>
                  <Link to="/customerorder">
                    <FaListUl
                    />
                    &nbsp;&nbsp;<span>Order List</span>
                  </Link>
                </li>
                <li>
                  <Link to="/review">
                    <FaCommentDots
                    />
                    &nbsp;&nbsp;<span>Review</span>
                  </Link>
                </li>
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