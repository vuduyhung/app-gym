import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import BgImage from "./assets/bg.png";
import Equipments from "./components/Equipments/Equipments";
import Banner from "./components/Banner/Banner";
import ProductTab from "./components/ProductTab/ProductTab";
import Testimonials from "./components/Testimonials/Testimonials";

import img1 from "./assets/2.png";
import img2 from "./assets/3.png";

const bannerData1 = {
  image: img1,
  title: "Get 25% off on your first order",
  subtitle:
    "Lorem ipsum odor amet, consectetuer adipiscing elit. Ridiculus enim lacus nullam scelerisque euismod justo. Lobortis volutpat dolor in nullam sapien dictum nisi nunc sollicitudin. Cursus habitant vestibulum lacinia potenti class primis. Ad eleifend mattis consectetur sollicitudin turpis lacinia. Mi quis auctor leo fermentum finibus duis bibendum. Phasellus dictum amet faucibus tempor in. Dui habitant ut morbi eleifend maximus mi tempus. Habitant facilisi netus hendrerit neque est mollis fermentum blandit. Urna integer ligula montes massa tempus mi ac facilisis. Etiam felis blandit tincidunt at elit dignissim rhoncus. Ullamcorper venenatis inceptos platea ut congue ac sagittis in conubia. Posuere convallis mauris integer velit tristique augue. Accumsan vivamus dignissim dictum elementum porta nam quam.",
  link: "#",
};

const bannerData2 = {
  image: img2,
  title: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
  subtitle:
    "Lorem ipsum odor amet, consectetuer adipiscing elit. Ad ridiculus nascetur nascetur nullam orci, aliquet nisi platea rhoncus. Penatibus massa penatibus mus nulla nibh interdum? Rhoncus dis conubia litora neque; vel sit taciti bibendum. Dignissim elit rutrum rutrum sollicitudin, sed integer lacinia duis? Suspendisse tristique ullamcorper varius praesent massa. Potenti condimentum leo mus scelerisque duis phasellus parturient. Hendrerit ullamcorper dictum risus posuere lectus maximus parturient scelerisque. Sit penatibus lacinia lacus litora posuere habitant. Laoreet eleifend donec maecenas curae; metus pretium turpis duis. Aliquet netus orci primis tristique diam aenean. Vestibulum pellentesque integer integer magna fusce. Neque malesuada gravida semper placerat lorem nascetur. Aptent fames ac ac commodo mollis massa.",
  link: "#",
};

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
        <Banner {...bannerData1} />
        {/* <Banner {...bannerData2} /> */}
        <ProductTab />
        <Testimonials />
      </div>
    </div>
  );
};

export default App;
