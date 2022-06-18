// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import "swiper/css/bundle";
import './App.css';
import Footer from './HomePageComponents/Footer';
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
import Form from './pages/Form';
import Payment from './pages/Payment';
import Order from './pages/Order';
import Login from "./LoginPageComponents/Login"
import SignUp from "./LoginPageComponents/SignUp"


function App() {
  return (
    <div className="App">
      <CartProvider>
        <Navbar></Navbar>
      </CartProvider>

      <Routes>
        <Route path='/' element={ <Homepage></Homepage>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/body' element={<Body></Body>}></Route>
        <Route path='/hair' element={<CartProvider><Haircare haircare={haircare}></Haircare></CartProvider>}></Route>
        <Route path='/nutri' element={<CartProvider><Nutri></Nutri></CartProvider>}></Route>
        <Route path='/serum' element={<CartProvider><Serum></Serum></CartProvider>}></Route>
        <Route path="/mois" element={<CartProvider><Moisturizer></Moisturizer></CartProvider>}/>
        <Route path='/checkout' element={<CartProvider><Form></Form></CartProvider>}></Route>
        <Route path='/payment' element={<CartProvider><Payment></Payment></CartProvider>}></Route>
        <Route path='/order' element={<Order></Order>}></Route>
        <Route path='/cart' element={<CartProvider><Cart></Cart></CartProvider>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
