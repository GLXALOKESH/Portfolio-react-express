import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import About from './pages/About';
import Navbar from './components/Navbar.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
     <Navbar />

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<About />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        
      </Routes>
    </Router>
  );
}

export default App
