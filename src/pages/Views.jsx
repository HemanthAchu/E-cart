import React, { useEffect, useState } from 'react'
import { Col, Row,Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToWishlist } from '../Redux/Slices/wishlistSlice'

const Views = () => {
  const dispatch=useDispatch()
const {id} =useParams()
const {loading,error} = useSelector((state)=>state.ProductSlice)
const {wishlist} =useSelector((state)=>state.wishlistSlice)
const [product,setproduct] =useState({})

 useEffect(()=>{
  const products= JSON.parse(localStorage.getItem("products"))
  setproduct(products.find(product=>product.id==id))
 },[])

 const handleWishlist=(product)=>{
  const existingProduct =wishlist.find(item=>item.id==product.id)
  if(existingProduct){
    alert('item is all ready there')
  }else{
    dispatch(addToWishlist(product))
  }
    }
  return (
    <div className=' m-4'>
    <Row className='m-4 align-items-center' >
    <Col className='col-md-4 ' >
      <img className='shadow rounded ' style={{height:"400px",width:'100%'}} src={product?.thumbnail} />
      </Col>
      <Col className='col-md-2' >
      </Col>
      <Col className='col-md-6' >
        <p>PID:{product?.id}</p>
        <h1>{product?.title}</h1>
        <h5 className='fw-bolder' >${product?.price}</h5>
        <p style={{textAlign:"justify"}}>
          <span className='fw-bolder me-2'>Descripttion</span>
          {product?.description}
        </p>
        <div className='d-flex justify-content-between align-items-center'>
         <Button onClick={()=>handleWishlist(product)} className='btn btn-outline-dark fs-5 d-flex justify-content-between align-items-center p-2'><i style={{color:'red'}} class="fa-solid fa-heart  px-2"></i>Wishlist</Button>
        <Button  className='btn  d-flex justify-content-between align-items-center btn-outline-dark fs-5 p-2'><i  class="fa-solid fa-cart-shopping px-3 text-success">Cart</i></Button></div>
      </Col>
    </Row>
    </div>
  )
}

export default Views
