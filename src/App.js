import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import SideNav from "./components/SideNav";
import AddUser from "./components/AddUser";
import { useState } from "react";
import EditUsers from "./components/EditUsers";
import Account from "./components/Details/Account";
import BillComponent from "./components/Details/BillComponent";
import PaymentComponent from "./components/Details/PaymentComponent";
import ProfileComponent from "./components/Details/ProfileComponent";
// import Details from "./components/Details/Details";
import React from 'react'
import ContextComponent from "./components/context/ContextComponent";

function App() {

  return <>
    <BrowserRouter>
      <div id="wrapper">
        <SideNav />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            {/* <userContext.Provider value={{ userData, setUserData }}> */}
            <Routes>
              <Route path="/dashboard" element={<ContextComponent><DashBoard /></ContextComponent>} />
              <Route path="/add-user" element={<ContextComponent><AddUser /></ContextComponent>} />
              <Route path='/edit-user/:id' element={<ContextComponent><EditUsers /></ContextComponent>} />
              {/* <Route path='/details' element={<Detail />}>
                  <Route path="accounts" element={<Account />} />
                  <Route path="bill" element={<BillComponent />} />
                  <Route path="payments" element={<PaymentComponent />} />
                  <Route path="profile" element={<ProfileComponent />} />
                </Route> */}
              <Route path='*' element={<Navigate to={"/dashboard"} />} />
            </Routes>
            {/* </userContext.Provider> */}
          </div>
        </div>
      </div>
    </BrowserRouter>
  </>
}

export default App;
