import React, { useEffect, useState } from 'react';
import CustomerReviewsDetail from './CustomerReviewsDetail';

const CustomerReview = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    useEffect(()=>{
        fetch('https://safe-island-12577.herokuapp.com/userfeedback')
        .then(res => res.json())
        .then(data =>setFeedbacks(data))
    },[])

    return (
        <section className ="testimonial section-margin bg-light">
        <div className="container ">  
           <div className="mb-5">
                <div className="col-md-12 text-center">
                    <p className="fs-4">our testimonial</p>
                    <h2 className="brand-heading text-danger fw-bold">client reviews</h2>
                </div>
           </div>
            <div className="row">
               {
                   feedbacks.map(feedback =><CustomerReviewsDetail feedback={feedback}></CustomerReviewsDetail>)
               }
            </div>
        </div>
    </section>
    );
};

export default CustomerReview;