import { Container, Row,Col } from "react-bootstrap";


export function Footer(){
    return(

      <>
        <Container fluid>
        <Row>
            <Col style={{backgroundColor:'black',color:'white', textAlign:'center',padding:'0.5rem',position:'fixed',bottom:'0'}}>
           <footer>© Copyright Maharaja Agrasen Institute of Management and Technology 2020.</footer> 
            </Col>
        </Row>
      </Container>
      
      </>




    );
}