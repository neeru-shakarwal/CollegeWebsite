import { Navbarpage } from './navbar';
import { Footer } from './Footer';
import { Header } from './Header';
import { Courses } from './Courses';

export function MBA(){
    return(

        <>
           <Header />      
            <Navbarpage />
            <Courses />
            <Footer />
        </>
    );
}