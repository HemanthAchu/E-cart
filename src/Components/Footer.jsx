import React from 'react'
import { Link} from 'react-router-dom'

function Footer() {
  return (
    <div style={{height:'300px',backgroundColor:"#F8E831"}} className='  w-100'>
      <div  className='footer-content d-flex justify-content-between'>
    <div className="title w-25">
        <h3  className='d-flex p-1'> <i class=" me-2 fa-solid fa-cloud-arrow-up  " ></i>Media player</h3>
        <span>Designed and built with all the love in the world by the bootstrap Tram with the help of our cotributors.</span><br />
        <span>Code licensed MIt, docs CC BY 3.0.</span><br />
        <span>Currently v5.3.2.</span>
        
    </div>
    <div className="links  d-flex flex-column" >
         <h3 style={{height:"55px"}}>Links</h3>
         <Link to={'/'} style={{color:"white"}} className='text-decoration-none' >Home</Link>
         <Link  to={'/Wishlist'} style={{color:"black"}} className='text-decoration-none' >Wishlist</Link>
         <Link to={'/Cart'} style={{color:"black"}} className='text-decoration-none'>Cart</Link>
    </div>
    <div className="guides d-flex flex-column"><h3 style={{height:"55px"}}>Guides</h3>
         <a style={{color:"black"}} className='text-decoration-none' >Landing Pages</a>
         <a style={{color:"black"}} className='text-decoration-none' href="">Home</a>
         <a style={{color:"black"}} className='text-decoration-none' href="">Watch History</a></div>
    <div className='contact'>
        <h3 style={{height:'55px'}}>Contact Us</h3>
        <div className='d-flex'><input type="text" placeholder='Enter your mail' 
        className='form-control' />
        <button className='btn btn-info ms-2'><i class="fa-solid fa-arrow-right"></i></button></div>
       <div style={{fontSize:'30px'}} className=' mt-2 d-flex justify-content-between'><i class="fa-brands fa-instagram"></i> 
       <i class="fa-solid fa-envelope"></i>
       <i class="fa-brands fa-linkedin"></i>
       <i class="fa-brands fa-twitter"></i>
       <i class="fa-brands fa-facebook"></i>
       <i class="fa-brands fa-github"></i>
       </div>

    </div>
      </div>

      <p className='text-center'>Copyright &copy; 2023 Media Player with React. </p>
    </div>
    
  )
}

export default Footer
