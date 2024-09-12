import { Container, Row, Col, Navbar, Card } from 'react-bootstrap';
import logo from '../assest/logo.png'
import { TiLocationArrow } from "react-icons/ti";
import { GiRotaryPhone } from "react-icons/gi";
import { Navbarpage } from './navbar';
import { Footer } from './Footer';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { Courses } from './Courses';




export function MCA(){
    return(

        <>
            <Header />
            <Navbarpage />
            <Courses />
            <Footer />
        </>
    );
}