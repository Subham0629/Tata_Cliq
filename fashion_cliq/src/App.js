import './App.css';
import LandingPage from "./Pages/LandingPage";
import { Routes,Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
    <Route path="/" element={ <LandingPage/>}></Route>
    {/* <Route path="/contact" element={<h1>Contact Page</h1>}></Route>
    <Route path="/about-us" element={<h1>About Page</h1>}></Route>
    <Route path="/services" element={<h1>Services Page</h1>}></Route>
    <Route path="/login" element={<h1>Login Page</h1>}></Route> */}

    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
