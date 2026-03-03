import React from 'react'

export default function Image({url}) {
    return (
        <img
            src={url}
            alt="Hero"
            className="img-fluid rounded shadow-sm"
            style={{maxHeight:"520px",width:"300px"}}
        />
    )
}
