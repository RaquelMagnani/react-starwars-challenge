import React from "react";
import { Nav, NavbarBrand } from "react-bootstrap";
import logo from "../images/logo.png";

const NavigationMenu = () => {
  return (
    <Nav className="p-3 d-flex justify-content-between" activeKey="/home">
      <Nav.Item>
        <NavbarBrand href="/">
          <img src={logo} alt="Star Wars logo" style={{ width: "5rem" }} />
        </NavbarBrand>
      </Nav.Item>
      <Nav.Item className=" d-flex align-items-center navigationLink">
        <Nav.Link href="/favorite">Favorites</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};
export default NavigationMenu;
