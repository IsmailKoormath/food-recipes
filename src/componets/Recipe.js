import React from 'react'
import { Card, ListGroup } from "react-bootstrap";
const Recipe = (title,image,calories) => {
  return (
    <div className='Recipe'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image}/>
      
      <ListGroup className="list-group-flush">
        <ListGroup.Item style={{fontSize:"18px",fontWeight:"600"}}>{title}</ListGroup.Item>
        <ListGroup.Item>{calories}</ListGroup.Item>
        <ListGroup.Item>Real sample</ListGroup.Item>
      </ListGroup>
      
    </Card>
    </div>
  )
}

export default Recipe