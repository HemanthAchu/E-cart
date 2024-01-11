import React, { useEffect } from 'react'
import { Col, Row ,Card,Button,Spinner} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import  { fetchproducts, onNavigateNext, onNavigatePev} from '../Redux/Slices/ProductSlice'
import { addToWishlist } from '../Redux/Slices/wishlistSlice'
import { addtoCart } from '../Redux/Slices/CartSlice'
import Header from '../Components/Header'

const Home = () => {
  
  const dispatch =useDispatch()
  const {products,loading,error,productsPerPage,currentPage} = useSelector((state)=>state.ProductSlice)
const {wishlist} =useSelector((state)=>state.wishlistSlice)
const  totalpages = Math.ceil(products?.length/productsPerPage)
const indexOfLastItem = currentPage * productsPerPage
const indexOfFirstItem = indexOfLastItem - productsPerPage
const visibleCards =products?.slice(indexOfFirstItem,indexOfLastItem) 


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

  const naviagteprev =()=>{
    if(currentPage!==1){
      dispatch(onNavigatePev())

    }
  }
  const navigatenext = ()=>{
    if(currentPage!=totalpages){
      dispatch(onNavigateNext())
    }
  }

  return (
    <div>
       <Header insideHome/>
      {
        !loading&&error?<div className='text-center text-danger fw-bolder m-5'>{error}</div>:null
      }
      {
        loading?<div className=' text-center my-5'> <Spinner animation="border" variant="danger"/>Loading...</div>: 
         <Row className='m-4'>
          {products.length>0?visibleCards.map((product,index)=>(
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
          )): !error&&<div className='text-center text-danger fw-bolder m-5'>NO Found :(</div>}
        
        <div className="d-flex justify-content-center fw-bolder">
          <span onClick={naviagteprev} className='btn pt-2 '><i class="fa-solid fa-angles-left"></i></span>
          <span className='btn'>{currentPage} of {totalpages}</span>
          <span onClick={navigatenext} className='btn pt-2 '><i class="fa-solid fa-angles-right"></i></span>
        </div>
       
 
      </Row>
      }
  
    </div>
  )
}

export default Home
