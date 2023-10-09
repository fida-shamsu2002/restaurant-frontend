import { useEffect, useState } from 'react';

import axios from 'axios'
import Restcard from '../Restcard/Restcard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




function Allrest() {

  // To hold all Restaurants details as in the form of array
  const [allRestaurants,setAllRestaurants]=useState([])

  const fetchData=async()=>{
    const response = await axios.get('http://localhost:3001/restaurants')
    console.log(response.data);
    setAllRestaurants(response.data)
  }

  console.log(allRestaurants);
  
  useEffect(()=>{
    fetchData()//function call
  },[])
  return (
    <div>
      <Row>
        {
          allRestaurants.map((item)=>(
            <Col sm={12} md={6} lg={4} xl={3}>
                <Restcard restaurants={item}/>
            </Col>
          
          ))
          }
          </Row>
      
      
    </div>
  )
}

export default Allrest