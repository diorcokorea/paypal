import React from "react";
import "./App.css";
import PayPal from "./components/PayPal";
import History from "./components/UseHistory";
import NavBar from "./components/Layouts/Navbar";
import Top from "./components/Layouts/Top";
import { Route, Routes } from "react-router-dom";

function App() {
  // const [value, setValue] = useState();

  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Top />} />

        <Route path="/paypal" element={<PayPal />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </div>
  );
}

export default App;
