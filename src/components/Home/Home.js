import React from 'react';
import Banner from '../Banner/Banner';
import CustomerCounter from '../CustomerCounter/CustomerCounter';
import CustomerForm from '../CustomerForm/CustomerForm';
import Footer from '../Shared/Footer/Footer';


const Home = () => {
    return (
        <div>
            <Banner/>
            <CustomerCounter/>
            <CustomerForm/>
            <Footer/>
        </div>
    );
};

export default Home;