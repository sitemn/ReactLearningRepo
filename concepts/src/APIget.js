import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function APIget() {
    const url = 'http://localhost:3001/employees';

    const [employees, setEmployees] = useState([]);

    const fetchData = async () => {
        const response = await axios.get(url);
        setEmployees(response.data);
    };

    const deleteEmployee = async (id) => {

            await axios.delete(`${url}/${id}`);
            setEmployees(employees.filter(employee => employee.id !== id));
       
    };

    useEffect(() => { fetchData(); }, []);

    return (
        <div>
            <h1>APIget</h1>
            {employees && employees.map(e => (
                <div key={e.id}>
                    {e.id} - {e.email}
                    <button onClick={() => deleteEmployee(e.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}
