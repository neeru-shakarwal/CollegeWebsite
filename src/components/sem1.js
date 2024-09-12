// import { Container, Row, Col, Navbar, Card } from 'react-bootstrap';
// import logo from '../assest/logo.png'
// import { TiLocationArrow } from "react-icons/ti";
// import { GiRotaryPhone } from "react-icons/gi";
import { Navbarpage } from './navbar';
import { Footer } from './Footer';
import { Header } from './Header'; 
import { Semester } from './Semesters';







export function Sem() {
    return (

        <>
           <Header />
            <Navbarpage />
            <Semester text={"Semester 1"}/>
            <Footer />
        </>
    );
}