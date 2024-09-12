import { Navbarpage } from './navbar';
import { Footer } from './Footer';
import { Semester } from './Semesters';
import { Header } from './Header';





export function Sem5(){
    return (

    <> 
    <Header/>
    <Navbarpage />
    <Semester text={"Semester 5"} />
    <Footer />
        </>
    );
}