import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {useParams }  from 'react-router-dom'
import './productone.css'

function Productsone() {
    const[products1,setProducts1]=useState({})
    const[cart,setCart]=useState([])

    
    const fetchData = async () => {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
      setProducts1(response.data)
      console.log(response.data,"fffffffffffff")
  }
    useEffect(() => {fetchData();}, [])
    
const {id}=useParams();

const handleClick=()=>{
console.log(products1,"products1")
if(cart.includes(products1))
{
  alert('already present')
}
else{

localStorage.setItem('cart',JSON.stringify([...cart,products1]))
setCart(()=>[...cart,products1])
}}
console.log('cart',cart)
  return (
    <div>
      <div className='container'>
        <div className='row'>
      <img className='col-6' src={products1.image}  alt='products'height='500' width='300'/>
      <div className='col-5 mt-5 ms-5'>
    <div  className='fw-bold fs-2'> {products1.title}</div>
    <div className='price mt-3 px-2'>$ {products1.price}</div>
    <div className='text-secondary  fs-1 mt-3'>{products1.category}</div>
    <div className='col-5 mt-2'>{products1.description}</div>
    <button className='click mt-2' onClick={handleClick}>Add to Cart</button>
    </div>
    </div>
    </div>
    </div>
   
  )
}

export default Productsone