import { Container, Row, Col, Navbar, Card } from 'react-bootstrap';
import logo from '../assest/logo.png'
import { TiLocationArrow } from "react-icons/ti";
import { GiRotaryPhone } from "react-icons/gi";
import { Navbarpage } from './navbar';
import { Footer } from './Footer';
import { Link } from 'react-router-dom';









export function BCA(){
    return(

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
           
            <Container className='sem ' style={{backgroundColor:'gray',height:'75vh'}} fluid > 
                <Row style={{position:'relative'}}>
                    <Col md={4} className=' d-flex justify-content-center' >                    
                    <Card
                    style={{ width: '18rem', height: '8rem',marginTop:'3rem',marginLeft:'5rem',position:'absolute',left:'5rem'
                    }}
                    className="card2 " >
                    <Card.Body style={{ backgroundColor:'skyblue' }} >
                        <Card.Text >
                            <h3 style={{textAlign:'center',margin:'2.5rem'}} >
                                <Link to="sem1" style={{textDecoration:'none',color:'white'}}>Semester I</Link>  </h3>
                            </Card.Text>
                        </Card.Body>
                    </Card></Col>

                    <Col md={4} className=' d-flex justify-content-center'>
                    <Card
                    style={{ width: '18rem', height: '8rem',marginTop:'3rem',position:'absolute',left:'32rem'
                    }}
                    className="card2 " >
                    <Card.Body style={{ backgroundColor:'skyblue' }} >
                        <Card.Text >
                            <h3 style={{textAlign:'center',margin:'2.5rem'}} >
                                <Link to="sem2" style={{textDecoration:'none',color:'white'}}>Semester II</Link>  </h3>
                            </Card.Text>
                        </Card.Body>
                    </Card></Col>
                    <Col md={4} className=' d-flex justify-content-center'>
                    <Card
                    style={{ width: '18rem', height: '8rem',marginTop:'3rem',marginRight:'8rem'
                    }}
                    className="" >
                    <Card.Body style={{ backgroundColor:'skyblue' }} >
                        <Card.Text >
                            <h3 style={{textAlign:'center',margin:'2.5rem'}} >
                                <Link to="sem3" style={{textDecoration:'none',color:'white'}}>Semester III</Link>  </h3>
                            </Card.Text>
                        </Card.Body>
                    </Card></Col>
                </Row>
                <Row style={{marginTop:'2.5rem',marginLeft:'5.9rem',position:'relative'}}>
                    <Col md={4}>
                    <Card
                    style={{ width: '18rem', height: '8rem',position:'absolute',left:'7rem'
                    }}
                    className="card2 " >
                    <Card.Body style={{ backgroundColor:'skyblue' }} >
                        <Card.Text >
                            <h3 style={{textAlign:'center',margin:'2.5rem'}} >
                                <Link to="sem4" style={{textDecoration:'none',color:'white'}}>Semester IV</Link>  </h3>
                            </Card.Text>
                        </Card.Body>
                    </Card></Col>
                    <Col md={4}>
                    <Card
                    style={{ width: '18rem', height: '8rem',
                    }}
                    className="card2 " >
                    <Card.Body style={{ backgroundColor:'skyblue' }} >
                        <Card.Text >
                            <h3 style={{textAlign:'center',margin:'2.5rem'}} >
                                <Link to="sem5" style={{textDecoration:'none',color:'white'}}>Semester V</Link>  </h3>
                            </Card.Text>
                        </Card.Body>
                    </Card></Col>
                    <Col md={4}>
                    <Card
                    style={{ width: '17rem', height: '8rem',position:'absolute',right:'8.9rem'
                    }}
                    className="card2 " >
                    <Card.Body style={{ backgroundColor:'skyblue' }} >
                        <Card.Text >
                            <h3 style={{textAlign:'center',margin:'2.5rem'}} >
                                <Link to="sem6" style={{textDecoration:'none',color:'white'}}>Semester VI</Link>  </h3>
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