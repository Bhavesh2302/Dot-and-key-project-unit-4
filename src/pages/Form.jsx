import React from 'react'
import styles from "../styles/form.module.css"
import axios from "axios"
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Cart from "./Cart"
// import { Link } from 'react-router-dom'


const Form = () => {
    const navigate = useNavigate()
    const [ form , setform ] = useState ( {
        email : "",
        address : "",
    } )

    const handleAdd = (e) => {
        let {  name , value } = e.target
            setform({
                ...form,
                [name] : value,
            })   
        }

        const handleOnSubmit = (e) => {
            e.preventDefault()
            console.log(form)
            fetch("  http://localhost:8080/shipping" , { 
                method:"POST",
                headers: { "content-type":"application/json" },
                body: JSON.stringify ( { 
                    email : form.email,
                    address : form.address,
                 })
             })
             .then((r) => r.json())
             .then((d) =>{
                 setform([...form,d])
                 setform("")
             })
             navigate("/payment")
        }
  return (
    <div style={{marginTop:"100px"}}>
        <div className={styles.mainBox}>
            <div className={styles.addressBox}>
                <div className={styles.dostImgBox}>
                    <img src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Dot_Key_Logo.png?138276" alt="" style={{width:"100%"}} />
                </div>
                <div className={styles.afterImg}>
                    <div>Cart</div>
                    <div>Information</div>
                    <div>Shipping</div>
                    <div>Payment</div>
                </div>
                <div className={styles.cont}>
                Contact information
                </div>
                <div className={styles.parabox}><p style={{marginTop:"3px"}}>Already have an account? Log In to redeem Skindulgence Points. 
                    <span style={{color:"red"}}>
                Log in</span></p></div>

               <form onSubmit={handleOnSubmit}>
                <div>
                    <input type="Email" placeholder='Email' required  className={styles.oneInp}  name='email'
                onChange={handleAdd} value={form.email}/>
                </div>

                <div className={styles.onechk}>
                    <input type="checkbox" style={{height:"15px" , width:"15px" }}/>
                    <label htmlFor="" className={styles.onelbl}>Keep me up to date on news and exclusive offers</label>
                </div>

                <div className={styles.addrs}>
                Shipping address
                </div>

                <div style={{marginTop:"20px"}}>
                <select className={styles.slct}>
                    <option value="">India</option>
                </select>
                </div>

                <div className={styles.naminp}>
                    <div>
                        <input type="name" placeholder='First Name' className={styles.firstNam} />
                    </div>
                    <div>
                         <input type="name" placeholder='Last Name' className={styles.LastNam} />
                    </div>
                </div>

                <div>
                <input type="address" placeholder='Address' required  className={styles.twoInp}  name='address'
                onChange={handleAdd} value={form.address} />
                </div>
                <div>
                <input type="address" placeholder='Apartment,suite,etc. (optional)' required  className={styles.twoInp}/>
                </div>

                <div className={styles.threeInp}>
                    <div style={{width:"27%"}}>
                        <input type="text" className={styles.threeOneInp} placeholder="City" />
                    </div>
                    <div style={{width:"27.5%"}}>
                    <select className={styles.threeOneInp} >
                    <option >State</option>
                    <option value="AN">Andaman and Nicobar Islands</option>
                    <option value="AP">Andhra Pradesh</option>
                    <option value="AR">Arunachal Pradesh</option>
                    <option value="AS">Assam</option>
                    <option value="BR">Bihar</option>
                    <option value="CH">Chandigarh</option>
                    <option value="CT">Chhattisgarh</option>
                    <option value="DN">Dadra and Nagar Haveli</option>
                    <option value="DD">Daman and Diu</option>
                    <option value="DL">Delhi</option>
                    <option value="GA">Goa</option>
                    <option value="GJ">Gujarat</option>
                    <option value="HR">Haryana</option>
                    <option value="HP">Himachal Pradesh</option>
                    <option value="JK">Jammu and Kashmir</option>
                    <option value="JH">Jharkhand</option>
    <option value="KA">Karnataka</option>
    <option value="KL">Kerala</option>
    <option value="LA">Ladakh</option>
    <option value="LD">Lakshadweep</option>
    <option value="MP">Madhya Pradesh</option>
    <option value="MH">Maharashtra</option>
    <option value="MN">Manipur</option>
    <option value="ML">Meghalaya</option>
    <option value="MZ">Mizoram</option>
    <option value="NL">Nagaland</option>
    <option value="OR">Odisha</option>
    <option value="PY">Puducherry</option>
    <option value="PB">Punjab</option>
    <option value="RJ">Rajasthan</option>
    <option value="SK">Sikkim</option>
    <option value="TN">Tamil Nadu</option>
    <option value="TG">Telangana</option>
    <option value="TR">Tripura</option>
    <option value="UP">Uttar Pradesh</option>
    <option value="UT">Uttarakhand</option>
    <option value="WB">West Bengal</option>
                        </select>
                    </div>
                    <div style={{width:"28.5%"}}>
                    <input type="text" className={styles.threeOneInp} placeholder='PIN Code'/>
                    </div>
                </div>

                <div>
                <input type="number" placeholder='Phone' required  className={styles.twoInp} />
                </div>

               
                <div className={styles.onechk}>
                    <input type="checkbox" style={{height:"15px" , width:"15px" }}/>
                    <label htmlFor="" className={styles.onelbl}>Save this information for next time</label>
                </div>
                
                <div className={styles.onechk}>
                    <input type="checkbox" style={{height:"15px" , width:"15px" }}/>
                    <label htmlFor="" className={styles.onelbl}>Get Order Updates On WhatsApp</label>
                </div>

                <div className={styles.btnBox}>
                    <div className={styles.return}>
                        Return to Cart
                    </div>
                    <div >
                      <button type='submit' className={styles.btn} onClick={()=>navigate("/payment")}>Continue to shipping</button>
                    </div>
                </div>
               </form>

            <p className={styles.underline}></p>

            <div className={styles.lastBox}>
                <div className={styles.color}>Refund policy</div>
                <div>Shipping policy</div>
                <div>Privacy policy</div>
                <div>Terms of service</div>
            </div>

            </div>

            <div className={styles.cartBox}>
                <Cart></Cart>
            </div>
        </div>
    </div>
  )
}

export default Form