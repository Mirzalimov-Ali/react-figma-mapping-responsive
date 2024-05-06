import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function NotFoundPage() {
    const navigate = useNavigate();

    function handleHavigate() {
        navigate(-1)
    }
  return (
    <div style={{height: "100vh", display:"flex", justifyContent: 'center', alignItems: 'center', flexDirection: "column"}}>
        <h1 style={{fontSize: "60px"}}>NOT FOUND PAGE</h1>
        <button onClick={handleHavigate} style={{width: "600px", height: "40px", marginTop: "30px", border: "none", background: "#006DAB33", cursor: "pointer", borderRadius: "20px"}}>Back</button>
    </div>
  )
}

export default NotFoundPage
