import React from "react";
import {Card,Button} from 'react-bootstrap'




function Cards({el}){
    return (
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={el.src} width="100%" height="200px" />
  <Card.Body>
    <Card.Title>User List</Card.Title>
    <Card.Text>
       <p>{el.id}</p>
       <p>{el.name}</p>
       <p>{el.username}</p>
       <p>{el.email}</p>
       <p>{el.adresse}</p>
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>


    )
}


export default Cards;