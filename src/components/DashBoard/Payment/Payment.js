import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
  } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js'
import CheckoutFrom from '../CheckoutFrom/CheckoutFrom';

// pk_test_51L0seeLYqjpqRkhInLZ33wqAd1acWKpO6AqpypY5zM1hoAdBbvjNOSuEtabKYcRTx4vLHENlFwmKzrlDt2Obcso100tztuqwdr

const stripePromise = loadStripe('pk_test_51L0seeLYqjpqRkhInLZ33wqAd1acWKpO6AqpypY5zM1hoAdBbvjNOSuEtabKYcRTx4vLHENlFwmKzrlDt2Obcso100tztuqwdr');
const Payment = () => {
    const { id } = useParams()
    const { data: order, isLoading } = useQuery(['order', id], () => fetch(`https://safe-island-12577.herokuapp.com/order/${id}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }

    })
        .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="card w-50 ">
                <div className="card-body">
                    <p className="text-secondary font-bold">Hello,{order.user
                    } </p>
                    <h2 className="card-title">Please Pay for {order.productName}</h2>
                    
                    <p>Your Product Price: <span className='text-secondary'>{order.price
                    }</span> </p>
                    <p>Please pay: ${order.price}</p>
                </div>
            </div>
            <div className="card w-50">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutFrom order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;