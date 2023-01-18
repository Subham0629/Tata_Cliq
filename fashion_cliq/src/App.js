import './App.css';
import  Navbar  from "./Components/Navbar";
import LandingPage from "./Pages/LandingPage";
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <LandingPage/>
      {/* <Routes>
    <Route path="/LandingPage" element={ <LandingPage/>}></Route>
    <Route path="/contact" element={<h1>Contact Page</h1>}></Route>
    <Route path="/about-us" element={<h1>About Page</h1>}></Route>
    <Route path="/services" element={<h1>Services Page</h1>}></Route>
    <Route path="/login" element={<h1>Login Page</h1>}></Route>

    </Routes> */}
    </div>
  );
}

export default App;
