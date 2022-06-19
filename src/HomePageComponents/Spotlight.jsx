


import React from 'react'
import styles from "../HomePageComponents/styles/styles.spotlight.module.css"

const Spotlight = () => {
  return (
    <div>
<div>   

<p>IN THE</p>
   <h2><i>SPOTLIGHT</i></h2>
</div>

<div className={styles.bhbigdiv}>
    <div className={styles.bhupperdiv}>
        <div className={styles.bhleft1div}><img src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/5th_May_4_Block-02_1.jpg?v=1654594415" alt="" /></div>
        <div className={styles.bhright1div}> <img src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/5th_May_4_Block-01_2.jpg?v=1654594421" alt="" /></div>
    </div>
    <div className={styles.bhlowerdiv}>
        <div className={styles.bhleft2div}><img src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/VIT_C_BANNER_2.jpg?v=1651059557" alt="" /></div>
        <div className={styles.bhright2div}><img src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Hair_Damage_Control_small_2_1.jpg?v=1652694729" alt="" /></div>
    </div>
</div>


    </div>
  )
}

export default Spotlight