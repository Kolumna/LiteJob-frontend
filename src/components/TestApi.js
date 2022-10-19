import { useEffect, useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import React from 'react'

const TestApi = () => {
    const [backendData, setBackendData] = useState([{}])

     useEffect(() => {
        fetch('/api').then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data)
            }
        )
    }, [])

    const [title, newTitle] = useState('Lite')
    return (
        <div className="p-8">

            <div>{title}</div>
            {(typeof backendData.oferta === 'undefined') ? (
                <CircularProgress />
            ) : (
                backendData.oferta.map((oferta, i) => (
                    <div key={i}>
                        <p>{oferta}</p><Button className=" ml-8" variant="contained" onClick={() => newTitle('Job')}>Zobacz</Button>
                    </div>
                ))
            )}
        </div>
  )
}

export default TestApi