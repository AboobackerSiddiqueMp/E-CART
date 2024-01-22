import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addtoCartList, emptycart, removeFromCartList } from '../redux/slices/cartslice';
import { Link, Navigate, useNavigate } from 'react-router-dom';




function Cart1() {
  const navigate=useNavigate()
  const cartListArray = useSelector((state) => state.cartlistReducer)
  console.log('===========cartlistarray=========', cartListArray)
  const dispatch = useDispatch()
  const removefromCArt = (itemId) => {
    dispatch(removeFromCartList(itemId));



  }
  const handileCheckout=()=>{
    alert("succesfully placed the order")
    navigate('/')
    dispatch(emptycart())
  }
  let total=0
  cartListArray?.forEach(item => {
    console.log('================caty============',item.price);
    let q=item.price * item.quantity
     total=total+q

    console.log('=======total======',total)

  });
  let totalQ=0
  cartListArray?.forEach(item => {
    totalQ=totalQ+item.quantity

  });


  return (
    <Row className='ms-5' style={{ marginTop: '100px' }}>
      <Link to={'/'}>   <Button variant="outline-primary" style={{ width: '50px', marginLeft: '1300px' }}><i class="fa-solid fa-house"></i></Button></Link>
      


      {
        cartListArray?.length > 0 ?
          cartListArray.map((data) => (
            <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" className='me-3' src={data.thumbnail} style={{ height: '200px', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>{data.title}</Card.Title>
                  <Card.Text>
                    {data.description.slice(0, 50)}...
                  </Card.Text>
                  <div className="d-flex align-items-center justify-content-between">
                    <Button variant="outline-danger" onClick={(e) => removefromCArt(data.id)}><i class="fa-solid fa-trash"></i></Button>

                    <button style={{marginLeft:'86px'}} className='btn btn-primary' onClick={(e)=>dispatch(addtoCartList(data))}>+</button>
                    qty:{data.quantity}

                    <button className='btn btn-primary' onClick={(e) => removefromCArt(data.id)}>-</button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          )) :
          <h2>no data to show</h2>
      }
             <div className='col-lg-5 col-md-5 m-2 ' style={{marginLeft:'40px'}}>
          <div className='col-lg-10 col-md-10 d-flex justify-content-center align-items-center'>
            <div className='border shadow p-5'>
              <h3 className='text-primary'>Cart Summary</h3>
              <h6>Total Number of Products:  <span className='fw-bolder fs-4 text-warning'>{totalQ}</span></h6>
              <h6>Total Price:  <span className='fw-bolder fs-5 text-warning'>{total}</span></h6>
              <button className='btn btn-success rounded w-100 mt-3' onClick={handileCheckout}>Checkout</button>
            </div>
          </div>
        </div>


    </Row>

  )
}

export default Cart1