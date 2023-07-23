import React, { useEffect, useReducer, useRef, useState } from 'react'
import { Button } from 'react-bootstrap';


let initialValue = {
    count: 0,
    name: ''
}
function reducer(state, payload) {
    switch (payload.action) {
        case 'INC':
            return { ...state, count: state.count + 1 }
        case 'changeName':
            return { ...state, name: payload.name }

        default:
            return { ...state, count: state.count - 1 }
    }
}

function Hooks() {
    const [name, setName] = useState('');
    const [count, setCount] = useState(0);
    const countRef = useRef(0)
    const inputRef1 = useRef()
    const inputRef2 = useRef()
    const inputRef3 = useRef()
    const inputRef4 = useRef()

    const [state, dispatch] = useReducer(reducer, initialValue);
    useEffect(() => {
        countRef.current++
    })

    const submit = () => {
        alert('' + inputRef1.current.value + inputRef2.current.value + inputRef3.current.value + inputRef4.current.value)
    }
    return <>
        <h2>UseRef Hook</h2><br />
        <input type='text' placeholder='Name' onChange={
            (res) => {
                setName(res.target.value)
                setCount(prev => prev + 1)
            }} />
        <p>No of counts components rendered {countRef.current}</p><br />

        <h2>Enter The OTP</h2>
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <input type='number' ref={inputRef1} onChange={(e) => inputRef2.current.focus()} />
            <input type='number' ref={inputRef2} onChange={(e) => inputRef3.current.focus()} />
            <input type='number' ref={inputRef3} onChange={(e) => inputRef4.current.focus()} />
            <input type='number' ref={inputRef4} onChange={submit} />
        </div><br />

        <h2>UseReducer Hook</h2><br />
        <div>
            <Button onClick={() => { dispatch({ action: '' }) }}>-</Button>
            &nbsp;
            {state.count}
            &nbsp;
            <Button onClick={() => { dispatch({ action: 'INC' }) }}>+</Button>
        </div>
        <div>
            <input type='text' placeholder='Name' onChange={(e) => dispatch({
                action: 'changeName',
                name: e.target.value
            })} />
        </div>
        <div>
            {state.name}
        </div>
    </>
}

export default Hooks