import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import useAdmin from '../../../../hooks/useAdmin';
import SideBar from '../../SideBar/SideBar';




const MyProfile = () => {  const[user]=useAuthState(auth)
    const[admin]=useAdmin(user)

    const [orders, setOrders] = useState([]);
    const [pending, setPending] = useState(0);
    const [confirmed, setConfirmed] = useState(0);
    const [canceled, setCanceled] = useState(0);
    const [shipped, setShipped] = useState(0);
    useEffect(() => {
      axios
        .get("http://localhost:5000/order")
        .then(function (response) {
          setOrders(response.data);
          for (let data of response.data) {
            if (data.status === "pending") {
              setPending((pending) => pending + 1);
            } else if (data.status === "confirmed") {
              setConfirmed((confirmed) => confirmed + 1);
            } else if (data.status === "canceled") {
              setCanceled((canceled) => canceled + 1);
            } else if (data.status === "shipped") {
              setShipped((shipped) => shipped + 1);
            }
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }, []);

    const [totalOrders, setTotalOrders] = useState([]);
    // let pending = 0;
    // let confirmed = 0;
    // let canceled = 0;
    // let shipped = 0;
    const [pendings, setPendings] = useState(0);
    const [confirm, setConfirm] = useState(0);
    const [cancel, setCancel] = useState(0);
    const [ship, setShip] = useState(0);
    useEffect(() => {
      axios
        .get(
          `http://localhost:5000/orders?email=${user.email}`
        )
        .then(function (response) {
          setTotalOrders(response.data);
          for (let data of response.data) {
            if (data.status === "pending") {
              setPendings((pending) => pending + 1);
            } else if (data.status === "confirmed") {
              setConfirm((confirmed) => confirmed + 1);
            } else if (data.status === "canceled") {
              setCancel((canceled) => canceled + 1);
            } else if (data.status === "shipped") {
              setShip((shipped) => shipped + 1);
            }
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }, [user.email]);
    return (
        <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <SideBar></SideBar>
            </div>
            <div className="col-md-9 ">
             
            {
             (user&&!admin)&&<>
              <div className="col-md-9 ">
              <p className="text-center mt-4 fs-3 fw-bold">My Profile</p>
              <div className="d-flex justify-content-center">
              <div class="card shadow p-3 mb-5 bg-body text-center" style={{width: "23rem"}}>
                <img src={user.photoURL} class="card-img-top w-50 rounded-circle" alt="..." />
                <div class="card-body">
                  <h5 class="card-title fw-bold">{user.displayName }</h5>
                  
                </div>
              </div>
              </div>
            </div>
            <div>
      <h1 className='mb-5'>
        My <span className='heading-text'>Orders</span>
      </h1>
      <div className='container'>
        <Row xs={1} md={2} className='g-4'>
          <Col>
            <Card className='dashboard-card-border'>
              <Card.Header className='dashboard-card-header'>
                Orders Placed
              </Card.Header>
              <Card.Body>
                <Card.Text className='fs-2 fw-bolder'>
                  {totalOrders.length}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='dashboard-card-border'>
              <Card.Header className='dashboard-card-header'>
                Pending Orders
              </Card.Header>
              <Card.Body>
                <Card.Text className='fs-2 fw-bolder'>{pendings}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='dashboard-card-border'>
              <Card.Header className='dashboard-card-header'>
                Confirmed Orders
              </Card.Header>
              <Card.Body>
                <Card.Text className='fs-2 fw-bolder'>{confirm}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='dashboard-card-border'>
              <Card.Header className='dashboard-card-header'>
                Cancelled Orders
              </Card.Header>
              <Card.Body>
                <Card.Text className='fs-2 fw-bolder'>{cancel}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='dashboard-card-border'>
              <Card.Header className='dashboard-card-header'>
                Shipped Orders
              </Card.Header>
              <Card.Body>
                <Card.Text className='fs-2 fw-bolder'>{ship}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
             </>
           }{
             admin && <>
             <div className="col-md-9 ">
             <h1 className='mb-5'>
        Welcome To <span className='heading-text'>Admin DashBoard</span>
      </h1>
      <div className='container'>
        <Row xs={1} md={2} className='g-4'>
          <Col>
            <Card className='dashboard-card-border'>
              <Card.Header className='dashboard-card-header'>
                Orders Placed
              </Card.Header>
              <Card.Body>
                <Card.Text className='fs-2 fw-bolder'>
                  {orders.length}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='dashboard-card-border'>
              <Card.Header className='dashboard-card-header'>
                Pending Orders
              </Card.Header>
              <Card.Body>
                <Card.Text className='fs-2 fw-bolder'>{pending}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='dashboard-card-border'>
              <Card.Header className='dashboard-card-header'>
                Confirmed Orders
              </Card.Header>
              <Card.Body>
                <Card.Text className='fs-2 fw-bolder'>{confirmed}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='dashboard-card-border'>
              <Card.Header className='dashboard-card-header'>
                Shipped Orders
              </Card.Header>
              <Card.Body>
                <Card.Text className='fs-2 fw-bolder'>{shipped}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='dashboard-card-border'>
              <Card.Header className='dashboard-card-header'>
                Cancelled Orders
              </Card.Header>
              <Card.Body>
                <Card.Text className='fs-2 fw-bolder'>{canceled}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
             </div>
             </>
           }
            </div>
          
          </div>
        </div>
      </section>
    );
};

export default MyProfile;