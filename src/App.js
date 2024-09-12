import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { Navbarpage } from './components/navbar';
import { HomePage } from './components/HomePage';
import { About } from './components/About';
import { ContactUs } from './components/ContactUs';
import { Paper } from './components/Paper';
import { BCA } from './components/Bca';
import { BBA } from './components/Bba';
import { MCA } from './components/Mca';
import { MBA } from './components/Mba';
import { Sem } from './components/sem1';
import { Sem2 } from './components/Sem2';
import { Sem3 } from './components/Sem3';
import { Sem4 } from './components/Sem4';
import { Sem5 } from './components/Sem5';
import { Sem6 } from './components/Sem6';
function App() {
  return (
   <>
   

   
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={< About />} />
      <Route path="/contactus" element={< ContactUs />} />
      <Route path="/paper" element={<Paper />} />
       <Route path="/paper/bca" element={<BCA />} />
       <Route path="/paper/bba" element={<BBA />} />
       <Route path="/paper/mca" element={<MCA />} />
       <Route path="/paper/mba" element={<MBA />} />
       <Route path="/paper/bca/sem1" element={<Sem />} />
       <Route path="/paper/bca/sem2" element={<Sem2 />} />
       <Route path="/paper/bca/sem3" element={<Sem3 />} />
       <Route path="/paper/bca/sem4" element={<Sem4 />} />
       <Route path="/paper/bca/sem5" element={<Sem5 />} />
       <Route path="/paper/bca/sem6" element={<Sem6 />} />
       <Route path="/paper/bba/sem1" element={<Sem />} />
       <Route path="/paper/bba/sem2" element={<Sem2 />} />
       <Route path="/paper/bba/sem3" element={<Sem3 />} />
       <Route path="/paper/bba/sem4" element={<Sem4 />} />
       <Route path="/paper/bba/sem5" element={<Sem5 />} />
       <Route path="/paper/bba/sem6" element={<Sem6 />} />
       <Route path="/paper/mca/sem1" element={<Sem />} />
       <Route path="/paper/mca/sem2" element={<Sem2 />} />
       <Route path="/paper/mca/sem3" element={<Sem3 />} />
       <Route path="/paper/mca/sem4" element={<Sem4 />} />
       <Route path="/paper/mca/sem5" element={<Sem5 />} />
       <Route path="/paper/mca/sem6" element={<Sem6 />} />
       <Route path="/paper/mba/sem1" element={<Sem />} />
       <Route path="/paper/mba/sem2" element={<Sem2 />} />
       <Route path="/paper/mba/sem3" element={<Sem3 />} />
       <Route path="/paper/mba/sem4" element={<Sem4 />} />
       <Route path="/paper/mba/sem5" element={<Sem5 />} />
       <Route path="/paper/mba/sem6" element={<Sem6 />} />








       






      <Route path="*" element={<HomePage />} />
    </Routes>
   </>
  );
}

export default App;
