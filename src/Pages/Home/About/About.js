import React from 'react';
import person from '../../../assets/about_us/doctor.jpg'

const About = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='relative w-1/2'>
                    <img src={person} alt="" className="w-4/5 h-full rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2'>
                    <p className="  text-2xl font-bold text-orange-600">Introduce</p>

                    <p className="py-6">KLA obtained MBBS Degree from the University of Dhaka in 1978. He secured 1st position in the third professional examination among the students of Dhaka, Sir Salimullah, Mymensing and Sher-E-Bangla Medical colleges of the Dhaka University. He was awarded Leo Gold Medal for his achievement. </p>
                    <p className="py-6">After his internship, from 1980-83 he received FCPS training in medicine and Gastroenterology from the then PG (BSMMU) hospital. During this time he worked under supervision of two eminent Professors, Prof A K Azad Khan and Prof M N Alam. </p>

                    <p className="py-6">Afterward he moved to Vienna in 1984 and obtained his Diploma and fellowship in Gastroenterology and Hepatology from the University of Vienna under supervision of Professor Xavier Psendorfer of Vienna university hospital at Lainz, Vienna. </p>
                    <button className="btn btn-primary">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default About;