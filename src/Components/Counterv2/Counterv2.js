import React, { Component } from 'react'
// import './Counterv2.css'
function Counterv2(props){
    const {label, value, deleteCount, increment, decrement} = props
    return (
        <div className='Counterv2'>
            <p>
                {label}
                <button onClick={() => deleteCount()}>Delete</button>
            </p>
            <h1>{value}</h1>
            <button onClick={() => increment()}>+</button>
            <button onClick={() => decrement()}>-</button>
        </div>
    )
}

export default Counterv2