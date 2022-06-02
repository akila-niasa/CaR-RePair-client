import React from 'react';
import AllProducts from '../AllProducts/AllProducts';
import Banner from '../Banner/Banner';
import CustomerCounter from '../CustomerCounter/CustomerCounter';
import CustomerForm from '../CustomerForm/CustomerForm';
import CustomerReview from '../CustomerReview/CustomerReview';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';


const Home = () => {
    return (
        <div>
             <Navbar/>
            <Banner/>
            <CustomerCounter/>
            <AllProducts/>
            <CustomerReview/>
            <CustomerForm/>
            <Footer/>
        </div>
    );
};

export default Home;