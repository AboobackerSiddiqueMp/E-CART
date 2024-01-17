import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../hooks/UseFetch';
import { useDispatch } from 'react-redux';
import { addtoWishList } from '../redux/slices/WishList';
import { addtoCartList } from '../redux/slices/cartslice';


function Home() {
  const data=useFetch('https://dummyjson.com/products')
  const dispatch=useDispatch()

  console.log(data)
  return (
    <div>
      <Row className='ms-5' style={{marginTop:'150px'}}>
        {
          data?.length > 0?
  
          data.map((item)=>(
            <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" className='me-3' src={item.images[0]}  style={{height:'200px',objectFit:'cover'}}/>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  {item.description.slice(0,50)}...
                </Card.Text>
                <div className="d-flex align-items-center justify-content-between">
                <Button variant="outline-danger" onClick={(e)=>dispatch(addtoWishList(item))} ><i class="fa-solid fa-heart"></i></Button>
                <Button variant="outline-success" onClick={(e)=>dispatch(addtoCartList(item))}><i class="fa-solid fa-cart-shopping"></i></Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
  

          )):<h3 className='text-danger'>no data to show</h3>

        }
      </Row>
    </div>
  )
}

export default Home