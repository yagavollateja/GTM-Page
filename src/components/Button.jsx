import React from 'react'

export default function Button({value,color}) {
    return (
        <button className={`btn btn-${color} active py-2 px-3`}>{value}</button>
    )
}
