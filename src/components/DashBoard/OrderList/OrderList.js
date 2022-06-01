import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import SideBar from '../SideBar/SideBar';
import { MdDelete } from "react-icons/md";

const OrderList = () => {
    const[user]=useAuthState(auth)
    const [totalOrders, setTotalOrders] = useState([]);
    // let pending = 0;
    // let confirmed = 0;
    // let canceled = 0;
    // let shipped = 0;
    const [pending, setPending] = useState(0);
    const [confirmed, setConfirmed] = useState(0);
    const [canceled, setCanceled] = useState(0);
    const [shipped, setShipped] = useState(0);

    useEffect(() => {
        axios
          .get(
            `http://localhost:5000/orders?email=${user.email}`
          )
          .then(function (response) {
            setTotalOrders(response.data);
            // for (let data of response.data) {
            //   if (data.status === "pending") {
            //     setPending((pending) => pending + 1);
            //   } else if (data.status === "confirmed") {
            //     setConfirmed((confirmed) => confirmed + 1);
            //   } else if (data.status === "canceled") {
            //     setCanceled((canceled) => canceled + 1);
            //   } else if (data.status === "shipped") {
            //     setShipped((shipped) => shipped + 1);
            //   }
            // }
          })
          .catch(function (error) {
            console.log(error);
          });
      }, [user.email]);
      const orderDelete = id => {
        const processed = window.confirm("Do you want to delete the product?")
        if (processed) {
          fetch(`http://localhost:5000/deleteorder/${id}`, {
            method: "DELETE"
          })
            .then(res => res.json())
            .then(data => {
              console.log(data);
              if (data.deletedCount > 0) {
                const remainOrder = totalOrders.filter(order => order._id !== id)
                setTotalOrders(remainOrder)
              }
            })
        }
      }
    
    return (
        <div>
            <div className="container">
        <div className="row">
                <div className="col-md-2">
                    <SideBar></SideBar>
                </div>
      <div className='mb-3 my-5 mt-6 mx-5'>
        <h2 className='mb-2 text-xl'>
          My <span className='text-secondary'>Orders:{totalOrders.length}</span>
        </h2>
        <hr />
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full mb-3  mx-5">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Product</th>
            
              <th>Price</th>

              <th>Status</th>
              <th>Action</th>

            </tr>
          </thead>
          <tbody>
            {totalOrders.length > 0 ? (
              totalOrders.map((order, index) => (
                <tr key={order._id}>
                  <th>{index + 1}</th>
                  <td>{order?.productName}</td>
                
                  <td>{order?.price}</td>

                  <td>{(order?.price && !order?.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn-small btn-success'>pay</button></Link>}
                    {(order.price && order.paid) && <div>
                      <p><span className='text-green-500'>Paid</span></p>
                      <p>Transaction id: <span className='text-success'>{order.transactionId}</span></p>
                    </div>}
                  </td>

                  <td>
                    {(order?.price && !order?.paid) && <span
                      style={{ fontSize: "24px" }}
                      onClick={() => orderDelete(order._id)}
                    >
                      <MdDelete />
                    </span>}

                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan='4' className='text-center'>
                  No Orders Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      </div>
      </div>
    </div>
      
    );
};

export default OrderList;