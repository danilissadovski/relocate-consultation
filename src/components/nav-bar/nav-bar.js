import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Button,
} from "reactstrap";
import "./nav-bar.css";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar
          color="faded"
          dark
          expand="md"
          fixed={`top`}
          className="navDark"
        >
          <Container>
            <NavbarBrand href="#">Консультации</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="#header">Клиентам</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#carousel">Про меня</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#attendance">Услуги</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#footer">Контакты</NavLink>
                </NavItem>
                <Link to="/register">
                  <Button color="success">Записаться</Button>
                </Link>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
