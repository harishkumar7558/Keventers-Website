import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import About from './Components/About/About';
import Keventerslogo from './Components/Keventers/Keventerslogo';
import Navbar from './Components/Navbar/Navbar';

import Careers from "./Components/Careers/Careers";
import ContactUs from "./Components/ContactUs/ContactUs";
import Footer from './Components/Footer/Footer';
import Home from "./Components/Home/Home";
import Store from "./Components/Stores/Store";




function App() {
  return (
    <div className="App">
      <Keventerslogo/>
      <Navbar/>
     
      
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<ContactUs/>}></Route>
        <Route path="/career" element={<Careers/>}></Route>
        <Route path="/store" element={<Store/>}></Route>
        
      </Routes>
    </BrowserRouter>
      <Footer/>
     
    </div>
  );
}

export default App;
