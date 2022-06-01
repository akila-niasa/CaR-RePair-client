import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from 'react-hook-form';
import SideBar from '../SideBar/SideBar';
import CreditCard from '../../../Images/credit-card.png'
import PayPal from '../../../Images/paypal.png'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';


const OrderProcess = () => {
    const { id } = useParams();
    const[user]=useAuthState(auth)
    const [product, setProduct] = useState([]);
    const { register, handleSubmit,formState: { errors } } = useForm();
    
    const onSubmit = (data) => {
        const orderDetails = {
          status: "pending",
          productId: id,
          productName: product.serviceTitle,
          price:product.price,
          user:user.email,
          name:user.displayName,
          ...data,
        };
        axios
          .post(
            "http://localhost:5000/saveorder",
            orderDetails
          )
          .then(function (response) {
            if (response.data.insertedId) {
             
              toast.success("Order Placed Successfully!!");
            }
          })
          .catch(function (error) {
            toast.error(error.message + " cannot process the order");
          });
      };
    
  useEffect(() => {
    axios
      .get(`http://localhost:5000/service/${id}`)
      .then(function (response) {
        setProduct(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [id]);
    return (
        <section>
        <div className="container">
        <div className="row">
                <div className="col-md-2">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-10 mt-5">
                    <h4 className="brand-txt mt-5">Book Service</h4>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)} className="buyProcess-form row">
                            <input name='name' disabled defaultValue={user.displayName} {...register("name", { required: false })} placeholder="Enter Name"/>
                            {errors.serviceTitle && <p className="error">Title is required</p>}<br />

                            <input name='email' disabled defaultValue={user.email} {...register("email", { required: false })} placeholder="Enter E-mail"/>
                            {errors.serviceTitle && <p className="error">Title is required</p>}<br />

                            <input name='serviceTitle' disabled  defaultValue={product.serviceTitle}{...register("serviceTitle", { required: false })} placeholder="Enter Service Title"/>
                            {errors.serviceTitle && <p className="error">Title is required</p>}<br/>
                            <input type="submit" className="fw-bold text-white text-uppercase" />
                        </form> 
                    </div>
                    <div>
                        <p className="tex-danger pt-4">Pay with</p>
                        <div className="d-flex pb-4">
                            <div class="form-check d-flex  px-3">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />&nbsp;&nbsp;
                                <label class="form-check-label" for="flexRadioDefault1">
                                    <img className="img-fluid" style={{width:"30px", height:"30px"}} src={CreditCard} alt=""/>
                                </label>
                            </div>
                            <div class="form-check d-flex">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />&nbsp;&nbsp;
                                <label class="form-check-label" for="flexRadioDefault1">
                                <img className="img-fluid" style={{width:"30px", height:"30px"}} src={PayPal} alt=""/>
                                </label> &nbsp; &nbsp;
                            </div>
                            <p>Your Service Charge Will be ${product.price}</p>
                        </div>
                     <Toaster/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default OrderProcess;