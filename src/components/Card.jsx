/* eslint-disable no-unused-vars */
import React from 'react'

export default function Card({icon: Icon, text}) {
    return (
    <div className="card p-3" style={{width: "18rem"}}>
        <div className="card-body text-center">
            <Icon className="text-primary text-black mb-3 text-bg-light fs-1 fa-bold w-25 h-50 p-2" style={{borderRadius:"10px"}} />
            <h5 className="card-text">{text}</h5>
        </div>
    </div>
    )
}
