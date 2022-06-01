import React from 'react';
import { Link } from 'react-router-dom';

const ProductDetails = ({service}) => {
    const {serviceTitle, imageUpload, price, textArea,_id} = service;
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
        <div className="col-md-4">
            <div className="card shadow-sm p-2 mb-4 bg-body rounded" style={{ width: "22rem" }}>
              <img src={service.imageUpload} className="card-img-top img-fluid" alt="..." />
              <div className="card-body">
                <h3 className="card-title text-capitalize">{service.serviceTitle}</h3>
                <h4 className="card-title text-danger">${service.price}</h4>
                <p className="card-text">{service.textArea}</p>
                <Link to={`/order/${_id}`}><button style={buttonStyle} className="brand-btn">Order Service</button></Link>
              </div>
            </div>
       </div>
    );
};

export default ProductDetails;