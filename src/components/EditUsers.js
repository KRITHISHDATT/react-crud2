import React, { useEffect, useState, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ContextComponent from './context/ContextComponent';
import { userContext } from './context/ContextComponent';
import axios from 'axios';

function EditUsers({ userData, setUser }) {

    let context = useContext(userContext);
    let params = useParams();
    let [name, setName] = useState("");
    let [email, setEmail] = useState('');
    let [mobile, setMobile] = useState('');
    let [addrs, setAddress] = useState('');
    let nav = useNavigate();

    let editFunction = async () => {
        try {
            let res = await axios.put(`${'https://64bb72015e0670a501d707c3.mockapi.io/users'}/${params.id}`, { name, email, mobile, addrs });
            nav("/dashboard");
        } catch (error) {
            console.log(error)
        }
        // const cloneData = [...context.userData];
        // cloneData.splice(params.id, 1, { name, email, mobile, addrs });
        // context.setUserData(cloneData);
    }

    let getData = async () => {
        try {
            let res = await axios.get(`${'https://64bb72015e0670a501d707c3.mockapi.io/users'}/${params.id}`);
            if (res.data) {
                setName(res.data.name);
                setEmail(res.data.email);
                setMobile(res.data.mobile);
                setAddress(res.data.addrs);
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
        // if (params.id < context.userData.length) {
        //     setName(context.userData[params.id].name);
        //     setEmail(context.userData[params.id].email);
        //     setMobile(context.userData[params.id].mobile);
        //     setAddress(context.userData[params.id].addrs);
        // } else {
        //     alert('Invalid userId');
        //     nav("/dashboard");
        // }
    }, []);

    return <div className='container'>
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Edit User</h1>
        </div>
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter a Name" value={name} onChange={(res) => setName(res.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="Enter a Email" value={email} onChange={(res) => setEmail(res.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Mobile</Form.Label>
                <Form.Control type="text" placeholder="Enter a Mobile" value={mobile} onChange={(res) => setMobile(res.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Enter a Address" value={addrs} onChange={(res) => setAddress(res.target.value)} />
            </Form.Group>

            <Button variant="primary" onClick={() => editFunction()}>
                Upadate
            </Button>
        </Form>
    </div>
}

export default EditUsers