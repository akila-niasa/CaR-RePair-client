import React, { useEffect, useState } from 'react';
import CustomerReviewsDetail from './CustomerReviewsDetail';

const CustomerReview = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/userfeedback')
        .then(res => res.json())
        .then(data =>setFeedbacks(data))
    },[])

    return (
        <section className ="testimonial section-margin bg-light">
        <div className="container ">  
           <div className="mb-5">
                <div className="col-md-12 text-center">
                    <p className="brand-txt text-capitalize">our testimonial</p>
                    <h4 className="brand-heading text-capitalize">client reviews</h4>
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