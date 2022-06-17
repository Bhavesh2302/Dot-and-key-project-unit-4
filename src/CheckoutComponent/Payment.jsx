import React from 'react'
import axios from "axios"
import { useState , useEffect} from 'react'

const Payment = () => {
const [items,setItems] = useState([])

useEffect(() => {
fetch
("http://localhost:8080/shipping") 
.then((r)=>r.json())
         .then(r =>{
             console.log(r[r.length-1])   
     setItems(r[r.length-1])
         })
},[])

  return (
    <div>
{items.email}
<div>
{items.address}
</div>
    </div>
  )
}

export default Payment