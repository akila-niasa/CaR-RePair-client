import React from 'react';
import './Banner.css'
const Banner = () => {
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
      <main className='container'>
               <main className=" header-main row mt-5">
        <div className="col-md-5 offset-md-1 mt-5">
            <h1 className="">car repair services & <br /> auto machine</h1>
            <p className="text-dark py-3">If your engine is sick or tired we have the equipment to check,<br /> diagnose and efficiently fix any problem you may have.</p>
            <a href="#all-service"><button  style ={buttonStyle} className="brand-btn">get service</button></a>
        </div>
        <div className="col-md-6 mt-5">
            <img src='https://i.ibb.co/YLV8DXL/car-repair-24373281.jpg' alt="" className="img-fluid"/>
        </div>
    </main>
      </main>
    );
};

export default Banner;