import {Navbar,Badge} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productSearch } from '../Redux/Slices/ProductSlice';

function FormExample({insideHome}) {
  const dispatch =useDispatch()
  const [carts,cartcount] = useState(0)
  const  [wishlistcount,setwishlistcount] = useState(0)
  const wishlist =useSelector(state=>state.wishlistSlice.wishlist)
  const cart = useSelector(state=>state.cartReducer)
  useEffect(()=>{
    
 setwishlistcount(wishlist?.length)
 cartcount(cart?.length)
  },[wishlist,cart])
  return (
    <Navbar style={{backgroundColor:"#047BD5"}} className=" justify-content-between ">
     <Link to={"/"} style={{cursor:"pointer",textDecoration:"none"}}>
      <h1 style={{backgroundColor:"#F8E831",color:'#047BD5', borderRadius:"10px"}} className='p-4 m-2'>
      <i style={{height:"41px",color:'#047BD5'}} class="fa-solid fa-truck-fast"></i> G-Cart
      </h1>
     </Link>
     {insideHome&&<div>
      <input onChange={e=>dispatch(productSearch(e.target.value.toLowerCase()))} type="text" className='form-control' placeholder='search products!!' />
     </div>}
      <Form inline="true">
        <Row>
          <Col xs="auto">
         <Link style={{textDecoration:"none"}} to={'/Wishlist'}> <Button className='me-5 btn d-flex align-items-center justify-content-center' style={{
            backgroundColor:"transparent",
            border:"2px solid white",
            padding: "15px 50px"
          }} type="submit"><i style={{color:'red'}} class="fa-solid fa-heart pe-3"></i>Wishlist<Badge className='ms-2 rounded' bg="light">{wishlistcount}</Badge></Button></Link>
          </Col>
          <Col xs="auto" className='me-4'>
         <Link style={{textDecoration:"none"}} to={"/Cart"}>
         <Button className='me-5 btn d-flex align-items-center justify-content-center' style={{
            backgroundColor:"transparent",
            border:"2px solid white",
            padding: "15px 50px"
          }} type="btn"><i style={{color:'red'}} class="fa-solid fa-cart-shopping pe-3"></i>Cart<Badge className='ms-2 rounded' bg="light">{carts}</Badge></Button>
         </Link>
          </Col>
        </Row>
      </Form>
    </Navbar>
  );
}

export default FormExample;