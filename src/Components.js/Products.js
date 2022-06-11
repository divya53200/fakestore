import React,{useState,useEffect}from 'react'
import {Link,useParams} from 'react-router-dom';



function Product() {
  const[products,setProducts]=useState([])

  const {id}=useParams();
  

   const fetchData = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    setProducts(data)
}

  
  useEffect(() => {
    fetchData();
}, [])

console.log(products)

  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='p-3 bg-shadow  fs-2'>FakeStore</div>
        </div>
      </div>
     
      <div className="container">
        <div className='row'>
      {
         products.map(product=><div  key={product.id}className='col-3 border border-1 '>
           <Link to={`/products/${product.id}`}>
          
           <img   className='mt-2 ' src={product.image} alt='products' height='100' width='100'/></Link>
           <div className=' fw-bold col-5'>{product.title}</div>
           
           <div className='fw-bold'>${product.price}</div>
           <div className='text-secondary'>{product.category}</div>
        
           


         </div>)
      }
      </div>
      </div>
    </div>
  )
}

export default Product