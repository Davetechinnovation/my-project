import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/home'
import About from './pages/about'
import Reciepe from './pages/reciepe'
import Contact from './pages/contact'
import Friedrice from './pages/friedrice'
import Cocktail from './pages/cocktail';
import Pad from './pages/pad';
import Pizza from './pages/pizza';
import Poutine from './pages/poutine'
import Porkolt from './pages/porkolt';
import Hainan from './pages/Hainan';
import Shirazi from './pages/shirazi';
import Ayam from './pages/ayam';
import Borani from './pages/borani';
import Chasu from './pages/chasu';
import Lebanon from './pages/Lebanon';
import Lamb from './pages/lamb';
import Buta from './pages/buta';
import Fajitas from './pages/fajitas';
import Tikka from './pages/tikka';
import Egusi from './pages/egusi';
import Injera from './pages/injera';
import Tagine from './pages/tagine';
import Jollof from './pages/jollof';
import Bobotie from './pages/bobotie';
import Matooke from './pages/matooke';
import Suya from './pages/suya';
import Kenkey from './pages/kenkey';
import Maafe from './pages/maafe';
import Okra from './pages/okra';
import Chak from './pages/chak';
import Yam from './pages/yam';
import Spaghetti from './pages/spaghetti';
import Groundnut from './pages/groundnut';

function App() {
return (
  <BrowserRouter>
    <div className='app-container'>
     
       <Navbar />

      <div className='content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reciepe" element={<Reciepe />} />
          <Route path="/friedrice" element={<Friedrice />} />
          <Route path="/cocktail" element={<Cocktail />} />
          <Route path = "/pad" element = {<Pad />} />
          <Route path = "/pizza" element = {<Pizza />} />
          <Route path = "/poutine" element = {<Poutine />} />
          <Route path = "/porkolt" element = {<Porkolt />} />
          <Route path = "/Hainan" element = {<Hainan />} />
          <Route path = "/shirazi" element = {<Shirazi />} />
          <Route path = "/ayam" element = {<Ayam />} />
          <Route path = "/borani" element = {<Borani />} />
          <Route path = "/chasu" element = {<Chasu />} />
          <Route path = "/Lebanon" element = {<Lebanon />} />
          <Route path = "/lamb" element = {<Lamb />} />
          <Route path = "/buta" element = {<Buta />} />
          <Route path = "/fajitas" element = {<Fajitas />} />
          <Route path = "/tikka" element = {<Tikka />} />
          <Route path = "/egusi" element = {<Egusi />} />
          <Route path = "/injera" element = {<Injera />} />
          <Route path = "/tagine" element = {<Tagine />} />
          <Route path = "/jollof" element = {<Jollof />} />
          <Route path = "/bobotie" element = {<Bobotie />} />
          <Route path = "/matooke" element = {<Matooke />} />
          <Route path = "/suya" element = {<Suya />} />
          <Route path = "/kenkey" element = {<Kenkey />} />
          <Route path = "/maafe" element = {<Maafe />} />
          <Route path = "/okra" element = {<Okra />} />
          <Route path = "/chak" element = {<Chak />} />
          <Route path = "/yam" element = {<Yam />} />
          <Route path = "/spaghetti" element = {<Spaghetti/>} />
          <Route path = "/groundnut" element = {<Groundnut/>} />
        </Routes>
      </div>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;