import { Container, Row, Col, Navbar, Card } from 'react-bootstrap';
import { GiRotaryPhone } from "react-icons/gi";
import logo from '../assest/logo.png'
import { TiLocationArrow } from "react-icons/ti";





export function Header(){
    return (
        <Container fluid style={{ margin: '0', padding: '0', overflow: 'hidden' }}>
        <Row>
          <Col md={7}>
            <img src={logo} alt='Maimt Logo' style={{ width: '5vw', height: '10vh', margin: '0.5rem', marginLeft: '1.5rem' }} />
          </Col>
          <Col style={{ padding: '1.2rem', marginTop: '0.5rem' }}>
            <span className='fs-4 mx-2 col1' > <GiRotaryPhone /> </span> 9355455140
          </Col>
          <Col style={{ position: 'relative', left: '3rem', top: '2.2rem' }} md={3}>
            <TiLocationArrow  className='fs-3 col1' />director@maimt.com
          </Col>
        </Row>
      </Container>
    );
}