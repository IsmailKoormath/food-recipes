import React from 'react'
import { Card, Col,Row } from "react-bootstrap";

const Detail = () => {
    
  return (
    <div style={{backgroundColor:"white" ,margin:"30px",padding:"20px"}} >
        <div className='detail-top'>
        <img  style={{width:"300px" ,marginRight:"100px",marginBottom:"50px"}} src='https://thumbs.dreamstime.com/b/crispy-fried-chicken-wings-wooden-table-kentucky-88919528.jpg'></img>
        
        <div>
            <h3>title</h3>
            <p>discription </p>
        </div>
        </div>
        <div style={{display:"flex" ,justifyContent:"space-around"}}>
            <div>10 Ingredients</div>
            <div>Nutrition</div>
        </div>
     </div>
  )
}

export default Detail