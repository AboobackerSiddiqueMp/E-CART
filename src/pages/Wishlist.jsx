import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeFromWishlist } from '../redux/slices/WishList';
import { addtoCartList } from '../redux/slices/cartslice';



function Wishlist() {
  const wishListArray = useSelector((state) => state.wishlisttReducer)
  console.log('=============blaa=========', wishListArray)
  const dispatch=useDispatch()
  const removeFromWishlists=(itemId)=>{
      dispatch(removeFromWishlist(itemId));



  }
  const handileWishlist=(data)=>{
    dispatch(addtoCartList(data))
    dispatch(removeFromWishlist(data.id))
  }

  return (
    <div>
      <Row className='ms-5' style={{ marginTop: '150px' }}>
      <Link to={'/'}>   <Button variant="outline-primary" style={{width:'50px',marginLeft:'1300px'}}><i class="fa-solid fa-house"></i></Button></Link>

        {
          wishListArray?.length > 0 ?
            wishListArray.map((data) => (
              <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" className='me-3' src={data.thumbnail} style={{ height: '200px', objectFit: 'cover' }} />
                  <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text>
                      {data.description.slice(0, 50)}...
                    </Card.Text>
                    <div className="d-flex align-items-center justify-content-between">
                      <Button variant="outline-danger" onClick={(e)=>removeFromWishlists(data.id)}><i class="fa-solid fa-trash"></i></Button>
                      <Button variant="outline-success" onClick={()=>handileWishlist(data)}><i class="fa-solid fa-cart-shopping"></i></Button>

                    </div>
                  </Card.Body>
                </Card>
              </Col>

            ))

            :
            <h2>no item in wishList</h2>


        }


      </Row>


    </div>
  )
}

export default Wishlist