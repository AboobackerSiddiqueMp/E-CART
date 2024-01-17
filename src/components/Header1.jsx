import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';




function Header1() {
  const wislistArray=useSelector((state)=>state.wishlisttReducer)
  const cartArray=useSelector((state)=>state.cartlistReducer)
  console.log('cart===============',cartArray)


  return (
    <>
        <Navbar expand="lg" className="bg-primary position-fixed top-0 w-100" style={{zIndex:'1'}}>
      <Container>
        <img src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png" className='me-4'  width={'30px'} alt="" />
        <Navbar.Brand href="#home">E-CART</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          
            <Nav.Link className='btn border rounded  me-3'><Link to={'/wishList'} style={{color:'white',textDecoration:'none'}}>wishList<Badge className='ms-2' bg="secondary">{wislistArray.length}</Badge></Link></Nav.Link>


            <Nav.Link href="#link" className='btn border rounded  me-3'><Link to={'/cart'} style={{color:'white',textDecoration:'none'}}>Cart<Badge bg="secondary" className='ms-2'>{cartArray.length}</Badge></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
    </>
  )
}

export default Header1