import React from 'react'
import ShopSection1 from "./ShopSection1"
import { HomeCarousel1 } from './HomeCarousel1';
import { Ingredients } from './Ingredients';
import LoveShared from './LoveShared';
import { NewArrival } from './NewArrivals';
import { OffersSlider } from './OffersSlider';
import { Reviews } from './Reviews';
import { Skincare } from './Skincare';
import SkincareJournal from './SkincareJournal';
import Spotlight from './Spotlight';
import Uncompromised from './Uncompromised';
import { BestSeller } from './BestSeller.';
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
      <Link to="/">
          <div>
            <ShopSection1></ShopSection1>
            <HomeCarousel1></HomeCarousel1>
            <OffersSlider />
            <BestSeller />
            <NewArrival />
            <Spotlight />
            <Ingredients />
            <Skincare />
            <LoveShared />
            <Uncompromised />
            <SkincareJournal />
            <Reviews />
        </div>
      
      </Link>
    )
}

export default Homepage