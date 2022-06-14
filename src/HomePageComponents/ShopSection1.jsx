import React, { useEffect ,useState} from 'react'
import styles from "./styles/styles.home.module.css"
import axios from "axios"




const ShopSection1 = () => {

const [data,setData]=useState([])
useEffect(() => {
    axios.get("http://localhost:8080/shopsection1")
    .then((r)=>{
    setData(r.data)
    })
    
    
    }, [])
    



    return (
    <div>

<div className={styles.Bhhshopsection1maindiv}>


{data.map((d)=>(
    <div key={d.id} className={styles.Bhhshopsection1div}>
    <img src={d.image}/>
    <p> {d.text}</p>
    </div>

))}





</div>


    </div>
  )
}

export default ShopSection1