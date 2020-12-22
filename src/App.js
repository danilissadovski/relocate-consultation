import React from "react";
import NavBar from "./components/nav-bar";
import Header from "./components/header";
import Carousel from "./components/carousel";
import Attendance from "./components/attendance";
import Footer from "./components/footer";

const App = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <Carousel />
      <Attendance />
      <Footer />
    </div>
  );
};

export default App;
