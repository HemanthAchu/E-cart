import React from 'react'
import { Row,Col,Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link} from 'react-router-dom'
import { removeFromWishlist } from '../Redux/Slices/wishlistSlice'
import { addtoCart } from '../Redux/Slices/CartSlice'
import Header from '../Components/Header'
const Wishlist = () => {
 const dispatch = useDispatch()
  const wishlist =useSelector(state=>state.wishlistSlice.wishlist)

  const handlecart =(products)=>{
    dispatch(removeFromWishlist(products.id))
    dispatch(addtoCart(products))
  }
  return (
    <div>
      <Header/>
    <Row className='m-4'>
      
{ wishlist?.length>0?wishlist?.map(products=>(
  <Col sm={12}  md={6} lg={4} xl={3} >
  <Card className='shadow rounded' style={{ width: '18rem' }}>
  <Link to={'/views/1'}>
  <Card.Img style={{height:"180px"}} variant="top" src={products.thumbnail} />
  </Link>
  <Card.Body>
    <Card.Title>{products.title.slice(0,20)}...</Card.Title>
   <div className='d-flex justify-content-between align-items-center'>
     <Button onClick={()=>dispatch(removeFromWishlist(products.id))}  className='btn btn-light'><i style={{color:'red'}} class="fa-solid fa-heart-circle-xmark fs-4 p-2"></i></Button>
    <Button onClick={()=>handlecart(products)}  className='btn btn-light d-flex justify-content-between align-items-center'><i style={{color:'skyblue'}} class="fa-solid fa-cart-shopping fs-4 p-3"></i></Button></div>
  </Card.Body>
</Card>
  </Col>
)):<div className='text-center'>
        <img width={"40%"} height={'400px'} src="https://imgs.search.brave.com/B7ewmfSNK_qDNm-NR1cDzDZXHlVWPexlqadfwPKdca8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudGhlbm91bnBy/b2plY3QuY29tL3Bu/Zy81NjMwNDEtMjAw/LnBuZw" alt="" />
     <h1>Your Wishlist is Empty</h1>
      </div>

}
     

    </Row>
    </div>
  )
}

export default Wishlist
