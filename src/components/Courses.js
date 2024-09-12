import { Container, Row, Col, Navbar, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';



export function Courses(){
    return(
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
            style={{ width: '18rem', height: '8rem',position:'absolute',left:'3.2rem'
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


    );
}