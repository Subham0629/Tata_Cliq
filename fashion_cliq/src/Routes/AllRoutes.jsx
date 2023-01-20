import { Route,Routes } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import PrivateRoute from "./PrivateRoute";
import AdminPage from "../Components/AdminPage";
import Adminlogin from "../Components/Adminlogin";
import Cartitems from "../Pages/Cartitems";
function AllRoutes() {
  return <div>
  <Routes>
  
  <Route path="/" element={ <LandingPage/>}></Route>
  <Route path="/AdminPage" element={<PrivateRoute><AdminPage/></PrivateRoute> }></Route>
     <Route path="/Adminlogin" element={<Adminlogin/>}></Route> 
     <Route path="/Cartitems" element={ <Cartitems/>}></Route>
  </Routes>
  </div>;
}

export default AllRoutes;
