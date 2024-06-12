import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Keventerslogo from './Components/Keventers/Keventerslogo';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';

import Footer from './Components/Footer/Footer';
import ContactUs from "./Components/ContactUs/ContactUs";
import Careers from "./Components/Careers/Careers";
import Store from "./Components/Stores/Store";
import Home from "./Components/Home/Home";




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
