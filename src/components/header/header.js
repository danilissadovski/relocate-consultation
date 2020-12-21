import React from "react";
import { Button } from "reactstrap";
import "./header.css";
const Header = () => (
  <div>
    <main className="cover-page" id="hero">
      <section className="wrapped-page">
        <div className="item-center">
          <h1>Консультации</h1>
          <h3>Переезды | Направления | Помощь</h3>
          <Button color="success">Записаться</Button>
        </div>
      </section>
    </main>
  </div>
);

export default Header;
