import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import AppointmentRow from './AppointmentRow';

const Appointment = () => {

    const { user } = useContext(AuthContext);
    const [appointments, setAppointment] = useState([])

    useEffect(() => {
        fetch(`https://b6a11-service-review-server-side-shahadot99999.vercel.app/appointments?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setAppointment(data))
    }, [user?.email])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel Appointment');
        if (proceed) {
            fetch(`https://b6a11-service-review-server-side-shahadot99999.vercel.app/appointments/${id}`,
                {
                    method: 'DELETE'

                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {

                        alert(' deleted successfully ');
                        const remaining = appointments.filter(odr => odr._id !== id);
                        setAppointment(remaining);
                    }

                })
        }

    }


    return (
        <div>
            <h2 className="text-2xl">Appointment {appointments.length} </h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Disease</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map(appointment => <AppointmentRow
                                key={appointment._id}
                                appointment={appointment}
                                handleDelete={handleDelete}
                            ></AppointmentRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Appointment;