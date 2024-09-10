import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Logo from "../assets/images/landpress-dark.svg";
import Search from "../assets/images/image.png";
import React, { useState } from "react";
import Modal from "antd/es/modal/Modal";


const Head = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  function handleCancel() {
    setIsModalVisible(false);
  }
  function showModal() {
    setIsModalVisible(true);
  }
  function handleOk() {
    setIsModalVisible(false);
  }
  return (
    <>
      <Navbar expand="lg" className="navbar ">
        <Container className="nav-container containerHead ">
          <Navbar.Brand href="#home">
            <img src={Logo}></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="nav-links" href="about">
                About
              </Nav.Link>
              <Nav.Link className="nav-links" href="work">
                Work
              </Nav.Link>
              <Nav.Link className="nav-links" href="blog">
                Blog
              </Nav.Link>
              <Nav.Link className="nav-links" href="contact">
                Contact
              </Nav.Link>
              <Button
                variant="none"
                title="Search in This Site"
                onClick={showModal}>
                <img className="search-icon" src={Search}></img>
              </Button>
              <Button className="ready btn-color">Ready to Talk ?</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div>
        <Modal
          title="Search in this Site"
          open={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}>
          <input
            type="text"
            placeholder=" Search here.."
            style={{ borderRadius: "10px" }}></input>
        </Modal>
      </div>

      


    </>
  );
};

export default Head;
