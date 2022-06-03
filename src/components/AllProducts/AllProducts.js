import React, { useEffect, useState } from 'react';
import ProductDetails from './ProductDetails';

const AllProducts = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('https://safe-island-12577.herokuapp.com/service')
        .then(res => res.json())
        .then(data =>setServices(data))
    },[])
    return (
        <section id="all-service">
        <div className="container">  
           <div className="mb-5">
                <div className="col-md-12 text-center">
                    <p className="fw-bold">our offer</p>
                    <h4 className="fw-bold ">Quality service</h4>
                </div>
           </div>
            <div className="row">
               {
                    services.map(service =><ProductDetails key={service._id} service={service}></ProductDetails>)
               }
            </div>
        </div>
    </section>
    );
};

export default AllProducts;