import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import AppointmentRow from './AppointmentRow';

const Appointment = () => {

    const { user } = useContext(AuthContext);
    const [appointments, setAppointment] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/appointments?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setAppointment(data))
    }, [user?.email])

    return (
        <div>
            <h2 className="text-5xl">You have {appointments.length} Orders</h2>
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

                            ></AppointmentRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Appointment;