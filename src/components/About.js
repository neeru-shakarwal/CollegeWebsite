import { Container, Row ,Col, Navbar} from 'react-bootstrap';
import { Navbarpage } from './navbar';
import { Footer } from './Footer';
import { Header } from './Header';



export function About(){
    return(
    
         <>
      <Header />
      <Navbarpage />
      <Container fluid>
        <Row>   
            <Col className='bg' >
            <h1 className='mx-5' style={{color: 'skyblue',margin:'1.7rem'}}>About Us</h1>
             <p className='mx-5' style={{color:'whitesmoke',margin:'0.5rem'}}>MAIMT was established in 1997 as first Management Institute of district Yamuna Nagar, as a result of vision of Maharaja Agrasen Sabha. MAIMT is affiliated to Kurukshetra University and approved by AICTE.</p>
             <p className='mx-5' style={{color:'whitesmoke',margin:'0.5rem'}}>The institute currently runs MBA, MCA, BBA, BCA and BCA-CTIS (Cloud Technologies and Information Security), courses with intake of 120 students each and is known for the best placements in the region. The education pedagogy has been designed to create the professional who are not only top of the class technocrats and managers but also disciplined, constructive and responsible member of the society.
             </p>
             <p className='mx-5' style={{color:'whitesmoke',margin:'0.5rem'}}>MAIMT is the only college which has placed each and every student in a reputed company in the core fields of Software Engineering, Human Resource, Finance and Accounting and Marketing</p>
             <p className='mx-5' style={{color:'whitesmoke',margin:'0.5rem'}}>MAIMT has a dedicated ED cell which helps students in developing the entrepreneurial skills and help them through seed funding as wel</p>
             <p className='mx-5' style={{color:'whitesmoke',margin:'0.5rem'}}>MAIMT is an institution where ambition meets opportunity, and where the realms of management and technology converge to sculpt the leaders of tomorrow. At MAIMT, we recognize the profound importance of imparting not only academic knowledge but also the practical skills and real-world experience that will pave your path to the top corporates.</p>
             <p className='mx-5' style={{color:'whitesmoke',margin:'0.5rem'}}>MAIMT is an institution where ambition meets opportunity, and where the realms of management and technology converge to sculpt the leaders of tomorrow. At MAIMT, we recognize the profound importance of imparting not only academic knowledge but also the practical skills and real-world experience that will pave your path to the top corporates.</p>
            </Col>
        </Row>
      </Container>
      <Footer />
   

        </>
    );
}