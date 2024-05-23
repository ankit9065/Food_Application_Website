import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import Admin from "./Components/AdminLogin";
import User from "./Components/UserLogin";
import AdminSignUp from "./Components/AdminSignUp";
import UserSignUp from "./Components/UserSignUp";
import AdminDashboard from "./Components/AdminDashboard";
import ErrorPage1 from "./Components/ErrorPage1";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/*" element={<ErrorPage1/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/adminSignup" element={<AdminSignUp/>}/>
        <Route path="/userSignup" element={<UserSignUp/>}/>
        <Route path="/admindashboard/*" element={<AdminDashboard/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
