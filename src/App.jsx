import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import { useState } from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserContext from "./context/UserContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  //   let ctx = useState(UserContext);
  //   console.log(ctx)

  // let loginValue = ctx.user.Login()

  // console.log(loginValue)

  return (
    <>
      <BrowserRouter>
        <div className="mb-5">
         
          <Navbar />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          {/* <Route path='/cart' element = {<Cart/>}/> */}
        </Routes>
        {/* yaha pr Footer daal skte hain */}

        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
