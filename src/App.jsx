import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import BgImage from "./assets/bg.png";
import Equipments from "./components/Equipments/Equipments";

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroudndAttachment: "fixed",
};

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <div style={bgStyle}>
        <Navbar />
        <Hero />
        <Equipments />
      </div>
    </div>
  );
};

export default App;
