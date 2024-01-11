
import { Route,Routes,Navigate } from 'react-router-dom'
import './App.css'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import Views from './pages/Views'
import Home from './pages/Home'

import Footer from './Components/Footer'

function App() {


  return (
    <>
   
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Wishlist' element={<Wishlist/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/Views/:id' element={<Views/>}/>
      <Route path='/*' element={<Navigate to={"/"} />}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
