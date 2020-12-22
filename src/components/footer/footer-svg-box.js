import React from "react";
import { Col } from "reactstrap";
import "./footer.css";

export default class FooterSvgBox extends React.Component {
  render() {
    return (
      <Col md="4" xs="6">
        <div className="svg-card-3">
          <a href="#">{this.props.icon}</a>
        </div>
      </Col>
    );
  }
}
