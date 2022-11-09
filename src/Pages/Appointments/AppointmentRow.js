import React, { useEffect, useState } from 'react';

const AppointmentRow = ({ appointment }) => {

    const { customer, phone, problem, service } = appointment;
    const [appointmentService, setAppointment] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setAppointment(data));
    }, [service])
    return (
        <tr>
            <th>

            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {
                                appointmentService?.img &&
                                <img src={appointmentService.img} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>
                    <div>
                        <div className="text-2xl font-bold">{customer}</div>

                    </div>
                </div>
            </td>
            <td>
                <span className="text-1xl badge badge-ghost badge-sm">{phone}</span>
            </td>
            <td>
                <span className="text-1xl badge badge-ghost badge-sm">{problem}</span>
            </td>


        </tr>
    );
};

export default AppointmentRow;