import React, { useContext, useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
// import { userContext } from '../App'
// import { ContextComponent } from './context/ContextComponent';
import { userContext } from './context/ContextComponent';
import axios from 'axios';

function TableComponent() {

    let [users, setUsers] = useState([]);
    let context = useContext(userContext);
    const navigate = useNavigate();

    let deleMethod = async (i) => {
        try {
            let res = await axios.delete(`${'https://64bb72015e0670a501d707c3.mockapi.io/users'}/${i}`);
            // setUsers(res.data);
            // if (res.status == 200)
                getData()
        } catch (error) {
            console.log(error)
        }
        // let cloneData = [...context.userData];
        // cloneData.splice(i, 1);
        // context.setUserData(cloneData);
    }

    let getData = async () => {
        try {
            let res = await axios.get(`${'https://64bb72015e0670a501d707c3.mockapi.io/users'}`);
            setUsers(res.data);
            // fetch(`${'https://64bb72015e0670a501d707c3.mockapi.io/users'}`).
            //     then(res => res.json()).
            //     then(data => setUsers(data))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, [])


    return <>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Address</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((res, i) => {
                        return <tr key={i}>
                            <td>{res.id}</td>
                            <td>{res.name}</td>
                            <td>{res.email}</td>
                            <td>{res.mobile}</td>
                            <td>{res.addrs}</td>
                            <td>
                                <Button variant="primary" onClick={() => { navigate(`/edit-user/${res.id}`) }}>Edit</Button>
                                &nbsp;
                                <Button variant="danger" onClick={() => deleMethod(res.id)}>Delete</Button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </Table>
    </>
}

export default TableComponent