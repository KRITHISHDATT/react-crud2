import React, { useState } from 'react'
import Detail from './Detail.css'
import { Outlet, useNavigate } from 'react-router-dom'

function details() {

    let [currentPage, setCurrentPage] = useState(1);
    let nav = useNavigate();

    return <>
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Details</h1>
        </div>
        <div className='section-navigator'>
            <ul>
                <li className={currentPage === 1 ? 'activePage' : ''} onClick={() => { setCurrentPage(1); nav('accounts') }}>Accounts</li>
                <li className={currentPage === 2 ? 'activePage' : ''} onClick={() => { setCurrentPage(2); nav('bill') }}>Bill</li>
                <li className={currentPage === 3 ? 'activePage' : ''} onClick={() => { setCurrentPage(3); nav('payments') }}>Payments</li>
                <li className={currentPage === 4 ? 'activePage' : ''} onClick={() => { setCurrentPage(4); nav('profile') }}>Profile</li>
            </ul>
        </div>
        <div className='section'>
            <Outlet />
        </div>
    </>
}

export default details