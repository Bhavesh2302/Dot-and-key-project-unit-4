import React from "react";
import styles from "./styles/styles.footer.module.css";
import {Link} from "react-router-dom"
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <div className={styles.BhfooterContainer}>
        <div className={styles.bhfooter1stcolumn}>


        <div>
            <h3>GET TO KNOW US</h3>
          </div>
          <div><Link to="/about">ABOUT US</Link></div>
          <div><Link to="/contact">CONTACT US</Link></div>
          <div>EARTH CARE</div>
          <div>AFFILATE PROGRAM</div>
          <div>TERMS & CONDITION </div>
          <div>RETURN & CANCELLATION</div>
          <div>PRIVACY</div>
          <div>ORDER & SHIPPING</div>
          <div>PAYMENT TERMS</div>
          <div>TERMS OF SERVICE</div>
          <div>REFUND POLICY</div>
     
          </div>





        <div className={styles.bhfooter2ndcolumn}>
       
        <div>
            <h3>ALSO AVILABLE ON</h3>
          </div>
          <div>NYKAA</div>
          <div>AMAZON</div>
          <div>FLIPKART</div>
          <div>MYNTRA</div>
        
        </div>
       

        <div className={styles.bhfooter3rdcolumn}>
        <div>
            <h3>STAY UPDATED</h3>
          </div>
<div>
          <input type="email" className={styles.Bhfooterinput} placeholder="example@gmail.com"/>
          <button type="submit" className={styles.Bhfooterbuttonsubmit}>SUBMIT</button>

          </div >

          <div className={styles.Bhfootericons}> 
            <h4>FOLLOW US</h4>
            <FaFacebookF/>
            <FaInstagram/>
            <FaYoutube />
            </div>
            <div>© 2022 Dot & Key</div>
      
      


          <div>

          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
