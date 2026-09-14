import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "../../../../assets/images/Logo.png";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav>
        <Container>
          <Row className="align-items-center">
            {/* Logo */}
            <Col lg={2} xs={9}>
              <a href="" className="logo d-flex align-items-center gap-1">
                <img src={Logo} alt="logo" />
              </a>
            </Col>

            {/* Desktop Menu */}
            <Col lg={7} className="d-none d-lg-block">
              <ul className="mainList d-flex gap-5">
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Services</a>
                </li>
                <li>
                  <a href="">Portfolio</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
              </ul>
            </Col>

            {/* Desktop Buttons */}
            <Col lg={3} className="d-none d-lg-flex">
              <div className="registerBtns d-flex align-items-center gap-4">
                <a href="">Login</a>
                <a href="">Sign Up</a>
              </div>
            </Col>

            {/* Mobile Menu Button */}
            <Col xs={3} className="d-lg-none text-end">
              <button
                className="menuBtn"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <span className={menuOpen ? "open" : ""}></span>
                <span className={menuOpen ? "open" : ""}></span>
                <span className={menuOpen ? "open" : ""}></span>
              </button>
            </Col>
          </Row>
        </Container>

        {/* Mobile Menu */}
        <div className={`mobileMenu ${menuOpen ? "show" : ""}`}>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Portfolio</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>

          <div className="mobileBtns">
            <a href="">Login</a>
            <a href="">Sign Up</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
