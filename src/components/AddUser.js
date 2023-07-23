import React, { useState, useContext } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
// import { userContext } from '../App'
import { userContext } from './context/ContextComponent';
import axios from 'axios';

function AddUser() {

    let context = useContext(userContext);
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [mobile, setMobile] = useState("");
    let [addrs, setAddress] = useState("");
    let nav = useNavigate();

    let saveFunction = async () => {
        try {
            let res = axios.post(`${'https://64bb72015e0670a501d707c3.mockapi.io/users'}`, {
                name,
                email,
                mobile,
                addrs,
            });
            // if (res.status == 201)
                nav("/dashboard");
        } catch (error) {
            console.log(error)
        }
        // const cloneData = [...context.userData];
        // cloneData.push({
        //     name,
        //     email,
        //     mobile,
        //     addrs,
        // })
        // context.setUserData(cloneData);
    }

    return <div className='container'>
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Create User</h1>
        </div>
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter a Name" onChange={(res) => setName(res.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="Enter a Email" onChange={(res) => setEmail(res.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Mobile</Form.Label>
                <Form.Control type="text" placeholder="Enter a Mobile" onChange={(res) => setMobile(res.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Enter a Address" onChange={(res) => setAddress(res.target.value)} />
            </Form.Group>

            <Button variant="primary" onClick={() => saveFunction()}>
                Submit
            </Button>
        </Form>
    </div>
}

export default AddUser