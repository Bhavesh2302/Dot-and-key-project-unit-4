import React from "react";
import { Routes , Route } from "react-router-dom";
import Payment from "../CheckoutComponent/Payment";
// import Footer from "./Footer";
// import Footer from "./Footer"
import Moisturizer from "./Moisturizer";
import { MoisturProduct } from "./MoisturProduct";
import Form from "../CheckoutComponent/Form"



export const Allroutes =()=>{
    return(
        <div>
            <Routes>
                
                <Route path="/products" element={<Moisturizer/>}/>
                <Route path="/products/:id" element={<MoisturProduct/>}/>
                <Route path="/" element={<Form/>}/>
                <Route path="/payment" element={<Payment/>}/>
            </Routes>
        </div>
    )
}