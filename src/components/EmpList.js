import axios from "axios";
import { useEffect, useState } from "react";

const EmpList = () => {

    const [empData, setEmpData] = useState('');

    // useEffect(() => {
    //     console.log('asdf');
    // }, []);

    useEffect(() => {
        console.log('usEffect');
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((resp) => {
                console.log(resp)
                setEmpData(resp.data)
            })
    }, []);

    return (
        <>
            <div>
                <h1>Employee List</h1>
                <table border={1}>
                <thead>
                    <th>Name</th> <th>Username</th> <th>company</th>
                </thead>
                <tbody>
                {empData && empData.map(emp => (
                        <tr key={emp.id}>
                            <th>{emp.name}</th>
                            <th>{emp.username}</th>
                            <th>{emp.company.name}</th>
                        </tr>
                    ))}
                </tbody>
                    
                </table>
            </div>
        </>
    );
}

export default EmpList;