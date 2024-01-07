import React from 'react'
import { Col, Row, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Cart = () => {
  const cart =useSelector(state=>state.cartReducer)
  return (
    <div className='container mb-5'>

     {cart?.length>0?
     <Row className='mt-5'>
      <Col className='col-lg-8'>
        <Table className='shadow'>
          <thead>
            <tr>
              <th>#</th>
              <th>product</th>
              <th>Image</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart?.map((carts,index)=>(<tr key={index}>
              <td>{index+1}</td>
              <td>{carts.title}</td>
              <td><img style={{height:"100px",width:"100px"}} src={carts.thumbnail} /></td>
              <td>$ {carts.price}</td>
              <td><i class="fa-solid fa-trash"></i></td>
            </tr>))}
          </tbody>
        </Table>
      </Col>
      <Col className='col-lg-4'>
<div className='d-flex flex-column border rounded  p-4'>
  <h5>Total product: <span className='fw-bolder' >3</span></h5>
  <h2>Total Amount: <span className='fw-bolder' >$ 856</span></h2>
  <hr />
  <button className='btn btn-success' >Checkout</button>

</div>
      </Col>

     </Row>:<div className='text-center'>
        <img width={"40%"} height={'400px'} src="https://imgs.search.brave.com/B7ewmfSNK_qDNm-NR1cDzDZXHlVWPexlqadfwPKdca8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudGhlbm91bnBy/b2plY3QuY29tL3Bu/Zy81NjMwNDEtMjAw/LnBuZw" alt="" />
     <h1>Your Wishlist is Empty</h1>
    <Link to={"/"} > <button className='btn btn-primary'>Click here to Shop More</button></Link>
      </div>

     }
    </div>
  )
}

export default Cart
