import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h1 className=' text-4xl text-center bg-blue-600'><b>Prof. Dr. KLA - Liver & Gastroenterology Specialist</b></h1>
            <About></About>
            <Services></Services>

        </div>
    );
};

export default Home;