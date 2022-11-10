import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Checkout = () => {
    const { _id, title } = useLoaderData();
    const { user } = useContext(AuthContext);


    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.patientName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const visitingPrice = form.visitingPrice.value;
        const problem = form.problem.value;

        const appointment = {
            service: _id,
            serviceName: title,
            customer: name,
            email,
            phone,
            visitingPrice,
            problem
        }

        fetch('https://b6a11-service-review-server-side-shahadot99999.vercel.app/appointments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Your Appointment is Successfully')
                    form.reset();
                }
            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <form onSubmit={handlePlaceOrder}>
                <h2 className="text-4xl">You are perferable Appointment treatement: {title}</h2>
                {/* <h4 className="text-3xl">Price: {price}</h4> */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="patientName" type="text" placeholder="Patient Name" className="input input-ghost w-full  input-bordered" />

                    <input name="phone" type="text" placeholder="Your Phone" className="input input-ghost w-full  input-bordered" required />

                    <input name="visitingPrice" type="text" placeholder="Visiting Price" className="input input-ghost w-full  input-bordered" required />

                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                </div>
                <textarea name="problem" className="textarea textarea-bordered h-24 w-full" placeholder="Your Problem" required></textarea>

                <input className='btn' type="submit" value="Place Your Order" />
            </form>
        </div>
    );
};

export default Checkout;