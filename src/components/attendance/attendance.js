import React, { Component } from "react";
import { Container, Row } from "reactstrap";
import "./attendance.css";
import { ReactComponent as Award } from "../../assets/svg/award.svg";
import { ReactComponent as Shield } from "../../assets/svg/shield.svg";
import { ReactComponent as Compass } from "../../assets/svg/compass.svg";
import { ReactComponent as Heart } from "../../assets/svg/heart.svg";
import AttendanceBox from "./attendance-box";

class Attendance extends Component {
  render() {
    return (
      <div>
        <div className="subComponent">
          <Container>
            <header className="headerTitle text-center">
              <h1>Про услуги</h1>
              <p>Консультации по переезду</p>
            </header>
            <section className="svg-group text-center subComponent">
              <Row>
                <AttendanceBox
                  icon={<Award width="48" height="48" strokeWidth="1" />}
                  text="Хорошая цена"
                />
                <AttendanceBox
                  icon={<Shield width="48" height="48" strokeWidth="1" />}
                  text="Гарантия помощи"
                />
                <AttendanceBox
                  icon={<Heart width="48" height="48" strokeWidth="1" />}
                  text="Положительные отзывы"
                />
                <AttendanceBox
                  icon={<Compass width="48" height="48" strokeWidth="1" />}
                  text="Шото там ещё"
                />
              </Row>
            </section>
          </Container>
        </div>
      </div>
    );
  }
}

export default Attendance;
