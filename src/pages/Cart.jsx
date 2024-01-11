import React, { useEffect, useState } from 'react'
import { Col, Row, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { addtoCart, decQuantity, emptyCart, incQuantity, removeCart } from '../Redux/Slices/CartSlice'
import Header from '../Components/Header'

const Cart = () => {
  const navigate =useNavigate()
  const dispatch =useDispatch()
  const cart =useSelector(state=>state.cartReducer)
  const [cartamount,setcartamount] = useState(0)
  useEffect(()=>{ 

    if(cart.length>0){
     setcartamount(cart.map(carts=>carts.totalPrice).reduce((a,b)=>a+b))

    }else{
      setcartamount(0)
    }


  },[cart])

 const  handlecheckout =()=>{
  alert("Your order has successfully placed... Thank you purchasing with us!!!")
  dispatch(emptyCart())
  navigate('/')
 }
 const handledec =(carts)=>{
if(carts.quantity==1){
dispatch( removeCart(carts.id))
}else{
  dispatch(decQuantity(carts))
}
 }

  return (
    <>
    <Header/>
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
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart?.map((carts,index)=>(<tr key={index}>
              <td>{index+1}</td>
              <td>{carts.title}</td>
              <td><img style={{height:"100px",width:"100px"}} src={carts.thumbnail} /></td>
              <td>$ {carts.totalPrice}</td>
              <td> <button onClick={()=>handledec(carts)}  className='btn'   >-</button> <input className='ps-3' type="text" value={carts.quantity} style={{width:'50px'}} readOnly /><button onClick={()=>dispatch(incQuantity(carts))} className='btn'>+</button></td>

              <td><i onClick={()=>dispatch( removeCart(carts.id))} class="fa-solid fa-trash"></i></td>
            </tr>))}
          </tbody>
        </Table>
        <div className='float-end'>
          <button onClick={()=>dispatch(emptyCart())} className='btn btn-danger me-3' >Empty Cart</button>
          <Link to={"/"} ><button onClick={()=>dispatch(emptyCart())} className='btn btn-primary'>Shop More</button></Link>
        </div>
      </Col>
      <Col className='col-lg-4'>
<div className='d-flex flex-column border rounded  p-4'>
  <h5>Total product: <span className='fw-bolder' >{cart?.length}</span></h5>
  <h2>Total Amount: <span className='fw-bolder ' style={{color:'red'}} >$ {cartamount}</span></h2>
  <hr />
  <button onClick={handlecheckout} className='btn btn-success' >Checkout</button>

</div>
      </Col>

     </Row>:<div className='text-center'>
        <img width={"40%"} height={'400px'} src="https://imgs.search.brave.com/B7ewmfSNK_qDNm-NR1cDzDZXHlVWPexlqadfwPKdca8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudGhlbm91bnBy/b2plY3QuY29tL3Bu/Zy81NjMwNDEtMjAw/LnBuZw" alt="" />
     <h1>Your Wishlist is Empty</h1>
    <Link to={"/"} > <button className='btn btn-primary'>Click here to Shop More</button></Link>
      </div>

     }
    </div></>
  )
}

export default Cart
