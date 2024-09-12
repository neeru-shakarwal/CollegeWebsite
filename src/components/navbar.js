import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Navbar.css'
import { Link } from 'react-router-dom';
export function Navbarpage(){
    return(
            <>
              <Navbar style={{backgroundColor:'skyblue'}} >
                <Container>
                  <Nav className="me-auto mx-5  d-flex justify-content-center ">
                    <Nav.Link className="text-light hover-link navbar1 " as={Link} to={"/"} >Home</Nav.Link>
                    <Nav.Link className="text-light hover-link navbar2"  as={Link}  to={"/about"} >About</Nav.Link>
                    <Nav.Link className="text-light hover-link navbar3"  as={Link} to={"/paper"} >Paper </Nav.Link>
                    <Nav.Link className="text-light hover-link navbar4" as={Link} to={"/"}>Syllabus </Nav.Link>
                    <Nav.Link className="text-light hover-link navbar5" as={Link} to={"/"} >Rule & Regulation </Nav.Link>
                    <Nav.Link className="text-light hover-link navbar6" as={Link} to={"/"} > Journals</Nav.Link>
                    <Nav.Link className="text-light hover-link navbar7" as={Link} to={"/"} > Time Table</Nav.Link>
                    <Nav.Link className="text-light hover-link navbar8" as={Link} to={"/"} >E-Content</Nav.Link>
                    <Nav.Link className="text-light hover-link navbar9"  as={Link} to={"/contactus"}>Contact Us</Nav.Link>

                  </Nav>
                </Container>
              </Navbar>
              </>
    );
}