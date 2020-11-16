import React from "react";
import { Button } from "reactstrap";
import "./main.css";

class Main extends React.Component {
  render() {
    return (
      <div>
        <main className="cover-page" id="hero">
          <section className="wrapped-page">
            <div className="item-center">
              <h1>Консультации</h1>
              <h3>Переезды | Направление | Помощь</h3>
              <Button outline color="success" href="#">
                Записаться
              </Button>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default Main;
