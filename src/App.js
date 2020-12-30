import React from "react";
import NavBar from "./components/nav-bar";
import Header from "./components/header";
import Carousel from "./components/carousel";
import Attendance from "./components/attendance";
import Footer from "./components/footer";
import Calendar from "./components/calendar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/register" component={Calendar} />
        </Switch>
      </Router>
    );
  }
}

function MainPage() {
  return (
    <div>
      <NavBar />
      <Header />
      <Carousel />
      <Attendance />
      <Footer />
    </div>
  );
}
