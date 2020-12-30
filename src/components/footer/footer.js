import React, { Component } from "react";
import { Container, Row } from "reactstrap";
import "./footer.css";
import { ReactComponent as Facebook } from "../../assets/svg/facebook.svg";
import { ReactComponent as Linkedin } from "../../assets/svg/linkedin.svg";
import { ReactComponent as Instagram } from "../../assets/svg/instagram.svg";
import FooterSvgBox from "./footer-svg-box";

class Footer extends Component {
  render() {
    return (
      <div className="subComponent-lg" id="footer">
        <Container>
          <header className="headerTitle text-center">
            <b>Не жди!</b> <b>Свяжись со мной сейчас</b>
          </header>
          <footer className="svg-group text-center">
            <Row>
              <FooterSvgBox
                icon={<Facebook width="45" height="45" strokeWidth="1" />}
              />
              <FooterSvgBox
                icon={<Linkedin width="45" height="45" strokeWidth="1" />}
              />
              <FooterSvgBox
                icon={<Instagram width="45" height="45" strokeWidth="1" />}
              />
            </Row>
            <hr />
            <br />
            <p>prod by Danylo Issadovskyi</p>
          </footer>
        </Container>
      </div>
    );
  }
}

export default Footer;
