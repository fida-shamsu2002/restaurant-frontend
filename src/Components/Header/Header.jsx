import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  return (
    <div>
        <Navbar className="bg-success shadow">
        <Container>
          <Navbar.Brand href="/" className='text-light'>
          <i class="fa-solid fa-utensils fa-bounce me-3"></i>
            Resto Cafe
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}
