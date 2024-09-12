import { Navbarpage } from './navbar';
import { Footer } from './Footer';
import { Header } from './Header';
import { Semester } from './Semesters';






export function Sem6(){
    return (

        <> 
         <Header />
        <Navbarpage />
        <Semester text={"Semester 6"}/>
        <Footer />
        </>
    );
}