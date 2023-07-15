import React from 'react'
import Cards from './Cards'
import TableComponent from './TableComponent'
function DashBoard() {
    const data = [
        {
            title: "Earnings (Monthly)",
            amount: "$40,000",
            color: "primary",
            icon: "fa-calendar",
            isProgress: false
        },
        {
            title: "Earnings (Annual)",
            amount: "$215,000",
            color: "success",
            icon: "fa-dollar-sign",
            isProgress: false
        },
        {
            title: "Tasks",
            amount: "50%",
            color: "info",
            icon: "fa-clipboard-list",
            isProgress: true
        },
        {
            title: "Pending Requests",
            amount: "18",
            color: "warning",
            icon: "fa-comments",
            isProgress: false
        },
    ]
    return <>
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                <a href="javascript(void)" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
            </div>
            <div className="row">
                {
                    data.map((res) => {
                        return <Cards data={res} />
                    })
                }
            </div>
        </div>

        <div className="container-fluid">
            <TableComponent />
        </div>
    </>
}

export default DashBoard