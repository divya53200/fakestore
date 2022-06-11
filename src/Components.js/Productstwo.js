
import React,{useState,useEffect} from 'react'

function Productsone() {
    const[products1,setProducts1]=useState([])
    
const param=new URLSearchParams(window.location.search)
const id=param.get("id")
console.log(id,"iiiiiiiiiii")


  
  useEffect(() => {
    fetchData();
},[])
const fetchData = async () => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  // console.log(response,"response")
  const data = await response.json();
  console.log(data,"ssssssssss")
  setProducts1(data)
}
console.log("todos",products1)

  return (
    <div>
      <div>
       <img src= {products1.image} width='100' height='100'/>
        {products1.title}
        {products1.price}
      </div>
      
       </div>
  )
}

export default Productsone