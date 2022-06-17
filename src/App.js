// import logo from './logo.svg';
import './App.css';
import { BestSeller } from './HomePageComponents/BestSeller.';
import Footer from './HomePageComponents/Footer';
import {HomeCarousel1} from './HomePageComponents/HomeCarousel1';
import { Ingredients } from './HomePageComponents/Ingredients';
import LoveShared from './HomePageComponents/LoveShared';
import { NewArrival } from './HomePageComponents/NewArrivals';
import { OffersSlider } from './HomePageComponents/OffersSlider';
import { Reviews } from './HomePageComponents/Reviews';
import ShopSection1 from './HomePageComponents/ShopSection1';
import { Skincare } from './HomePageComponents/Skincare';
import SkincareJournal from './HomePageComponents/SkincareJournal';
import Spotlight from './HomePageComponents/Spotlight';

import Uncompromised from './HomePageComponents/Uncompromised';


function App() {
  return (
    <div className="App">
      <ShopSection1/>
      <HomeCarousel1/>
      <OffersSlider/>
      <BestSeller/>
      <NewArrival/>
      <Spotlight/>
      <Ingredients/>
      <Skincare/>
      <LoveShared/>
      <Uncompromised/>
      <SkincareJournal/>
      <Reviews/>
  
    
      <Footer/>
      
    </div>
  );
}

export default App;
