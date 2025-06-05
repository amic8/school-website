import Navbar from './components/Navbar';
import { Routes,Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Uniform from './components/Uniform';
import Contact from './components/Contact';

function App() {
  const location = useLocation();
  const bgStyle = {
    backgroundImage: `url('/school-bg.jpg')`, 
    backgroundSize: 'cover',
    minHeight: '150vh',
    width: '100vw', 
    paddingTop: '90px', 
    overflowY: 'auto',
  };
  return (
    <>
      <Navbar />
      <div style={bgStyle}>
        {location.pathname !== "/" ? "" :<Home />}
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/uniform" element={<Uniform />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}
export default App;