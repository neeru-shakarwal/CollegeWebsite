import { Container, Row, Col, Navbar, Card } from 'react-bootstrap';
import logo from '../assest/logo.png'
import { TiLocationArrow } from "react-icons/ti";
import { GiRotaryPhone } from "react-icons/gi";
import { Navbarpage } from './navbar';
import { Footer } from './Footer';
import { Link } from 'react-router-dom';


export function Paper() {
    return (
        <>
            <Container fluid style={{ margin: '0', padding: '0', overflow: 'hidden' }}>
                <Row>
                    <Col md={7}>
                        <img src={logo} alt='Maimt Logo' style={{ width: '5vw', height: '10vh', margin: '0.5rem', marginLeft: '1.5rem' }} />
                    </Col>
                    <Col style={{ padding: '1.2rem', marginTop: '0.5rem' }}>
                        <span className='fs-4 mx-2 col1' style={{ fontSize: '1rem', padding: '0.5rem' }}> <GiRotaryPhone /> </span> 9355455140
                    </Col>
                    <Col style={{ position: 'relative', left: '3rem', top: '2.2rem' }} md={3}>
                        <TiLocationArrow className='fs-3 col1' />director@maimt.com
                    </Col>
                </Row>
            </Container>
            <Navbarpage />
            <Container className='bgc' fluid>
                <Row >
                    <Col className='' style={{marginTop:'7rem',}}>
                    <Card
                    style={{ width: '18rem', height: '10rem',marginLeft:'17.5rem'
                
                    }}
                    className="card2 "
                    >
                        <Card.Body style={{ backgroundColor:'skyblue' }} >
                            <Card.Text >
                                <h3 style={{textAlign:'center',margin:'2.5rem'}} >
                                  <Link to="bca" style={{textDecoration:'none',color:'white'}}>BCA</Link>  </h3>
                            </Card.Text>
                        </Card.Body>

                    </Card>
                    </Col>
                    <Col className=' ' style={{marginTop:'7.2rem'}}>
                    <Card
                    style={{ width: '18rem', height: '10rem',marginLeft:'2rem' }}
                    className="mb-2 card2"
                    >
                        <Card.Body style={{backgroundColor:'rgb(135, 206, 235)' }} >
                            <Card.Text >
                                <h3 style={{textAlign:'center',margin:'2.5rem'}}>
                                <Link to="bba" style={{textDecoration:'none',color:'white'}}>  
                                    BBA</Link>  </h3>
                            </Card.Text>
                        </Card.Body>

                    </Card>
                  </Col>
                  </Row>
                  <Row>
                  <Col md={6} className=' d-flex justify-content-center mt-5 '>
                    <Card
                    style={{ width: '18rem', height: '10rem',marginLeft:'15rem' }}
                    className="mb-2 card2"
                    >
                        <Card.Body style={{ backgroundColor:'skyblue' }} >
                            <Card.Text >
                                <h3 style={{textAlign:'center',margin:'2.5rem'}}>
                                <Link to="mca" style={{textDecoration:'none',color:'white'}}> 
                                    MCA </Link> </h3>
                            </Card.Text>
                        </Card.Body>

                    </Card>
                    </Col>
                    <Col className='mt-5'>
                    <Card
                    style={{ width: '18rem', height: '10rem',marginLeft:'2rem' }}
                    className="mb-2 card2"
                    >
                        <Card.Body style={{backgroundColor:'skyblue' }} >
                            <Card.Text >
                                <h3 style={{textAlign:'center',margin:'2.5rem'}}>
                                <Link to="mba" style={{textDecoration:'none',color:'white'}}>    
                                    MBA </Link></h3>
                            </Card.Text>
                        </Card.Body>

                    </Card>

                    </Col>     
                </Row>
            </Container>






            <Footer />
        </>
    );
}