import { useEffect, useState } from "react";
import { Button } from "@mui/material";
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
  return (
    <div className="p-8">
        {(typeof backendData.oferta === 'undefined') ? (
            <p>Ładowanie...</p>
        ) : (
            backendData.oferta.map((oferta, i) => (
                <div>
                    <p key={i}>{oferta}</p><Button className=" ml-8" variant="contained">Zobacz</Button>
                </div>
            ))
        )}
    </div>
  )
}

export default TestApi