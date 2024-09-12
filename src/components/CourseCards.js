import { Container, Row, Col, Navbar, Card } from 'react-bootstrap';
import bca from '../assest/Reuseable/bca_logo.png'
import bba from '../assest/Reuseable/bba_logo.png'
import mba from '../assest/Reuseable/mba_logo.png'
import manage from '../assest/Reuseable/management_logo.png'
import app from '../assest/Reuseable/computer_application_logo.png'
import Button from 'react-bootstrap/Button';





export function CourseCard(){
    return (
        <>
       <Container>
        <Row>
          <Col md={6} className='book mt-4' >
            <h3 style={{ fontFamily: 'fantacy', margin: '1rem', marginLeft: '0.3rem' }} >Purpose  of <br /> Digital Library @MAIMT</h3>
            <p className='mx-6'>Digital libraries can provide users with access to rare and out-of-print materials that might be difficult or impossible to locate in physical libraries. Digital libraries also offer a variety of search and sorting features, as well as social media-like features that can connect users with others to discuss topics.</p>
            <Button variant="outline-success" style={{ backgroundColor:'rgb(0,116,109)' ,color:'white', border: '1px solid', borderRadius: '1rem', padding: '1',paddingLeft:'1rem',paddingLeft:'1rem',paddingRight:'1rem',margin:'1rem' }}>Details</Button>{' '}
          </Col>
          <Col md={6} className='bookname mt-5 '>
          </Col>
        </Row>
      </Container>
      <Container fluid style={{ backgroundColor: 'rgb(0,116,109' }} className='mb-4' sm={12}>
        <Row style={{  textAlign: 'center', marginTop: '2rem' }}>
          <Col md={12} className='book mt-4' >
            <h1 style={{ backgroundColor: 'rgb(0,116,109',color:'white'}}>E-Content</h1>
          </Col>
        </Row>
        <Row style={{ marginTop: '2rem',position:'relative' }} >
          <Col className='d-flex justify-content-center ' >
            <Card
              style={{ width: '18rem', height: '10rem' }}
              className="mb-2 bg-success card1 card2"
              >
              <Card.Body  style={{height:"max-content"}} >
                <Card.Text className='card1'>
                   <img style={{height:'7rem',width:'7rem',marginLeft:'4.3rem',position:'absolute',top:'-0.5rem',  }} src={bca} alt='bca' />
                    <h3 style={{textAlign:'center',marginTop:'6.5rem'}}>BCA</h3>
                </Card.Text>
              </Card.Body>

            </Card>
          </Col >

          <Col className='d-flex justify-content-center' >
            <Card
              style={{ width: '18rem', height: '10rem' }}
              className="mb-2 bg-success card1 card2"
              >
              <Card.Body  style={{height:"max-content"}}>
                <Card.Text className='card1'> 
                <img style={{height:'7rem',width:'7rem',marginLeft:'4.3rem',position:'absolute',top:'-0.5rem',border:'0px solid', borderRadius:'3.5rem' }} src={bba} alt='bca' />
                <h3 style={{textAlign:'center',marginTop:'6.5rem'}}>BBA</h3>
                </Card.Text>
              </Card.Body>

            </Card>
          </Col>

          <Col className='d-flex justify-content-center'>
            <Card
              style={{ width: '18rem', height: '10rem' }}
              className="mb-2 bg-success card1 card2"
            >
              <Card.Body  style={{height:"max-content"}}>
                <Card.Text className='card1'>
                   <img style={{height:'7rem',width:'7rem',marginLeft:'4.3rem',position:'absolute',top:'-0.5rem',border:'0px solid', borderRadius:'3.5rem'}} src={bca} alt='bca' 
                   
                   />
                   <h3 style={{textAlign:'center',marginTop:'6.5rem'}}>MCA</h3>
                </Card.Text>
              </Card.Body>

            </Card>
          </Col>
        </Row>
        <Row className='mt-4 pb-4' style={{position:'relative'}}>
          <Col className='d-flex justify-content-center'>
          <Card
              style={{ width: '18rem', height: '10rem' }}
              className="mb-2 bg-success card1 card2"
              >
              <Card.Body style={{height:"max-content"}}>
                <Card.Text  className='card1'>
                <img style={{height:'7rem',width:'7rem',marginLeft:'4.3rem',position:'absolute',top:'-0.5rem',border:'0px solid', borderRadius:'3.5rem'}}
          
          src={mba} alt='bca' />
                <h3  style={{textAlign:'center',marginTop:'6.5rem'}}>MBA</h3>

                 
                </Card.Text>
              </Card.Body>

            </Card>
          </Col>
          <Col className='d-flex justify-content-center'>
          <Card
              style={{ width: '18rem', height: '10rem' }}
              className="mb-2 bg-success card1 card2"
              >
              <Card.Body  style={{height:"max-content"}}>
                <Card.Text className='card1'>
                <img style={{height:'7rem',width:'7rem',marginLeft:'4.3rem',position:'absolute',top:'-0.5rem',border:'0px solid', borderRadius:'3.5rem'}} 
                
                
                src={manage} alt='bca' />
                <h3 style={{textAlign:'center',marginTop:'6.5rem'}}>Management</h3>
                 
                </Card.Text>
              </Card.Body>

            </Card>
          </Col>
          <Col className='d-flex justify-content-center'>
          <Card
              style={{ width: '18rem', height: '10rem' }}
              className="mb-2 bg-success card1 card2"
              >
              <Card.Body  style={{height:"max-content"}}>
                <Card.Text className='card1'>
                <img style={{height:'7rem',width:'7rem',marginLeft:'4.3rem',position:'absolute',top:'-0.5rem',border:'0px solid', borderRadius:'3.5rem'}} src={app} alt='bca' 
                
                />
                <h3 style={{textAlign:'center',marginTop:'6.5rem'}}>Application</h3>
                 
                </Card.Text>
              </Card.Body>

            </Card>
          </Col>

        </Row>

      </Container >



    </>
    );
}