import React from "react";
import { Col } from "reactstrap";
import "./attendance.css";

export default class AttendanceBox extends React.Component {
  render() {
    return (
      <Col lg="3" md="6" sm="6">
        <div className="svg-card">
          {this.props.icon}
          <p>{this.props.text}</p>
        </div>
      </Col>
    );
  }
}
