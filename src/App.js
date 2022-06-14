// import logo from './logo.svg';
import './App.css';
import Footer from './HomePageComponents/Footer';
import ShopSection1 from './HomePageComponents/ShopSection1';
import Carousel from "./HomePageComponents/Carousel"

function App() {
  return (
    <div className="App">
      <ShopSection1/>
      <Carousel/>
      <Footer/>
    </div>
  );
}

export default App;
