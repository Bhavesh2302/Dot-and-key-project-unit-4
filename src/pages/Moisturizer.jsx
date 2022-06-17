import React from "react";
import styles from "../styles/mois.module.css"
import { IoStarSharp , IoStarHalfSharp} from "react-icons/io5";
import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import {useCart} from "react-use-cart"


const Moisturizer =()=>{
    const [products , setProducts] = useState([])
    const {addItem} = useCart();
    const handleRefresh = ()=>{
        window.location.reload(false)
    }
    useEffect(()=>{
        fetch(" http://localhost:8080/products")
        .then((r)=>r.json())
        .then((d)=>{
            console.log(d)
            setProducts(d)
        })
    },[])
    return (
        <div>

            <div>
                <img src="https://cdn.shopify.com/s/files/1/0361/8553/8692/collections/By-catagory-11_73cd9359-5cc9-46db-b538-22de93ec14a3_1944x.png?v=1648272494" alt="" className={styles.topimg}/>
            </div>

            <div style={{marginTop:50}}>
                <h1 className={styles.change}>MOISTURIZERS</h1>
            </div>

            <div className={styles.itemBox}>
            {products.map((mois)=>(
               
         <div className={styles.card} key={mois.id}>
          <Link to={`/products/${mois.id}`}>
           <div className={styles.imgBox}>
           <img src={mois.image} alt="" className={styles.inImg}/>
           </div>

           <div className={styles.icon}> 
           <div className={styles.merge}>
           <div >
           <IoStarSharp color={"black"}/>
           <IoStarSharp color={"black"}/>
           <IoStarSharp color={"black"}/>
           <IoStarSharp color={"black"}/>
           <IoStarHalfSharp color={"black"}/>
           </div>
           <div className={styles.blue}>({mois.review})</div>
          
           </div>
           <div>
            <FiHeart className={styles.heartShape}/>
           </div>
           </div>

           <div className={styles.valueBox}>
            {mois.name}
           </div>

           <div className={styles.priceBox}>
           <div className={styles.cut}>
            Rs.{mois.PriceCut}.00</div>
           <div className={styles.price}>Rs.{mois.Price}</div>
           </div>

          <button className={styles.btn} onClick={()=>{addItem(mois);handleRefresh()}}>Add To Cart</button>
         
          </Link>
            </div>
           
           
            ))}
            </div>
        </div>
    )
}
export default Moisturizer