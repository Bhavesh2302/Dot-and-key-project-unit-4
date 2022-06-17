// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import "swiper/css/bundle";
import './App.css';
import ShopSection1 from "./HomePageComponents/ShopSection1"
import {HomeCarousel1} from './HomePageComponents/HomeCarousel1';
import Footer from './HomePageComponents/Footer';
import { Ingredients } from './HomePageComponents/Ingredients';
import LoveShared from './HomePageComponents/LoveShared';
import { NewArrival } from './HomePageComponents/NewArrivals';
import { OffersSlider } from './HomePageComponents/OffersSlider';
import { Reviews } from './HomePageComponents/Reviews';
import { Skincare } from './HomePageComponents/Skincare';
import SkincareJournal from './HomePageComponents/SkincareJournal';
import Spotlight from './HomePageComponents/Spotlight';
import Uncompromised from './HomePageComponents/Uncompromised';
import { BestSeller } from './HomePageComponents/BestSeller.';
import { Navbar1 } from './HomePageComponents/Navbar1';
import Body from './pages/Body';
import Haircare from './pages/Haircare';
import haircare from "./data/haircare.json"
import Cart from './pages/Cart';
import { CartProvider } from "react-use-cart";
import Navbar from './NavbarComponents/components/Navbar';
import { ChakraProvider } from '@chakra-ui/react'
import Homepage from './HomePageComponents/Homepage';
import Serum from './pages/Serum';
import Nutri from './pages/Nutrition/Nutri';
import Moisturizer from './pages/Moisturizer';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Navbar></Navbar>
      </CartProvider>
      {/* <Navbar1></Navbar1> */}
      <Routes>
        <Route path='/' element={ <Homepage></Homepage>}></Route>
        <Route path='/body' element={<Body></Body>}></Route>
        <Route path='/hair' element={<CartProvider><Haircare haircare={haircare}></Haircare></CartProvider>}></Route>
        <Route path='/nutri' element={<CartProvider><Nutri></Nutri></CartProvider>}></Route>
        <Route path='/serum' element={<CartProvider><Serum></Serum></CartProvider>}></Route>
        <Route path="/mois" element={<CartProvider><Moisturizer></Moisturizer></CartProvider>}/>
        <Route path='/cart' element={<CartProvider><Cart></Cart></CartProvider>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
