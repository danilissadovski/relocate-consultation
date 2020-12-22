import React from "react";
import NavBar from "./components/nav-bar";
import Header from "./components/header";
import Attendance from "./components/attendance";
import Footer from "./components/footer";

const App = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <Attendance />
      <Footer />
    </div>
  );
};

export default App;
