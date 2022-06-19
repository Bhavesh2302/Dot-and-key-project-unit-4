import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/moisPro.module.css"
import { IoStarSharp , IoStarHalfSharp } from "react-icons/io5";


export const MoisturProduct=()=>{
    const {id} = useParams();
    const[product,setProduct]=useState({})

    useEffect(()=>{
        if(id){
            fetch(`http://localhost:8080/products/${id}`)
            .then((r)=>r.json())
            .then((d)=>setProduct(d))
        }
    },[id])
    return(
        <div>
            <div className={styles.mainBox}>

               <div className={styles.imgBox}>
                <img src={product.image} alt="" className={styles.fullImg}/>
               </div>

               <div className={styles.details}>
                <div className={styles.value}>
                   <h2> {product.name1}</h2>
                </div>

                <div className={styles.value3}>
                    <p>{product.name3}</p>
                </div>
 
            <div className={styles.starBox}>
                <div className={styles.star}>
           <IoStarSharp size={22} color={"gray"}/>
           <IoStarSharp size={22} color={"gray"}/>
           <IoStarSharp size={22} color={"gray"}/>
           <IoStarSharp size={22} color={"gray"}/>
           <IoStarHalfSharp size={22} color={"gray"}/>
           </div>

           <div className={styles.reviewBox}>
           ({product.review})Reviews
           </div>
           </div>

           <div className={styles.amountBox}>
            <div className={styles.cutPrice}>
                <p className={styles.cut}>Rs.{product.PriceCut}.00</p>
            </div>
            <div className={styles.price}>
                <p className={styles.prc}>Rs.{product.Price}</p></div>
           </div>

           <div className={styles.taxBox}>
           <p className={styles.tax}>Inclusive of All Taxes</p>
           </div>

           <select className={styles.selct}>
            <option value="60ml">60ml</option>
           </select>

           <button className={styles.btn}>ADD TO CART</button>
           </div>

            </div>


        </div>
    )
}