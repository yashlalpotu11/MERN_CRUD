import React from 'react'
import { Link } from 'react-router-dom'
import './Student.css'
import Avatar from 'react-avatar'
 

const Student = ({_id, name, email, enrollNumber}) => {
    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>{enrollNumber}</td>
            </tr>
        </>
    )
}
export default Student;
