import React from 'react'

export default function Link({name,dest}) {
    dest='#'+dest
    return (
        <a href={dest} className="text-decoration-none text-secondary"> {name}</a>
    )
}
