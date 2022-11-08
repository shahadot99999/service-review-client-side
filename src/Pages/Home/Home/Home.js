import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h1 className=' text-4xl text-center'><b>Prof. Dr. Mahbub H Khan - Liver & Gastroenterology Specialist</b></h1>
            <About></About>
        </div>
    );
};

export default Home;