import React, { useContext } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
// import { userContext } from '../App'
// import { ContextComponent } from './context/ContextComponent';
import { userContext } from './context/ContextComponent';

function TableComponent() {

    let context = useContext(userContext);
    const navigate = useNavigate();

    let deleMethod = (i) => {
        let cloneData = [...context.userData];
        cloneData.splice(i, 1);
        context.setUserData(cloneData);
    }

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
                    context.userData.map((res, i) => {
                        return <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{res.name}</td>
                            <td>{res.email}</td>
                            <td>{res.mobile}</td>
                            <td>{res.addrs}</td>
                            <td>
                                <Button variant="primary" onClick={() => { navigate(`/edit-user/${i}`) }}>Edit</Button>
                                &nbsp;
                                <Button variant="danger" onClick={() => deleMethod(i)}>Delete</Button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </Table>
    </>
}

export default TableComponent