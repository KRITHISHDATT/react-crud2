import React, { useState } from 'react'
export const userContext = React.createContext();

function ContextComponent({ children }) {

    let [userData, setUserData] = useState([
        {
            name: "keshav",
            email: "keshav@gmail.com",
            mobile: "1234567890",
            addrs: "123, lake area, madurai"
        },
        {
            name: "Neela",
            email: "neela@gmail.com",
            mobile: "1234567890",
            addrs: "123, lake area, madurai"
        }
    ]);

    return <>
        <userContext.Provider value={{ userData, setUserData }}>
            {children}
        </userContext.Provider>
    </>
}

export default ContextComponent