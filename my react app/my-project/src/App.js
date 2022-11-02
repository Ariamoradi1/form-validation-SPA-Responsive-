import React from "react";
import FormLogin from "./Form/FormLogin";
import Recovery from "./Recovery/Recovery";
import SignUP from "./SignUp/SignUp";
import { Routes, Route } from "react-router-dom";


function App() {
  return ( 
  <div>
   
    <Routes>
    <Route path="/" element={<SignUP />}/>
    <Route path="/FormLogin" element={<FormLogin />}/>
    <Route path="/Recovery" element={<Recovery />}/>
    </Routes>

   
   
  </div>
  );
}

export default App;
