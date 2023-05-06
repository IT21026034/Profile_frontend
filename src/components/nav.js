import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from "react-bootstrap";

export default function Navh() {
  return (
    <>
      <Navbar style={{ backgroundColor: '#353535', height: "80px" }} variant="light">
        <Container>
          <span>
            <Image style={{ width: "50px", height: "45px" }}
              src=
              "https://cdn.dribbble.com/users/1561522/screenshots/3929068/food-icon-gif-revised2.gif"
              roundedCircle
            />

          </span>
          <Nav.Link style={{ color: "#ffffff", paddingRight: "400px", marginTop: "10px" }} href="#home">Home</Nav.Link>
          <Nav className="me-left">
            <Nav.Link style={{ color: "#ffffff", marginRight: "80px" }} href="#home"> Reviws</Nav.Link>
            <Nav.Link style={{ color: "#ffffff", marginRight: "80px" }} href="#features">  Offers</Nav.Link>
            <Nav.Link style={{ color: "#ffffff", marginRight: "80px" }} href="#pricing">Uploads</Nav.Link>
            <Nav.Link style={{ color: "#ffffff", marginRight: "80px" }} href="#pricing">Profile</Nav.Link>

          </Nav>
        </Container>
      </Navbar>



    </>
  );
}

