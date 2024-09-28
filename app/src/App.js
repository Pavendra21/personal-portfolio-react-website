import './App.css';
import './index.css'
import Navbar from './Components/Navbar';
import LandingPage from './Components/Landing_page';
import Contact from './Components/Contact';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './Components/About';
 
function App() {
  return (
    <>
      <Router>
        <div className="App bg-black text-white min-h-screen">
          <Navbar />
          <Routes>

            <Route path="/" element={<LandingPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
 
          </Routes>

        </div>
      </Router>
    </>
  );
}

export default App;
