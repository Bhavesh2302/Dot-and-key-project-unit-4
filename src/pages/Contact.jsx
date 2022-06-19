import React from 'react'
import style from '../styles/contact.module.css'
import styles from '../styles/message.module.css'
const Contact = () => {
  return (
    <div className={style.contact}>
        <h2>Contact Us</h2>
        <p> Message us in WhatsApp</p>
        <p>Business Hours: 10 am to 6:30 pm <br/>(Monday to Saturday)</p>
        <br />
        <img src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/istockphoto-1280270505-170667a.png?v=1633437242" alt="Not Found!" />
        <h3>84477 04734</h3>
        <br/>
        <img src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Whatsapp-Black-Icon-PNG-Image_480x480.png?v=1591938885" alt="Not Found!" />
        <h3>9674990212</h3>
        <br/>
        <img src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/email_PNG55_480x480.png?v=1591870855" alt="Not Found!" />
        <h3>care@dotandkey.com</h3>
        <br/>
        <br />
        <div>
            <label>Name <br/>
                <input />
            </label><br/>
            <label>Email <br/>
                <input />
            </label>
        </div>
        <br />
        <br/>
       <div className={styles.message}>
       <label style={{marginLeft:"-485px",marginBottom:"-130px"}} >Message <br/>
        </label><br/>
        <input  type="text" style={{
              width: "540px",
              height: "200px",
              marginLeft:"95px",
              border:"1px solid  grey"
        }} placeholder="Your Message Here..."/>
       </div>
        <br/>
        <br/>
        <input style={{
          width:"85px",
          height: "40px",
          marginLeft:"-475px",
          backgroundColor:"#3D3D3C",
          color:"#FFFFFF",
          fontSize:"18px"
        }} type="submit" value="Send"/>
    </div>
  )
}

export default Contact