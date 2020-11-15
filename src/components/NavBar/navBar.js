import React from "react";
import "./navBar.css";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Button
} from "reactstrap";

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
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
                                    <NavLink href="#">Про меня</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">Услуги</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">Контакты</NavLink>
                                </NavItem>
                                <Button color="success">Записаться</Button>{" "}
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;
