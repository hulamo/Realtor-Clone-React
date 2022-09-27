
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import Offers from './pages/Offers';
import ForgotPassword from './pages/ForgotPassword';
import Header from './components/Header';


function App() {
  return (
    <div className='container mx-auto px-8'>
 <Router>
  <Header/>
  <Routes>
<Route path="/" element={<Home/>}></Route>
<Route path="/sign-up" element={<SignUp/>}></Route>
<Route path="/sign-in" element={<SignIn/>}></Route>
<Route path="/profile" element={<Profile/>}></Route>
<Route path="/offers" element={<Offers/>}></Route>
<Route path="/forgot-password" element={<ForgotPassword/>}></Route>
  </Routes>
 </Router>
 </div>
  );
}

export default App;
