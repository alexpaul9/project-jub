// App.jsx
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';

// Pages
import Home from './Pages/Home';
// import About from './Pages/About';
import Sustainability from './Pages/Sustainability';
import Investors from './Pages/Investors';
// import Career from './Pages/Career';
// import Newsroom from './Pages/Newsroom';
// import Contact from './Pages/Contact';

function App() {
  return (
    <Router>
      <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/investor-relations" element={<Investors />} />
            <Route path="/sustainability" element={<Sustainability />} />
            {/* <Route path="/career" element={<Career />} /> */}
            {/* <Route path="/newsroom" element={<Newsroom />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
      </Layout>
    </Router>
  );
}

export default App;
