import React from 'react'
import styles from "./styles/styles.section1.module.css"

import data from "../home.json"




const ShopSection1 = () => {
    console.log(data)

// const [data,setData]=useState([])
// useEffect(() => {
//     axios.get("http://localhost:8080/shopsection1")
//     .then((r)=>{
//     setData(r.data)
//     })
    
    
//     }, [])
    



    return (
    <div>

<div className={styles.Bhhshopsection1maindiv}>


{data.shopsection1.map((d)=>(
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