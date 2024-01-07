import React, { useEffect } from 'react'
import { Col, Row ,Card,Button,Spinner} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import  { fetchproducts } from '../Redux/Slices/ProductSlice'
import { addToWishlist } from '../Redux/Slices/wishlistSlice'
import { addtoCart } from '../Redux/Slices/CartSlice'

const Home = () => {
  const dispatch =useDispatch()

  const {products,loading,error} = useSelector((state)=>state.ProductSlice)
const {wishlist} =useSelector((state)=>state.wishlistSlice)

  useEffect(()=>{
    dispatch(fetchproducts())
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
    <div>
      {
        loading? <div className=' text-center my-5'> <Spinner animation="border" variant="danger"/>Loading...</div>: 
         <Row className='m-4'>
          {products.length>0&&products.map((product,index)=>(
            <Col key={index} className='mt-5' sm={12}  md={6} lg={4} xl={3} >
        <Card className='shadow rounded' style={{ width: '18rem' }}>
        <Link to={`/views/${product.id}`}>
        <Card.Img style={{height:"180px"}} variant="top" src={product.thumbnail}/>
        </Link>
        <Card.Body>
          <Card.Title>{product.title.slice(0,20)}...</Card.Title>
         <div className='d-flex justify-content-between align-items-center'>
           <Button onClick={()=>handleWishlist(product)} className='btn btn-light'><i style={{color:'red'}} class="fa-solid fa-heart fs-4 p-2"></i></Button>
          <Button onClick={()=>dispatch(addtoCart(product))}  className='btn btn-light d-flex justify-content-between align-items-center'><i style={{color:'skyblue'}} class="fa-solid fa-cart-shopping fs-4 p-3"></i></Button></div>
        </Card.Body>
      </Card>
        </Col>
          ))}
        
        
       
 
      </Row>
      }
  
    </div>
  )
}

export default Home
