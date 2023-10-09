import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Restcard/Restcard.css'
import { Link } from 'react-router-dom';



function Restcard({restaurants}) {
    console.log(restaurants);
  return (
    <div>
        <Link to={`/view/${restaurants.id}`} style={{textDecoration:'none'}}>
        <Card className='card'>
      <Card.Img className='image' variant="top" src={restaurants.photograph} />
      <Card.Body>
        <Card.Title>{restaurants.name}</Card.Title>
        <Card.Title style={{height:'100px'}}>
          Address: {restaurants.address}
          Neighborhood: {restaurants.neighborhood}
          Cuisine type: {restaurants.cuisine_type}
        </Card.Title>
        
      </Card.Body>
      </Card>

        </Link>
    </div>
  )
}

export default Restcard