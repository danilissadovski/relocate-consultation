import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./header.css";
const Header = () => (
  <div id="header">
    <main className="cover-page" id="hero">
      <section className="wrapped-page">
        <div className="item-center">
          <h1>Консультации</h1>
          <h3>Переезды | Направления | Помощь</h3>
          <Link to="/register">
            <Button color="success">Записаться</Button>
          </Link>
        </div>
      </section>
    </main>
  </div>
);

export default Header;
