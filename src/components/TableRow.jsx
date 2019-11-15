import React from 'react'

function TableRow(props) {
    const {
        id,
        company: {
            email,
            agent,
            name
        },
        status,
        type,
        actions
    } = props.data
    
    return (
        <tr>
            <td>{id}</td>
            <td>{email}</td>
            <td>{agent}</td>
            <td>{name}</td>
            <td>{status}</td>
            <td>{type}</td>
            <td>{actions}</td>
        </tr>
    )
}

export default TableRow