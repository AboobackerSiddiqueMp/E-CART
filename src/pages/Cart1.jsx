import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeFromCartList } from '../redux/slices/cartslice';
import { Link } from 'react-router-dom';




function Cart1() {
    const cartListArray = useSelector((state) => state.cartlistReducer)
    console.log('===========cartlistarray=========',cartListArray)
    const dispatch=useDispatch()
    const removefromCArt=(itemId)=>{
        dispatch(removeFromCartList(itemId));



    }


  return (
    <Row className='ms-5' style={{ marginTop: '100px' }}>
                          <Link to={'/'}>   <Button variant="outline-primary" style={{width:'50px',marginLeft:'1300px'}}><i class="fa-solid fa-house"></i></Button></Link>


        {
            cartListArray?.length>0?
            cartListArray.map((data)=>(
                <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" className='me-3' src={data.thumbnail}  style={{height:'200px',objectFit:'cover'}}/>
                  <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text>
                      {data.description.slice(0,50)}...
                    </Card.Text>
                    <div className="d-flex align-items-center justify-content-between">
                    <Button variant="outline-danger" onClick={(e)=>removefromCArt(data.id)}><i class="fa-solid fa-trash"></i></Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              )):
              <h2>no data to show</h2>
        }

</Row>

)
}

export default Cart1