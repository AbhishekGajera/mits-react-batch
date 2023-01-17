import React from 'react'
import { Navigate } from 'react-router-dom'

const Protected = ({ children }) => {

    const auth = localStorage.getItem('auth') === 'Yes'

    if(!auth){
        return <Navigate to="/" />
    }

    return children
}

export default Protected